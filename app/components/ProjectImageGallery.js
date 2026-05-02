"use client";

import { useState } from "react";

export default function ProjectImageGallery({ images, title }) {
  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const canNext = index < images.length - 1;

  return (
    <div className="relative px-8 md:px-10">
      <div className="flex items-center justify-center overflow-hidden rounded-lg bg-[#0d1214]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title} image ${index + 1}`}
          className="gallery-image h-auto w-full object-contain"
          style={{ maxHeight: "440px" }}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setIndex((v) => Math.max(v - 1, 0))}
            disabled={!canPrev}
            aria-label="Previous images"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#7FFFD4]/25 bg-[#0B0F10]/90 text-[#7FFFD4] shadow-[0_0_0_1px_rgba(127,255,212,0.05)] transition hover:border-[#7FFFD4]/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
              <path d="M10 3L6 8l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => setIndex((v) => Math.min(v + 1, images.length - 1))}
            disabled={!canNext}
            aria-label="Next images"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-[#7FFFD4]/25 bg-[#0B0F10]/90 text-[#7FFFD4] shadow-[0_0_0_1px_rgba(127,255,212,0.05)] transition hover:border-[#7FFFD4]/60 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <svg viewBox="0 0 16 16" className="h-5 w-5" fill="none">
              <path d="M6 3l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="mt-4 flex items-center justify-center">
          <span className="text-xs tracking-widest text-slate-400">
            {index + 1}{" "}
            <span className="text-slate-600">/ {images.length}</span>
          </span>
        </div>
      )}
    </div>
  );
}
