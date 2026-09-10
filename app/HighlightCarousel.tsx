'use client';

import { useEffect, useRef, useState } from 'react';

const AUTO_ADVANCE_MS = 5000;

export function HighlightCarousel({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (images.length < 2 || paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length, paused]);

  if (images.length < 2) {
    const [image] = images;
    return (
      <div className="highlight-images">
        <div className="highlight-image">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} width={1000} height={660} />
        </div>
      </div>
    );
  }

  return (
    <div
      className="highlight-images highlight-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="highlight-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((image) => (
          <div className="highlight-image" key={image.src}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} width={1000} height={660} />
          </div>
        ))}
      </div>
      <div className="highlight-dots" role="group" aria-label="Highlight images">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className="highlight-dot"
            aria-current={i === index}
            aria-label={`Show image ${i + 1} of ${images.length}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
