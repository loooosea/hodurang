"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelCard from "@/components/ui/PixelCard";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { WHY_HODURANG } from "@/lib/constants";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function WhyHodurangSection() {
  return (
    <SectionWrapper background="white">
      <ScrollReveal>
        <div className="text-center mb-12">
          <PixelBadge>{WHY_HODURANG.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            {WHY_HODURANG.headline}
          </h2>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Others */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <PixelCard className="h-full opacity-70">
            <h3 className="text-xl font-bold text-dark-light mb-4 flex items-center gap-2">
              <span className="text-2xl">😕</span>
              {WHY_HODURANG.comparison.others.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {WHY_HODURANG.comparison.others.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2 text-dark-light"
                >
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </PixelCard>
        </motion.div>

        {/* Hodurang */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <PixelCard variant="primary" className="h-full">
            <h3 className="text-xl font-bold text-dark mb-4 flex items-center gap-2">
              <span className="text-2xl">🌰</span>
              {WHY_HODURANG.comparison.hodurang.title}
            </h3>
            <ul className="flex flex-col gap-3">
              {WHY_HODURANG.comparison.hodurang.points.map((point) => (
                <li key={point} className="flex items-start gap-2 text-dark">
                  <span className="text-orange-400 mt-0.5 shrink-0">✓</span>
                  <span className="text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </PixelCard>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
