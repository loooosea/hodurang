"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, CTA_HREF } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(
    NAV_LINKS.map((l) => l.id),
    80
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-50/95 backdrop-blur-sm border-b-3 border-dark">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logos/icon.png"
            alt="호두랑"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-lg text-dark">호두랑</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                text-sm font-medium pixel-transition
                ${activeId === link.id ? "text-orange-400" : "text-dark-light hover:text-orange-400"}
              `}
            >
              {link.label}
            </a>
          ))}
          <Link
            href={CTA_HREF}
            className="ml-2 px-4 py-2 bg-orange-400 text-white text-sm font-bold border-2 border-dark shadow-[3px_3px_0_#2D2D2D] pixel-transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            시작하기
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="메뉴 열기"
        >
          <span
            className={`w-6 h-0.5 bg-dark pixel-transition ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-dark pixel-transition ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-dark pixel-transition ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t-2 border-warm-300 bg-warm-50 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    text-base font-medium py-2
                    ${activeId === link.id ? "text-orange-400" : "text-dark-light"}
                  `}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href={CTA_HREF}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 bg-orange-400 text-white text-center font-bold border-2 border-dark shadow-[3px_3px_0_#2D2D2D]"
              >
                시작하기
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
