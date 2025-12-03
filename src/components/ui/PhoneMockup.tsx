"use client";

import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  scale?: number;
}

export function PhoneMockup({ src, alt, className = "", scale = 1 }: PhoneMockupProps) {
  const width = 570 * scale;
  const height = 1198 * scale;

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height }}
    >
      {/* Screen content - positioned inside the frame */}
      <div
        className="absolute overflow-hidden"
        style={{
          left: 21 * scale,
          top: 23 * scale,
          width: 528 * scale,
          height: 1152 * scale,
          borderRadius: 59 * scale,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>

      {/* iPhone frame overlay */}
      <Image
        src="/projects/pocket-giving/Group.svg"
        alt="iPhone frame"
        width={width}
        height={height}
        className="relative z-10 pointer-events-none"
      />
    </div>
  );
}
