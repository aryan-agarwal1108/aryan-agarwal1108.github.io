// Site-wide motion. Everything here is progressive: without JS (or with
// "reduce motion" turned on) content simply appears in its final state.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Reveal on scroll (.reveal, .plot) ─────────────────────── */
const revealables = document.querySelectorAll<HTMLElement>('.reveal, .plot');
if (reduce || !('IntersectionObserver' in window)) {
  revealables.forEach((el) => el.classList.add('in'));
} else {
  // Stagger siblings that enter together
  const io = new IntersectionObserver(
    (entries) => {
      const entering = entries.filter((e) => e.isIntersecting);
      entering.forEach((entry, i) => {
        const el = entry.target as HTMLElement;
        if (!el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${Math.min(i, 6) * 70}ms`);
        el.classList.add('in');
        io.unobserve(el);
        if (el.dataset.count !== undefined) countUp(el);
        el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
}

/* ── Count-up numbers: <span data-count="1000" data-suffix="+">1,000+</span> ── */
function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  if (!Number.isFinite(target) || el.dataset.done) return;
  el.dataset.done = '1';
  const prefix = el.dataset.prefix ?? '';
  const suffix = el.dataset.suffix ?? '';
  const start = performance.now();
  const dur = 1400;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${prefix}${Math.round(target * eased).toLocaleString('en-US')}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
if (reduce) document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => (el.dataset.done = '1'));

/* ── Departure-board scramble: <span data-scramble="TEXT"> ─── */
const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
export function scramble(el: HTMLElement, text: string, duration = 900) {
  if (reduce) {
    el.textContent = text;
    return;
  }
  const start = performance.now();
  const from = el.textContent ?? '';
  const len = Math.max(from.length, text.length);
  const frame = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    let out = '';
    for (let i = 0; i < len; i++) {
      const settleAt = (i / len) * 0.7 + 0.3;
      if (t >= settleAt) out += text[i] ?? '';
      else if (text[i] === ' ') out += ' ';
      else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
    }
    el.textContent = out;
    if (t < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}
document.querySelectorAll<HTMLElement>('[data-scramble]').forEach((el, i) => {
  setTimeout(() => scramble(el, el.dataset.scramble!), 250 + i * 150);
});

/* Rotating word: <span data-rotate="A|B|C"> cycles with the scramble effect */
document.querySelectorAll<HTMLElement>('[data-rotate]').forEach((el) => {
  const words = el.dataset.rotate!.split('|');
  let i = 0;
  if (reduce) return;
  setInterval(() => {
    i = (i + 1) % words.length;
    scramble(el, words[i], 700);
  }, 2600);
});

/* ── Scroll progress bar ───────────────────────────────────── */
const bar = document.getElementById('progress');
if (bar) {
  const update = () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty('--p', String(h > 0 ? scrollY / h : 0));
  };
  addEventListener('scroll', update, { passive: true });
  update();
}

/* ── Copy-email buttons ────────────────────────────────────── */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const text = btn.dataset.copy!;
    const label = btn.querySelector<HTMLElement>('[data-copy-label]');
    try {
      await navigator.clipboard.writeText(text);
      if (label) {
        const prev = label.textContent ?? '';
        scramble(label, 'COPIED', 400);
        setTimeout(() => scramble(label, prev, 400), 1600);
      }
    } catch {
      location.href = `mailto:${text}`;
    }
  });
});

/* Pause SVG (SMIL) animations, e.g. the orbiting logo satellite, for reduced motion */
if (reduce) document.querySelectorAll<SVGSVGElement>('svg').forEach((s) => s.pauseAnimations?.());
