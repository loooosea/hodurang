"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { O4O_EXPERIENCE } from "@/lib/constants";
import { staggerContainer, pixelFadeIn } from "@/lib/animations";

export default function O4OExperienceSection() {
  return (
    <SectionWrapper background="dark">
      <ScrollReveal>
        <div className="text-center mb-12">
          <PixelBadge variant="dark">{O4O_EXPERIENCE.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white whitespace-pre-line">
            {O4O_EXPERIENCE.headline}
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto whitespace-pre-line">
            {O4O_EXPERIENCE.subheadline}
          </p>
        </div>
      </ScrollReveal>

      {/* Flow diagram */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0"
      >
        {O4O_EXPERIENCE.flow.map((item, i) => (
          <motion.div
            key={item.step}
            variants={pixelFadeIn}
            className="flex items-center"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 flex items-center justify-center bg-dark-light border-3 border-gray-600 text-4xl shadow-[4px_4px_0_#D4A574]">
                {item.icon}
              </div>
              <span className="text-sm font-bold text-gray-300">
                {item.step}
              </span>
            </div>

            {/* Arrow */}
            {i < O4O_EXPERIENCE.flow.length - 1 && (
              <div className="hidden sm:block mx-4 text-2xl text-warm-400 font-bold">
                →
              </div>
            )}
            {i < O4O_EXPERIENCE.flow.length - 1 && (
              <div className="sm:hidden text-2xl text-warm-400 font-bold my-1">
                ↓
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
