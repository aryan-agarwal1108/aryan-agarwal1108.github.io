// Generates public/og.png (the link-preview image) from your site config.
// Run: node scripts/make-og.mjs   (re-run after changing your name or title)
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const cfg = readFileSync(new URL('../src/config.ts', import.meta.url), 'utf8');
const get = (k) => cfg.match(new RegExp(`${k}:\\s*'([^']*)'`))?.[1] ?? '';
const name = get('name');
const major = get('major');
const school = get('schoolShort');
const status = get('text');

const grid = Array.from({ length: 38 }, (_, i) => `<path d="M${i * 32} 0V630"/>`).join('') +
  Array.from({ length: 20 }, (_, i) => `<path d="M0 ${i * 32}H1200"/>`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a0b"/>
  <g stroke="#ffffff" stroke-opacity="0.04">${grid}</g>
  <radialGradient id="g" cx="0.85" cy="0.1" r="0.7"><stop offset="0" stop-color="#ff6b2c" stop-opacity="0.18"/><stop offset="1" stop-color="#ff6b2c" stop-opacity="0"/></radialGradient>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="60" y="60" width="1080" height="510" rx="20" fill="none" stroke="#2e2e34" stroke-width="2"/>
  <path d="M60 100V60h40M1140 530v40h-40" fill="none" stroke="#ff6b2c" stroke-width="3"/>
  <text x="110" y="150" font-family="Consolas, monospace" font-size="22" letter-spacing="4" fill="#6e6e78">ENGINEERING PORTFOLIO · REV ${new Date().getFullYear()}</text>
  <text x="106" y="330" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="104" letter-spacing="-4" fill="#ededed">${name}<tspan fill="#ff6b2c">.</tspan></text>
  <text x="110" y="400" font-family="Segoe UI, Arial, sans-serif" font-size="38" fill="#a0a0a8">${major} @ ${school}</text>
  <circle cx="122" cy="489" r="8" fill="#22c55e"/>
  <text x="144" y="497" font-family="Consolas, monospace" font-size="24" fill="#a0a0a8">${status}</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(new URL('../public/og.png', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
console.log('wrote public/og.png');
