// Simplified 2-D model-rocket flight: constant average thrust along the velocity
// vector, gravity, and quadratic drag. Good enough for intuition, not for design.
// Shared by the server render (default flight) and the browser (interactive).

export type Motor = { id: string; label: string; impulse: number; burn: number; propMass: number };

// Approximate total impulse (N·s), burn time (s), and propellant mass (kg) for common hobby motor classes
export const MOTORS: Motor[] = [
  { id: 'B6', label: 'B6 · 5 N·s', impulse: 5, burn: 0.85, propMass: 0.0062 },
  { id: 'C6', label: 'C6 · 10 N·s', impulse: 10, burn: 1.85, propMass: 0.0124 },
  { id: 'D12', label: 'D12 · 20 N·s', impulse: 20, burn: 1.65, propMass: 0.0211 },
  { id: 'E12', label: 'E12 · 30 N·s', impulse: 30, burn: 2.4, propMass: 0.0358 },
];

export type FlightPoint = { t: number; x: number; y: number; v: number };
export type Flight = {
  points: FlightPoint[];
  burnoutIndex: number;
  apogeeIndex: number;
  apogee: number;
  range: number;
  maxV: number;
  time: number;
};

const G = 9.81;
const RHO = 1.2;
const CD = 0.55;
const AREA = Math.PI * 0.0125 ** 2; // 25 mm body tube
const DRY_MASS = 0.11; // kg, rocket without motor propellant

export function simulate(motorId: string, angleDeg: number, rail = 1): Flight {
  const m = MOTORS.find((x) => x.id === motorId) ?? MOTORS[2];
  const thrust = m.impulse / m.burn;
  const ang = (angleDeg * Math.PI) / 180;
  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let t = 0;
  const dt = 0.01;
  const points: FlightPoint[] = [{ t, x, y, v: 0 }];
  let burnoutIndex = 0;
  let apogeeIndex = 0;
  let apogee = 0;
  let maxV = 0;

  while (t < 120) {
    const mass = DRY_MASS + m.propMass * Math.max(0, 1 - t / m.burn);
    const v = Math.hypot(vx, vy);
    // Direction: along the launch rail until it clears, then along velocity (gravity turn)
    const onRail = Math.hypot(x, y) < rail;
    const dirX = onRail || v < 0.5 ? Math.cos(ang) : vx / v;
    const dirY = onRail || v < 0.5 ? Math.sin(ang) : vy / v;
    const F = t < m.burn ? thrust : 0;
    const drag = 0.5 * RHO * CD * AREA * v * v;
    let ax = (F * dirX - (v > 0 ? (drag * vx) / v : 0)) / mass;
    let ay = (F * dirY - (v > 0 ? (drag * vy) / v : 0)) / mass - G;
    if (onRail && ay < 0 && y <= 0) ay = 0; // sitting on the pad until thrust beats weight
    vx += ax * dt;
    vy += ay * dt;
    x += vx * dt;
    y += vy * dt;
    t += dt;
    if (y < 0 && t > 0.2) {
      y = 0;
      points.push({ t, x, y, v: Math.hypot(vx, vy) });
      break;
    }
    const sp = Math.hypot(vx, vy);
    maxV = Math.max(maxV, sp);
    if (t <= m.burn) burnoutIndex = points.length;
    if (y > apogee) {
      apogee = y;
      apogeeIndex = points.length;
    }
    if (Math.round(t / dt) % 3 === 0) points.push({ t, x, y, v: sp });
  }
  // Note: parachute recovery is ignored, so the descent is ballistic.
  const last = points[points.length - 1];
  return { points, burnoutIndex, apogeeIndex, apogee, range: last.x, maxV, time: last.t };
}

// ── Plot geometry (shared by server render and browser) ──────────────
export const PLOT = { left: 64, right: 456, top: 46, ground: 418 };

function niceStep(max: number) {
  const raw = max / 4;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const n = raw / pow;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * pow;
}

