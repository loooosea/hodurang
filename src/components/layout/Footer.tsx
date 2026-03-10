import Image from "next/image";
import Link from "next/link";
import { FOOTER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-white border-t-3 border-dark-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logos/icon.png"
                alt="호두랑"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-bold text-lg">{FOOTER.company}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {FOOTER.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {FOOTER.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-orange-400 pixel-transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl">
            {FOOTER.disclaimer}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <p className="text-xs text-gray-600">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
