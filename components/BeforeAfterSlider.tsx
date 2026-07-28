"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectHeight?: string;
  title?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Raw Site / Site Preparation",
  afterLabel = "Completed Luxury Interior",
  aspectHeight = "h-[450px] md:h-[580px]",
  title = "Spatial Transformation Concept",
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX);
      }
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) {
        handleMove(e.clientX);
      }
    },
    [isDragging, handleMove]
  );

  return (
    <div className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-ember font-semibold">
            Interactive Concept Demo
          </span>
          <h3 className="display text-2xl md:text-3xl text-ink mt-1">{title}</h3>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs text-muted">
          <MoveLeft size={14} />
          <span>Drag slider to compare</span>
          <MoveRight size={14} />
        </div>
      </div>

      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden ${aspectHeight} cursor-ew-resize select-none border border-ink/10 rounded-sm`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Background - Full Width) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt={afterLabel}
            fill
            sizes="(max-width: 1200px) 100vw, 80vw"
            className="object-cover object-center"
          />
          <div className="absolute bottom-5 right-5 z-10 rounded bg-ink/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
            {afterLabel}
          </div>
        </div>

        {/* BEFORE IMAGE (Foreground - Clipped Width) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <div className="relative h-full w-full">
            {/* The image inside must be rendered at container width to avoid shrinking */}
            <div
              className="absolute inset-y-0 left-0"
              style={{
                width: containerRef.current
                  ? `${containerRef.current.clientWidth}px`
                  : "100vw",
              }}
            >
              <Image
                src={beforeImage}
                alt={beforeLabel}
                fill
                sizes="(max-width: 1200px) 100vw, 80vw"
                className="object-cover object-center grayscale contrast-125 brightness-90"
              />
            </div>
            <div className="absolute bottom-5 left-5 z-10 rounded bg-ember/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
              {beforeLabel}
            </div>
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & HANDLE */}
        <div
          className="absolute inset-y-0 z-20 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-lg border border-ink/20">
            <div className="flex items-center gap-0.5">
              <MoveLeft size={12} className="text-ink" />
              <MoveRight size={12} className="text-ink" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
