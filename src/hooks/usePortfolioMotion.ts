import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import type { RefObject } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, SplitText);

const HEADER_OFFSET = 64;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function waitForFonts() {
  if (!document.fonts) return Promise.resolve();
  return Promise.race([
    document.fonts.ready,
    new Promise<void>((resolve) => {
      window.setTimeout(resolve, 3000);
    }),
  ]);
}

function toChars(el: Element): Element[] {
  try {
    return SplitText.create(el, { type: "chars", charsClass: "ch" }).chars;
  } catch {
    const text = el.textContent ?? "";
    el.textContent = "";
    return [...text].map((char) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.whiteSpace = "pre";
      span.textContent = char;
      el.appendChild(span);
      return span;
    });
  }
}

function toLines(el: Element): Element[] {
  try {
    return SplitText.create(el, {
      type: "lines",
      linesClass: "ln",
      mask: "lines",
    }).lines;
  } catch {
    return [el];
  }
}

function playIntro(root: HTMLElement, reduce: boolean) {
  const d = (n: number) => (reduce ? 0 : n);
  const loader = root.querySelector<HTMLElement>("#loader");
  const loaderBar = root.querySelector<HTMLElement>("#loader-bar");
  const countEl = root.querySelector<HTMLElement>("#loader-count");
  if (!loader || !loaderBar || !countEl) return;

  // Reset in case Strict Mode remounted mid-animation.
  gsap.set(loader, { clearProps: "all", display: "flex", yPercent: 0 });
  gsap.set(loaderBar, { scaleX: 0 });
  countEl.textContent = "0";

  const counter = { v: 0 };
  const tl = gsap.timeline();

  tl.to(loaderBar, { scaleX: 1, duration: d(1.1), ease: "power2.inOut" }, 0)
    .to(
      counter,
      {
        v: 100,
        duration: d(1.1),
        ease: "power2.inOut",
        onUpdate: () => {
          countEl.textContent = String(Math.round(counter.v));
        },
      },
      0,
    )
    .to(
      loader,
      { yPercent: -100, duration: d(1), ease: "power4.inOut" },
      "+=0.15",
    )
    .set(loader, { display: "none" });

  const heroTl = gsap.timeline();
  root.querySelectorAll(".hero [data-split]").forEach((el, i) => {
    heroTl.from(
      toChars(el),
      {
        yPercent: 118,
        duration: d(1),
        stagger: 0.028,
        ease: "power4.out",
      },
      i * 0.09,
    );
  });

  heroTl
    .from(
      root.querySelectorAll(".hero-lead"),
      { y: 26, autoAlpha: 0, duration: d(0.9) },
      0.35,
    )
    .from(
      root.querySelectorAll(".hero-cta .btn"),
      { y: 20, autoAlpha: 0, duration: d(0.7), stagger: 0.08 },
      0.45,
    )
    .from(
      root.querySelectorAll(".hero-photo"),
      {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.12,
        duration: d(1.3),
        ease: "power4.out",
      },
      0.25,
    )
    .from(
      root.querySelectorAll(".hero [data-fade], .hero-foot .label"),
      {
        autoAlpha: 0,
        y: 14,
        duration: d(0.7),
        stagger: 0.08,
      },
      0.5,
    );

  tl.add(heroTl, ">-0.35");

  const cue = root.querySelector("#cue-arrow");
  if (cue && !reduce) {
    gsap.to(cue, {
      y: 6,
      repeat: -1,
      yoyo: true,
      duration: 0.7,
      ease: "sine.inOut",
    });
  }
}

