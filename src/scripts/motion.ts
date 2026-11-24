// Site-wide motion. Everything here is progressive: without JS (or with
// "reduce motion" turned on) content simply appears in its final state.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── Reveal on scroll (.reveal) ───────────────────────────
   Anything already on screen at load stays visible. Content further down is hidden
   with .pending and fades in once when it scrolls into view. */
const revealables = [...document.querySelectorAll<HTMLElement>('.reveal')];
if (!reduce && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.remove('pending');
        io.unobserve(e.target);
      }
    },
    // The huge top margin counts anything already scrolled past as seen, so sections you
    // jump over (jump bar, fast flicks) are never left invisible.
    { rootMargin: '100000px 0px -5% 0px', threshold: 0 },
  );
  for (const el of revealables) {
    if (el.getBoundingClientRect().top > innerHeight) {
      el.classList.add('pending');
      io.observe(el);
    }
  }
}

/* Swap text in place (used by copy buttons and the contact page). Kept as `scramble`
   for existing imports; it no longer animates random characters. */
export function scramble(el: HTMLElement, text: string, _duration = 0) {
  el.textContent = text;
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
