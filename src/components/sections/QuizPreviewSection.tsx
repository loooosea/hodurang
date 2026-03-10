"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PixelCard from "@/components/ui/PixelCard";
import PixelBadge from "@/components/ui/PixelBadge";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { QUIZ_PREVIEW } from "@/lib/constants";
import { staggerContainer, pixelFadeIn, scaleIn } from "@/lib/animations";

function QuizCard({
  quiz,
}: {
  quiz: (typeof QUIZ_PREVIEW.quizzes)[number];
}) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PixelCard variant="default" className="h-full">
      <div className="flex flex-col gap-4">
        <PixelBadge variant="orange">{quiz.tag}</PixelBadge>
        <h4 className="text-lg font-bold text-dark">{quiz.question}</h4>
        <div className="flex flex-col gap-2">
          {quiz.options.map((option, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`
                text-left px-4 py-2.5 border-2 text-sm font-medium pixel-transition
                ${
                  selected === null
                    ? "border-warm-300 bg-warm-50 hover:border-orange-400 hover:bg-orange-50 text-dark"
                    : i === quiz.answer
                      ? "border-green-500 bg-green-50 text-green-700"
                      : selected === i
                        ? "border-red-400 bg-red-50 text-red-600"
                        : "border-warm-200 bg-warm-50 text-dark-light"
                }
              `}
            >
              {option}
            </button>
          ))}
        </div>
        {selected !== null && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm font-medium ${selected === quiz.answer ? "text-green-600" : "text-orange-500"}`}
          >
            {selected === quiz.answer
              ? "정답이에요! 기억력이 좋으시네요 🎉"
              : "아쉬워요! 호두랑과 함께 기억을 되살려 보세요"}
          </motion.p>
        )}
      </div>
    </PixelCard>
  );
}

export default function QuizPreviewSection() {
  return (
    <SectionWrapper id="quiz" background="white">
      <ScrollReveal>
        <div className="text-center mb-12">
          <PixelBadge>{QUIZ_PREVIEW.badge}</PixelBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            {QUIZ_PREVIEW.headline}
          </h2>
          <p className="mt-4 text-lg text-dark-light max-w-2xl mx-auto">
            {QUIZ_PREVIEW.subheadline}
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
        {QUIZ_PREVIEW.quizzes.map((quiz) => (
          <motion.div key={quiz.question} variants={pixelFadeIn}>
            <QuizCard quiz={quiz} />
          </motion.div>
        ))}
      </motion.div>

      <ScrollReveal>
        <motion.div variants={scaleIn} className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-warm-100 border-2 border-warm-400 text-sm text-warm-600">
            <span>🔬</span>
            <span>{QUIZ_PREVIEW.science}</span>
          </div>
        </motion.div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