function initScrollAnimations(root: HTMLElement) {
  const reduceGlobal = prefersReducedMotion();
  const localCleanups: Array<() => void> = [];

  const anchors = Array.from(
    root.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'),
  );
  const onAnchorClick = (event: Event) => {
    const anchor = event.currentTarget as HTMLAnchorElement;
    const hash = anchor.getAttribute("href");
    if (!hash || hash === "#") return;
    const target = root.querySelector(hash);
    if (!target) return;
    event.preventDefault();
    gsap.to(window, {
      duration: reduceGlobal ? 0 : 1.1,
      scrollTo: { y: target, offsetY: HEADER_OFFSET },
      ease: "power2.inOut",
    });
  };
  anchors.forEach((anchor) => anchor.addEventListener("click", onAnchorClick));
  localCleanups.push(() => {
    anchors.forEach((anchor) =>
      anchor.removeEventListener("click", onAnchorClick),
    );
  });

  const mm = gsap.matchMedia();
  mm.add(
    {
      isDesktop: "(min-width: 1025px)",
      isMobile: "(max-width: 1024px)",
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
    (ctx) => {
      const { isDesktop, reduceMotion } = ctx.conditions!;
      const d = (n: number) => (reduceMotion ? 0 : n);
      const mediaCleanups: Array<() => void> = [];

      const header = root.querySelector("#header");
      if (header) {
        ScrollTrigger.create({
          start: 80,
          end: "max",
          onUpdate: (self) => {
            gsap.to(header, {
              yPercent: self.direction === 1 ? -100 : 0,
              duration: d(0.45),
              overwrite: true,
            });
          },
          onLeaveBack: () =>
            gsap.to(header, { yPercent: 0, duration: d(0.45) }),
        });
      }

      const track = root.querySelector<HTMLElement>("#marquee");
      if (track) {
        const marqueeTl = gsap.to(track, {
          xPercent: -50,
          repeat: -1,
          duration: 22,
          ease: "none",
        });
        if (reduceMotion) marqueeTl.pause();

        ScrollTrigger.create({
          onUpdate: (self) => {
            marqueeTl.timeScale(self.direction === 1 ? 1 : -1);
          },
        });

        mediaCleanups.push(() => marqueeTl.kill());
      }

      root.querySelectorAll("[data-lines]").forEach((p) => {
        gsap.from(toLines(p), {
          yPercent: 105,
          autoAlpha: 0,
          duration: d(0.9),
          stagger: 0.07,
          scrollTrigger: { trigger: p, start: "top 88%" },
        });
      });

      root.querySelectorAll("[data-fade]").forEach((el) => {
        if (el.closest(".hero")) return;
        gsap.from(el, {
          y: 24,
          autoAlpha: 0,
          duration: d(0.8),
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      const rows = root.querySelectorAll("[data-row]");
      const workList = root.querySelector(".work-list");
      if (workList && rows.length) {
        gsap.from(rows, {
          y: 40,
          autoAlpha: 0,
          duration: d(0.85),
          stagger: 0.09,
          scrollTrigger: { trigger: workList, start: "top 82%" },
        });
      }

      const canHover = window.matchMedia("(hover: hover)").matches;
      if (isDesktop && !reduceMotion && canHover) {
        const preview = root.querySelector<HTMLElement>("#work-preview");
        const previewImg =
          root.querySelector<HTMLImageElement>("#work-preview-img");

        if (preview && previewImg) {
          preview.style.display = "block";
          const xTo = gsap.quickTo(preview, "x", {
            duration: 0.5,
            ease: "power3",
          });
          const yTo = gsap.quickTo(preview, "y", {
            duration: 0.5,
            ease: "power3",
          });

          let hoveredRow: HTMLElement | null = null;
          let visible = false;
          let pointer: { x: number; y: number } | null = null;
          // Scrolling drags rows under a stationary cursor, which fires
          // pointerenter without any real hover. Ignore those.
          let scrollingUntil = 0;

          const showPreview = () => {
            if (!hoveredRow || visible) return;
            const img = hoveredRow.dataset.img;
            if (img) previewImg.src = img;
            if (pointer) {
              gsap.set(preview, { x: pointer.x + 28, y: pointer.y - 100 });
            }
            visible = true;
            gsap.to(preview, {
              autoAlpha: 1,
              scale: 1,
              rotate: gsap.utils.random(-4, 4),
              duration: 0.45,
              ease: "power3.out",
            });
          };

          const hidePreview = () => {
            if (!visible) return;
            visible = false;
            gsap.to(preview, {
              autoAlpha: 0,
              scale: 0.9,
              duration: 0.35,
            });
          };

          const onMove = (event: PointerEvent) => {
            pointer = { x: event.clientX, y: event.clientY };
            xTo(event.clientX + 28);
            yTo(event.clientY - 100);
            if (performance.now() >= scrollingUntil) showPreview();
          };
          window.addEventListener("pointermove", onMove);

          const onScroll = () => {
            scrollingUntil = performance.now() + 150;
            hidePreview();
          };
          window.addEventListener("scroll", onScroll, { passive: true });

          mediaCleanups.push(() => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("scroll", onScroll);
          });

          rows.forEach((row) => {
            const enter = () => {
              hoveredRow = row as HTMLElement;
            };
            const leave = () => {
              hoveredRow = null;
              hidePreview();
            };
            row.addEventListener("pointerenter", enter);
            row.addEventListener("pointerleave", leave);
            mediaCleanups.push(() => {
              row.removeEventListener("pointerenter", enter);
              row.removeEventListener("pointerleave", leave);
            });
          });
        }
      }

      const tlFill = root.querySelector("#tl-fill");
      const timeline = root.querySelector(".timeline");
      if (tlFill && timeline) {
        gsap.to(tlFill, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 72%",
            end: "bottom 78%",
            scrub: reduceMotion ? false : 0.6,
          },
        });
      }

      root.querySelectorAll("[data-job]").forEach((job) => {
        gsap.from(job, {
          x: isDesktop ? 34 : 16,
          autoAlpha: 0,
          duration: d(0.85),
          scrollTrigger: { trigger: job, start: "top 86%" },
        });
      });

      root.querySelectorAll(".skill-group").forEach((group) => {
        const chips = group.querySelectorAll(".chip-sk");
        if (!chips.length) return;
        gsap.from(chips, {
          y: 18,
          autoAlpha: 0,
          duration: d(0.6),
          stagger: 0.04,
          scrollTrigger: { trigger: group, start: "top 90%" },
        });
      });

      const contact = root.querySelector("#contact");
      if (contact) {
        const contactTl = gsap.timeline({
          scrollTrigger: { trigger: contact, start: "top 72%" },
        });
        contact.querySelectorAll("[data-split]").forEach((el, i) => {
          contactTl.from(
            toChars(el),
            {
              yPercent: 118,
              duration: d(1),
              stagger: 0.022,
              ease: "power4.out",
            },
            i * 0.08,
          );
        });
        contactTl.from(
          contact.querySelectorAll(".mailto, .socials .btn"),
          {
            y: 22,
            autoAlpha: 0,
            duration: d(0.7),
            stagger: 0.07,
          },
          0.3,
        );
      }

      root.querySelectorAll<HTMLAnchorElement>(".nav a").forEach((link) => {
        const id = link.getAttribute("href");
        if (!id) return;
        const section = root.querySelector(id);
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: "top 45%",
          end: "bottom 45%",
          onToggle: (self) => {
            link.setAttribute(
              "aria-current",
              self.isActive ? "true" : "false",
            );
          },
        });
      });

      return () => {
        mediaCleanups.forEach((fn) => fn());
      };
    },
  );

  localCleanups.push(() => mm.revert());

  return () => {
    localCleanups.forEach((fn) => fn());
  };
}

