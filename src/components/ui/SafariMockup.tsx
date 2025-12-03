"use client";

import React from "react";
import Image from "next/image";

interface SafariMockupProps {
  src?: string;
  alt?: string;
  url?: string;
  className?: string;
}

export function SafariMockup({ src, alt = "Website Screenshot", url = "pocketgiving.co.uk", className = "" }: SafariMockupProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Safari Window Frame */}
      <div className="bg-[#f5f5f5] rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Title Bar */}
        <div className="h-10 bg-gradient-to-b from-[#e8e8e8] to-[#d8d8d8] border-b border-gray-300 flex items-center px-4 gap-2">
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#dea123]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 mx-4">
            <div className="bg-white rounded-md h-6 flex items-center justify-center px-3 border border-gray-200 shadow-inner">
              <svg className="w-3 h-3 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-xs text-gray-500 truncate">{url}</span>
            </div>
          </div>

          {/* Right side buttons placeholder */}
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded bg-gray-300" />
            <div className="w-4 h-4 rounded bg-gray-300" />
          </div>
        </div>

        {/* Content Area */}
        <div className="relative aspect-[16/10] bg-white">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Website Preview</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SafariMockup;
