import { animate, inView, stagger } from "motion";

type MotionTarget = Element | Element[] | NodeListOf<Element> | string;
type MotionKeyframes = Record<string, unknown>;
type MotionOptions = Record<string, unknown>;

const animateDom = animate as unknown as (
  target: MotionTarget,
  keyframes: MotionKeyframes,
  options?: MotionOptions,
) => unknown;

const animatedElements = new WeakSet<Element>();

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  initHeroMotion();
  initRevealMotion();
  initStaggerMotion();
  initPricingPulse();
}

function initHeroMotion() {
  const items = document.querySelectorAll<HTMLElement>("[data-motion-hero]");

  if (!items.length) return;

  items.forEach((item) => {
    item.style.opacity = "0";
  });

  animateDom(
    items,
    { opacity: [0, 1], y: [18, 0] },
    {
      duration: 0.75,
      delay: stagger(0.08),
      ease: [0.22, 1, 0.36, 1],
    },
  );
}

function initRevealMotion() {
  document
    .querySelectorAll<HTMLElement>("[data-motion-reveal]")
    .forEach((element) => {
      element.style.opacity = "0";

      inView(
        element,
        () => {
          if (animatedElements.has(element)) return;

          animatedElements.add(element);
          animateDom(
            element,
            { opacity: [0, 1], y: [22, 0] },
            { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          );
        },
        { margin: "0px 0px -12% 0px", amount: 0.25 },
      );
    });
}

function initStaggerMotion() {
  document
    .querySelectorAll<HTMLElement>("[data-motion-stagger]")
    .forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>("[data-motion-item]");

      if (!items.length) return;

      items.forEach((item) => {
        item.style.opacity = "0";
      });

      inView(
        group,
        () => {
          if (animatedElements.has(group)) return;

          animatedElements.add(group);
          animateDom(
            items,
            { opacity: [0, 1], y: [24, 0] },
            {
              duration: 0.65,
              delay: stagger(0.08),
              ease: [0.22, 1, 0.36, 1],
            },
          );
        },
        { margin: "0px 0px -10% 0px", amount: 0.2 },
      );
    });
}

function initPricingPulse() {
  const total = document.querySelector<HTMLElement>(
    "[data-motion-pricing-total]",
  );

  if (!total) return;

  document.addEventListener("vicino:pricing-change", () => {
    animateDom(
      total,
      { scale: [1, 1.045, 1], color: ["#f4e8d0", "#ffffff", "#f4e8d0"] },
      { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
    );
  });
}
