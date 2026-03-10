"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelCard from "@/components/ui/PixelCard";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { PROBLEM } from "@/lib/constants";
import { staggerContainer, pixelFadeIn } from "@/lib/animations";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem" background="white">
      <ScrollReveal>
        <div className="text-center mb-12">
          <PixelBadge>{PROBLEM.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            {PROBLEM.headline}
          </h2>
          <p className="mt-4 text-lg text-dark-light max-w-2xl mx-auto whitespace-pre-line leading-relaxed">
            {PROBLEM.subheadline}
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {PROBLEM.cards.map((card) => (
          <motion.div key={card.label} variants={pixelFadeIn}>
            <PixelCard hover>
              <div className="text-center">
                <span className="text-4xl mb-3 block">{card.icon}</span>
                <div className="font-[var(--font-pixel-body)] text-4xl font-bold text-orange-400 mb-1">
                  {card.stat}
                </div>
                <div className="text-sm font-bold text-dark mb-3">
                  {card.label}
                </div>
                <p className="text-sm text-dark-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </PixelCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
