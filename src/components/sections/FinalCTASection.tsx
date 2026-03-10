"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PixelButton from "@/components/ui/PixelButton";
import DotGridBackground from "@/components/ui/DotGridBackground";
import FloatingElement from "@/components/motion/FloatingElement";
import { FINAL_CTA, CTA_HREF } from "@/lib/constants";
import { pixelFadeIn, staggerContainer } from "@/lib/animations";

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-orange-400 to-orange-500"
    >
      <DotGridBackground opacity={0.1} className="mix-blend-overlay" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto max-w-4xl text-center flex flex-col items-center gap-6"
      >
        <FloatingElement distance={8} duration={4}>
          <Image
            src="/images/characters/all-characters.png"
            alt="호두랑 캐릭터들"
            width={240}
            height={240}
            className="w-40 sm:w-52 h-auto drop-shadow-lg"
          />
        </FloatingElement>

        <motion.h2
          variants={pixelFadeIn}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
        >
          {FINAL_CTA.headline}
        </motion.h2>

        <motion.p
          variants={pixelFadeIn}
          className="text-lg sm:text-xl text-orange-100 whitespace-pre-line max-w-lg"
        >
          {FINAL_CTA.subheadline}
        </motion.p>

        <motion.div variants={pixelFadeIn}>
          <PixelButton href={CTA_HREF} variant="secondary" size="lg">
            {FINAL_CTA.cta}
          </PixelButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