/** Equal-aspect plot so the trajectory shape is physically honest. */
export function layout(f: Flight) {
  const w = PLOT.right - PLOT.left;
  const h = PLOT.ground - PLOT.top;
  const scale = Math.min(w / Math.max(f.range, 1), h / Math.max(f.apogee, 1));
  const X = (x: number) => PLOT.left + x * scale;
  const Y = (y: number) => PLOT.ground - y * scale;
  const altStep = niceStep(f.apogee);
  const altTicks: number[] = [];
  for (let v = 0; v <= f.apogee * 1.05; v += altStep) altTicks.push(v);
  const rangeTicks: number[] = [];
  if (f.range > 5) {
    const rs = niceStep(f.range);
    for (let v = 0; v <= f.range * 1.02; v += rs) rangeTicks.push(v);
  }
  const path = (upTo = f.points.length) =>
    f.points
      .slice(0, upTo)
      .map((p, i) => `${i ? 'L' : 'M'}${X(p.x).toFixed(1)} ${Y(p.y).toFixed(1)}`)
      .join(' ');
  const at = (i: number) => ({ x: X(f.points[i].x), y: Y(f.points[i].y) });
  const markers = [
    { ...at(f.burnoutIndex), label: 'BURNOUT' },
    { ...at(f.apogeeIndex), label: 'APOGEE' },
    { ...at(f.points.length - 1), label: 'LANDING' },
  ];
  return { X, Y, scale, altTicks, rangeTicks, path, markers };
}

/** Axes, ticks, and event markers as an SVG string (used via set:html and innerHTML). */
export function layersSVG(f: Flight, showMarkers = true) {
  const L = layout(f);
  const T = (x: number, y: number, s: string, anchor = 'start', size = 9) =>
    `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" text-anchor="${anchor}" font-size="${size}" fill="currentColor" stroke="none">${s}</text>`;
  let out = '';
  // ground + axes
  out += `<path d="M20 ${PLOT.ground} H470" stroke-width="1.2" opacity="0.7"/>`;
  out += `<path d="M${PLOT.left} ${PLOT.ground} V${PLOT.top - 10}" stroke-width="1" opacity="0.45"/>`;
  for (const v of L.altTicks) {
    const y = L.Y(v);
    out += `<g opacity="0.65"><path d="M${PLOT.left - 4} ${y.toFixed(1)} h8" stroke-width="1"/>${T(PLOT.left - 8, y + 3, String(Math.round(v)), 'end')}</g>`;
  }
  for (const v of L.rangeTicks.slice(1)) {
    const x = L.X(v);
    if (x > 466) continue;
    out += `<g opacity="0.65"><path d="M${x.toFixed(1)} ${PLOT.ground - 4} v8" stroke-width="1"/>${T(x, PLOT.ground + 16, String(Math.round(v)), 'middle')}</g>`;
  }
  out += T(PLOT.left - 8, PLOT.top - 16, 'ALT m', 'end', 8.5);
  out += T(466, PLOT.ground + 30, 'RANGE m', 'end', 8.5);
  // launch rail
  out += `<path d="M${PLOT.left - 10} ${PLOT.ground} h20" stroke-width="2"/>`;
  if (showMarkers) {
    const ap = L.markers[1];
    out += `<path class="mk" style="--d:1" d="M${ap.x.toFixed(1)} ${(ap.y + 8).toFixed(1)} V${PLOT.ground}" stroke-dasharray="2 4" stroke-width="0.8" opacity="0.6"/>`;
    L.markers.forEach((m, i) => {
      if (i === 2 && Math.abs(m.x - L.markers[0].x) < 40) return; // landing too close to the pad to label
      const flip = m.x > 360;
      const dx = flip ? -1 : 1;
      out += `<g class="mk" style="--d:${i}">
        <path d="M${m.x} ${m.y - 6} l6 6 -6 6 -6 -6z" fill="var(--bp)" stroke="currentColor" stroke-width="1.2"/>
        <path d="M${m.x + 8 * dx} ${m.y - 4} l${12 * dx} -14 h${30 * dx}" stroke-width="0.8" opacity="0.75"/>
        ${T(m.x + 22 * dx, m.y - 22, m.label, flip ? 'end' : 'start', 9.5)}
      </g>`;
    });
  }
  return out;
}
