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

const canHover = window.matchMedia("(hover: hover)").matches;

if (prefersReducedMotion) {
  settleCountUp();
} else {
  initHeroMotion();
  initRevealMotion();
  initStaggerMotion();
  initPricingPulse();
  initHeroParallax();
  initMagneticButtons();
  initCountUp();
}

function initHeroMotion() {
  const items = document.querySelectorAll<HTMLElement>("[data-motion-hero]");
  const title = document.querySelector<HTMLElement>("[data-motion-hero-title]");

  if (title) {
    title.style.opacity = "0";
    animateDom(
      title,
      {
        opacity: [0, 1],
        clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
        y: [26, 0],
      },
      { duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] },
    );
  }

  if (!items.length) return;

  items.forEach((item) => {
    item.style.opacity = "0";
  });

  animateDom(
    items,
    { opacity: [0, 1], y: [18, 0] },
    {
      duration: 0.75,
      delay: stagger(0.09, { startDelay: 0.05 }),
      ease: [0.22, 1, 0.36, 1],
    },
  );
}

// Subtle pointer-driven depth on the hero scene. Each [data-parallax] layer
// shifts by its own depth value (negative = opposite direction).
function initHeroParallax() {
  if (!canHover) return;

  const scene = document.querySelector<HTMLElement>("[data-hero-scene]");
  if (!scene) return;

  const layers = scene.querySelectorAll<HTMLElement>("[data-parallax]");
  if (!layers.length) return;

  let frame = 0;

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.parallax || "10");
        layer.style.transform = `translate(${relX * depth}px, ${relY * depth}px)`;
      });
    });
  });

  scene.addEventListener("pointerleave", () => {
    if (frame) cancelAnimationFrame(frame);
    layers.forEach((layer) => {
      layer.style.transform = "";
    });
  });
}

// Buttons gently follow the cursor while hovered, then spring back.
function initMagneticButtons() {
  if (!canHover) return;

  document
    .querySelectorAll<HTMLElement>("[data-magnetic]")
    .forEach((button) => {
      const strength = Number(button.dataset.magnetic || "0.35");

      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const offsetX = event.clientX - rect.left - rect.width / 2;
        const offsetY = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${offsetX * strength}px, ${offsetY * strength}px)`;
      });

      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
}

// Count [data-count-to] elements up from zero when scrolled into view.
function initCountUp() {
  document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
    const target = Number(el.dataset.countTo || "0");
    const suffix = el.dataset.countSuffix ?? "";
    const decimals = Number(el.dataset.countDecimals || "0");
    let started = false;

    el.textContent = `0${suffix}`;

    inView(
      el,
      () => {
        if (started) return;
        started = true;

        animate(0, target, {
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value: number) => {
            el.textContent = `${value.toFixed(decimals)}${suffix}`;
          },
        });
      },
      { amount: 0.6 },
    );
  });
}

// Reduced-motion fallback: show final values without animating.
function settleCountUp() {
  document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
    const suffix = el.dataset.countSuffix ?? "";
    el.textContent = `${el.dataset.countTo ?? ""}${suffix}`;
  });
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
