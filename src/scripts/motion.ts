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
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  revealables.forEach((el) => io.observe(el));
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
