import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionFlowSection from "@/components/sections/SolutionFlowSection";
import QuizPreviewSection from "@/components/sections/QuizPreviewSection";
import InputMethodsSection from "@/components/sections/InputMethodsSection";
import WhyHodurangSection from "@/components/sections/WhyHodurangSection";
import TwoTrackSection from "@/components/sections/TwoTrackSection";
import StoryOfNoteSection from "@/components/sections/StoryOfNoteSection";
import O4OExperienceSection from "@/components/sections/O4OExperienceSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import PixelDivider from "@/components/ui/PixelDivider";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <PixelDivider />
        <SolutionFlowSection />
        <QuizPreviewSection />
        <PixelDivider />
        <InputMethodsSection />
        <WhyHodurangSection />
        <PixelDivider />
        <TwoTrackSection />
        <StoryOfNoteSection />
        <O4OExperienceSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
