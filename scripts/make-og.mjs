// Generates public/og.png (the link-preview image) from your site config.
// Run: node scripts/make-og.mjs   (re-run after changing your name or title)
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const cfg = readFileSync(new URL('../src/config.ts', import.meta.url), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const get = (k) => esc(cfg.match(new RegExp(`${k}:\\s*'([^']*)'`))?.[1] ?? '');
const name = get('name');
const major = get('major');
const school = get('schoolShort');
const status = get('text');

const grid = Array.from({ length: 38 }, (_, i) => `<path d="M${i * 32} 0V630"/>`).join('') +
  Array.from({ length: 20 }, (_, i) => `<path d="M0 ${i * 32}H1200"/>`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#090d16"/>
  <g stroke="#7cc4ff" stroke-opacity="0.05">${grid}</g>
  <radialGradient id="g" cx="0.85" cy="0.1" r="0.7"><stop offset="0" stop-color="#ff6b1f" stop-opacity="0.18"/><stop offset="1" stop-color="#ff6b1f" stop-opacity="0"/></radialGradient>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="60" y="60" width="1080" height="510" rx="20" fill="none" stroke="#2a3650" stroke-width="2"/>
  <path d="M60 100V60h40M1140 530v40h-40" fill="none" stroke="#ff6b1f" stroke-width="3"/>
  <text x="110" y="150" font-family="Consolas, monospace" font-size="22" letter-spacing="4" fill="#7b879d">ENGINEERING PORTFOLIO · REV ${new Date().getFullYear()}</text>
  <text x="106" y="330" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="104" letter-spacing="-4" fill="#e9edf5">${name}<tspan fill="#ff6b1f">.</tspan></text>
  <text x="110" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="38" fill="#a3adbf">${major} @ ${school}</text>
  <circle cx="122" cy="489" r="8" fill="#34d399"/>
  <text x="144" y="497" font-family="Consolas, monospace" font-size="24" fill="#a3adbf">${status}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
console.log('wrote public/og.png');
