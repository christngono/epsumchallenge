"use client";

import { Children, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const COPIES = 3;

interface DraggableMarqueeProps {
  children: React.ReactNode;
  /** Vitesse de défilement automatique en px/frame. */
  speed?: number;
  className?: string;
}

/**
 * Défilement horizontal infini :
 * - automatique (droite → gauche), en boucle sans couture ;
 * - manuel : glisser-déposer (souris), swipe tactile, trackpad horizontal.
 * L'auto se met en pause pendant l'interaction puis reprend.
 */
export default function DraggableMarquee({
  children,
  speed = 0.6,
  className,
}: DraggableMarqueeProps) {
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const copyWidth = useRef(0);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: 0 });

  const items = Children.toArray(children);

  // Mesure de la largeur d'une copie + recentrage initial.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const measure = () => {
      copyWidth.current = el.scrollWidth / COPIES;
      if (el.scrollLeft < copyWidth.current) el.scrollLeft = copyWidth.current;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const t = setTimeout(measure, 400); // re-mesure après chargement des images
    return () => {
      ro.disconnect();
      clearTimeout(t);
    };
  }, [items.length]);

  // Boucle d'animation : auto-scroll + wrap infini dans les deux sens.
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const el = scrollRef.current;
      const cw = copyWidth.current;
      if (el && cw) {
        if (!reduce && !paused.current && !drag.current.active) {
          el.scrollLeft += speed;
        }
        if (el.scrollLeft >= cw * 2) el.scrollLeft -= cw;
        else if (el.scrollLeft < cw) el.scrollLeft += cw;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce, speed]);

  const pauseAuto = () => {
    paused.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };
  const scheduleResume = (delay = 1800) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      paused.current = false;
    }, delay);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
    pauseAuto();
    el.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const el = scrollRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    drag.current.active = false;
    scrollRef.current?.releasePointerCapture?.(e.pointerId);
    scheduleResume();
  };

  // Empêche la navigation du lien si l'utilisateur a glissé.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved > 6) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Trackpad horizontal : on met l'auto en pause (le scroll natif gère le déplacement).
  const onWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      pauseAuto();
      scheduleResume();
    }
  };

  return (
    <div
      ref={scrollRef}
      className={`no-scrollbar overflow-x-auto overscroll-x-contain cursor-grab active:cursor-grabbing select-none [&_img]:pointer-events-none [&_a]:[-webkit-user-drag:none] ${className ?? ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onClickCapture={onClickCapture}
      onWheel={onWheel}
      onMouseEnter={pauseAuto}
      onMouseLeave={() => !drag.current.active && scheduleResume(300)}
      onDragStart={(e) => e.preventDefault()}
    >
      <div className="flex w-max">
        {Array.from({ length: COPIES }).map((_, copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy !== 0}>
            {items.map((item, i) => (
              <div key={i} className="shrink-0 px-2">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
