"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelCard from "@/components/ui/PixelCard";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { SOLUTION_FLOW } from "@/lib/constants";
import { staggerContainer, pixelFadeIn } from "@/lib/animations";

export default function SolutionFlowSection() {
  return (
    <SectionWrapper id="solution" background="cream">
      <ScrollReveal>
        <div className="text-center mb-12">
          <PixelBadge variant="orange">{SOLUTION_FLOW.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            {SOLUTION_FLOW.headline}
          </h2>
        </div>
      </ScrollReveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {SOLUTION_FLOW.steps.map((step, i) => (
          <motion.div key={step.step} variants={pixelFadeIn}>
            <PixelCard variant={i === 1 ? "primary" : "default"}>
              <div className="flex flex-col items-center text-center gap-3">
                <span className="text-4xl">{step.icon}</span>
                <div className="font-bold text-xs text-orange-400 tracking-widest uppercase">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-bold text-dark">{step.title}</h3>
                <p className="text-sm text-dark-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </PixelCard>

            {/* Arrow between steps (desktop only) */}
            {i < 2 && (
              <div className="hidden md:flex justify-center mt-4 mb-4 md:mt-0 md:mb-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
                {/* Arrow is handled by grid gap */}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Connecting arrows */}
      <div className="hidden md:flex justify-center items-center gap-4 mt-8">
        <div className="flex items-center gap-2 text-warm-400">
          <span className="text-sm font-bold">기록</span>
          <span className="text-xl">→</span>
          <span className="text-sm font-bold">정리</span>
          <span className="text-xl">→</span>
          <span className="text-sm font-bold">퀴즈</span>
        </div>
      </div>
    </SectionWrapper>
  );
}
