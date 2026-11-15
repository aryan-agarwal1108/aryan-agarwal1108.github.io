// Generates public/og.png (the link-preview image) from your site config.
// Run: node scripts/make-og.mjs   (re-run after changing your name or title)
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const cfg = readFileSync(new URL('../src/config.ts', import.meta.url), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const get = (k) => cfg.match(new RegExp(`${k}:\\s*'([^']*)'`))?.[1] ?? '';
const [first, ...rest] = esc(get('name').toUpperCase()).split(' ');
const last = rest.join(' ');
const major = esc(get('major').toUpperCase());
const school = esc(get('schoolShort'));
const status = esc(get('text').toUpperCase());

const BG = '#0b0c0f';
const INK = '#ede8dc';
const ORANGE = '#ff5a1f';
const BP = '#163a61';

const grid = [];
for (let x = 700; x <= 1140; x += 40) grid.push(`<path d="M${x} 90V540"/>`);
for (let y = 90; y <= 540; y += 40) grid.push(`<path d="M700 ${y}H1140"/>`);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}"/>
  <!-- blueprint panel with trajectory -->
  <rect x="700" y="90" width="440" height="450" fill="${BP}"/>
  <g stroke="#e3edf9" stroke-opacity="0.1">${grid.join('')}</g>
  <path d="M700 520 Q920 488 1140 520" stroke="#e3edf9" stroke-opacity="0.5" fill="none" stroke-width="2"/>
  <path d="M760 510 C 800 330, 880 200, 960 195 S 1080 290, 1100 420" stroke="${ORANGE}" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M770 510 C 812 340, 892 214, 972 210 S 1090 300, 1112 420" stroke="#e3edf9" stroke-opacity="0.5" stroke-dasharray="4 9" fill="none" stroke-width="2"/>
  <path d="M960 185 l10 10 -10 10 -10 -10z" fill="${BP}" stroke="#e3edf9" stroke-width="2"/>
  <text x="978" y="168" font-family="Consolas, monospace" font-size="18" fill="#e3edf9" letter-spacing="2">APOGEE</text>
  <path d="M700 90 h28 M700 90 v28 M1140 540 h-28 M1140 540 v-28" stroke="${ORANGE}" stroke-width="4" fill="none"/>
  <!-- logo -->
  <g transform="translate(70 70) scale(1.6)">
    <path d="M3 22.5 A17 6.2 -14 0 1 37 14.5" fill="none" stroke="${INK}" stroke-width="1.6" opacity="0.45"/>
    <path d="M6 33 L20 5 L34 33 L27.5 33 L20 17.5 L12.5 33 Z" fill="${INK}"/>
    <path d="M16.2 33 L20 25 L23.8 33 Z" fill="${ORANGE}"/>
    <path d="M37 14.5 A17 6.2 -14 0 1 3 22.5" fill="none" stroke="${ORANGE}" stroke-width="1.9"/>
    <circle cx="35.4" cy="18.6" r="2.1" fill="${ORANGE}"/>
  </g>
  <!-- name -->
  <text x="66" y="300" font-family="Arial Black, Segoe UI Black, Arial, sans-serif" font-weight="900" font-size="92" letter-spacing="2" fill="${INK}">${first}</text>
  <text x="66" y="394" font-family="Arial Black, Segoe UI Black, Arial, sans-serif" font-weight="900" font-size="92" letter-spacing="2" fill="${INK}">${last}<tspan fill="${ORANGE}">.</tspan></text>
  <text x="70" y="450" font-family="Consolas, monospace" font-size="24" letter-spacing="3" fill="${INK}" opacity="0.8">${major} @ ${school}</text>
  <!-- status chip -->
  <rect x="70" y="500" width="118" height="40" fill="${ORANGE}"/>
  <text x="129" y="527" text-anchor="middle" font-family="Consolas, monospace" font-size="18" font-weight="700" letter-spacing="2" fill="#fff">STATUS</text>
  <rect x="188" y="500" width="${status.length * 12.6 + 36}" height="40" fill="#14161b" stroke="#2a2d34"/>
  <text x="206" y="527" font-family="Consolas, monospace" font-size="18" letter-spacing="2" fill="#ffb547">${status}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
console.log('wrote public/og.png');