export function usePortfolioMotion(scopeRef: RefObject<HTMLElement | null>) {
  useGSAP(
    (_context, contextSafe) => {
      let disposed = false;
      let teardownScroll: (() => void) | undefined;

      const boot = async () => {
        await waitForFonts();
        if (disposed || !scopeRef.current) return;

        const root = scopeRef.current;
        gsap.defaults({ ease: "power3.out", duration: 0.9 });

        playIntro(root, prefersReducedMotion());
        teardownScroll = initScrollAnimations(root);

        // Safety net: never leave visitors stuck behind the preloader.
        window.setTimeout(() => {
          const loader = root.querySelector<HTMLElement>("#loader");
          if (loader && loader.style.display !== "none") {
            gsap.set(loader, { display: "none", yPercent: -100 });
          }
        }, 5000);

        const images = Array.from(root.querySelectorAll("img"));
        await Promise.all(
          images.map(
            (img) =>
              new Promise<void>((resolve) => {
                if (img.complete) {
                  resolve();
                  return;
                }
                img.addEventListener("load", () => resolve(), { once: true });
                img.addEventListener("error", () => resolve(), { once: true });
              }),
          ),
        );
        if (!disposed) ScrollTrigger.refresh();
      };

      if (contextSafe) {
        void contextSafe(boot)();
      } else {
        void boot();
      }

      return () => {
        disposed = true;
        teardownScroll?.();
      };
    },
    { scope: scopeRef },
  );
}
