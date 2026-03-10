"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelBadge from "@/components/ui/PixelBadge";
import PixelCard from "@/components/ui/PixelCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { STORY_OF_NOTE } from "@/lib/constants";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function StoryOfNoteSection() {
  return (
    <SectionWrapper id="product" background="white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Product Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex justify-center"
        >
          <div className="pixel-border bg-white p-2">
            <Image
              src={STORY_OF_NOTE.productImage}
              alt="호두랑 기억력 노트"
              width={500}
              height={400}
              className="w-full max-w-md h-auto"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-5"
        >
          <PixelBadge>{STORY_OF_NOTE.badge}</PixelBadge>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark whitespace-pre-line leading-tight">
            {STORY_OF_NOTE.headline}
          </h2>
          <p className="text-base text-dark-light leading-relaxed whitespace-pre-line">
            {STORY_OF_NOTE.subheadline}
          </p>

          <ScrollReveal delay={0.3}>
            <PixelCard variant="primary" className="inline-block">
              <div className="flex items-center gap-4">
                <span className="font-bold text-4xl sm:text-5xl text-orange-500">
                  {STORY_OF_NOTE.stat}
                </span>
                <span className="text-sm font-bold text-dark">
                  {STORY_OF_NOTE.statLabel}
                </span>
              </div>
            </PixelCard>
          </ScrollReveal>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
