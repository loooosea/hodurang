"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PixelButton from "@/components/ui/PixelButton";
import PixelBadge from "@/components/ui/PixelBadge";
import DotGridBackground from "@/components/ui/DotGridBackground";
import FloatingElement from "@/components/motion/FloatingElement";
import { HERO, CTA_HREF } from "@/lib/constants";
import { pixelFadeIn, staggerContainer, slideInRight } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-50 pt-16">
      <DotGridBackground opacity={0.15} />

      <div className="relative mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <motion.div variants={pixelFadeIn}>
              <PixelBadge variant="orange">{HERO.badge}</PixelBadge>
            </motion.div>

            <motion.h1
              variants={pixelFadeIn}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark whitespace-pre-line"
            >
              {HERO.headline}
            </motion.h1>

            <motion.p
              variants={pixelFadeIn}
              className="text-lg text-dark-light leading-relaxed whitespace-pre-line max-w-lg mx-auto lg:mx-0"
            >
              {HERO.subheadline}
            </motion.p>

            <motion.div variants={pixelFadeIn} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <PixelButton href={CTA_HREF} size="lg">
                {HERO.cta}
              </PixelButton>
            </motion.div>
          </motion.div>

          {/* Hero Character */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <FloatingElement>
              <Image
                src="/images/characters/hero-character.png"
                alt="호두랑 캐릭터"
                width={480}
                height={480}
                priority
                className="w-72 sm:w-80 lg:w-[420px] h-auto drop-shadow-lg"
              />
            </FloatingElement>
          </motion.div>
        </div>
      </div>

      {/* Bottom pixel divider */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-warm-300" />
    </section>
  );
}
