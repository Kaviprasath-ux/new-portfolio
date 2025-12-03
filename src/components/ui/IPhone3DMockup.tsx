"use client";

import Image from "next/image";

interface IPhone3DMockupProps {
  src: string;
  alt: string;
  className?: string;
  rotate?: "left" | "right" | "none";
  scale?: number;
}

export function IPhone3DMockup({
  src,
  alt,
  className = "",
  rotate = "none",
  scale = 1
}: IPhone3DMockupProps) {
  const rotateStyles = {
    left: "rotateY(15deg) rotateX(5deg) rotateZ(-2deg)",
    right: "rotateY(-15deg) rotateX(5deg) rotateZ(2deg)",
    none: "rotateY(0deg) rotateX(0deg)",
  };

  const width = 285 * scale;
  const height = 580 * scale;

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        perspective: "1000px",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transform: rotateStyles[rotate],
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shadow */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/20 blur-2xl rounded-full"
          style={{
            transform: "rotateX(90deg) translateZ(-20px)",
          }}
        />

        {/* Phone Frame */}
        <div
          className="relative w-full h-full rounded-[48px] bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-[3px] shadow-2xl"
          style={{
            boxShadow: `
              0 50px 100px -20px rgba(0, 0, 0, 0.5),
              0 30px 60px -30px rgba(0, 0, 0, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          {/* Inner bezel */}
          <div className="relative w-full h-full rounded-[45px] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] p-[2px]">
            {/* Screen container */}
            <div className="relative w-full h-full rounded-[43px] overflow-hidden bg-black">
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20" />

              {/* Screen content */}
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover"
              />

              {/* Screen glare */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.1) 0%,
                    transparent 50%,
                    transparent 100%
                  )`,
                }}
              />
            </div>
          </div>

          {/* Side buttons - Volume */}
          <div className="absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute left-[-2px] top-[200px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />

          {/* Side button - Power */}
          <div className="absolute right-[-2px] top-[150px] w-[3px] h-[70px] bg-[#2a2a2a] rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}
