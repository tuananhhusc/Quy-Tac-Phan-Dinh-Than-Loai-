"use client";

import React, { useState } from "react";
import { references } from "../data/references";

export function Ref({ ids }: { ids: number[] }) {
  const [activeRef, setActiveRef] = useState<number | null>(null);

  return (
    <>
      {ids.map((id) => {
        const refData = references.find((r) => r.id === id);
        const isOpen = activeRef === id;
        return (
          <span
            key={id}
            className="relative inline-block group"
            onMouseEnter={() => setActiveRef(id)}
            onMouseLeave={() => setActiveRef(null)}
          >
            <a
              href={`#ref-${id}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveRef(isOpen ? null : id);
              }}
              className="footnote-ref select-none"
              title={`Xem nguồn ${id}`}
            >
              [{id}]
            </a>
            {refData && (
              <span className={`fixed sm:absolute bottom-6 sm:bottom-full sm:mb-2 left-4 right-4 sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-64 p-4 sm:p-3 bg-parchment-dark border border-gold/40 shadow-2xl sm:shadow-xl rounded-xl sm:rounded-md text-xs text-text-secondary transition-all duration-300 sm:duration-200 z-[100] pointer-events-auto block ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-8 sm:translate-y-0 group-hover:opacity-100 group-hover:visible"}`}>
                <span className="font-semibold text-burgundy block mb-1">Nguồn [{id}]</span>
                <span className="font-sans block mb-1">{refData.text}</span>
                <span className="text-[10px] text-text-muted break-all block">{refData.url}</span>
                {/* Arrow */}
                <span className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gold/40"></span>
                <span className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-parchment-dark mt-[-1px]"></span>
              </span>
            )}
          </span>
        );
      })}
    </>
  );
}

export function Divider() {
  return (
    <div className="ornamental-divider">
      <span className="text-sm tracking-[0.5em]">✦ ✝ ✦</span>
    </div>
  );
}

