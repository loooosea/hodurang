"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { TWO_TRACK } from "@/lib/constants";

export default function TwoTrackSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tab = TWO_TRACK.tabs[activeTab];

  return (
    <SectionWrapper background="cream">
      <ScrollReveal>
        <div className="text-center mb-10">
          <PixelBadge variant="orange">{TWO_TRACK.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            {TWO_TRACK.headline}
          </h2>
        </div>
      </ScrollReveal>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {TWO_TRACK.tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(i)}
            className={`
              px-6 py-3 font-bold text-sm border-3 border-dark pixel-transition
              ${
                activeTab === i
                  ? "bg-orange-400 text-white shadow-[4px_4px_0_#2D2D2D]"
                  : "bg-white text-dark shadow-[4px_4px_0_#D4A574] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#D4A574]"
              }
            `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto"
        >
          {/* Text */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-dark">{tab.title}</h3>
            <ul className="flex flex-col gap-3">
              {tab.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-dark-light"
                >
                  <span className="w-6 h-6 shrink-0 flex items-center justify-center bg-orange-400 text-white text-xs font-bold border-2 border-dark">
                    ✓
                  </span>
                  <span className="text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mockup */}
          <div className="flex justify-center">
            <div className="pixel-border bg-white p-3">
              <Image
                src={tab.mockup}
                alt={tab.title}
                width={300}
                height={600}
                className="w-56 sm:w-64 h-auto"
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
