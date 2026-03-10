"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelCard from "@/components/ui/PixelCard";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { INPUT_METHODS } from "@/lib/constants";
import { staggerContainer, pixelFadeIn } from "@/lib/animations";

export default function InputMethodsSection() {
  return (
    <SectionWrapper id="features" background="cream">
      <ScrollReveal>
        <div className="text-center mb-12">
          <PixelBadge variant="orange">{INPUT_METHODS.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            {INPUT_METHODS.headline}
          </h2>
          <p className="mt-4 text-lg text-dark-light">
            {INPUT_METHODS.subheadline}
          </p>
        </div>
      </ScrollReveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        {INPUT_METHODS.methods.map((method) => (
          <motion.div key={method.title} variants={pixelFadeIn}>
            <PixelCard hover className="h-full">
              <div className="flex flex-col items-center text-center gap-3">
                <span className="text-5xl">{method.icon}</span>
                <h3 className="text-lg font-bold text-dark">{method.title}</h3>
                <p className="text-sm text-dark-light leading-relaxed">
                  {method.desc}
                </p>
              </div>
            </PixelCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
