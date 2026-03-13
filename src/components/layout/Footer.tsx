import Link from "next/link";
import { FOOTER } from "@/lib/constants";

export default function Footer() {
  const info = FOOTER.businessInfo;

  return (
    <footer className="bg-dark text-white border-t-3 border-dark-light">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        {/* Brand + Links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/icon.png"
              alt="호두랑"
              width={28}
              height={28}
              className="w-7 h-7"
            />
            <span className="font-bold text-lg">{FOOTER.company}</span>
          </div>

          <div className="flex gap-6">
            {FOOTER.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-orange-400 pixel-transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Business Info */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="text-sm text-gray-400 leading-relaxed space-y-1">
            <p>
              {info.corpName} | 대표 {info.ceo}
            </p>
            <p>사업자등록번호 {info.bizNumber}</p>
            <p>통신판매업신고 {info.salesNumber}</p>
            <p>{info.address}</p>
            <p>
              이메일{" "}
              <a
                href={`mailto:${info.email}`}
                className="hover:text-orange-400 pixel-transition"
              >
                {info.email}
              </a>
            </p>
            <p>고객센터 {info.csHours}</p>
            <p>개인정보보호책임자 {info.privacyOfficer}</p>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500 leading-relaxed">
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
