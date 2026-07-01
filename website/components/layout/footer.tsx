import Link from "next/link";
import { footerLinks } from "@/content/navigation";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-dark-surface py-16 text-background">
      <div className="container-standard">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Pravnya home">
              <img src="/assets/brand/pravnya-logo-dark.svg" alt="" className="h-10 w-10 rounded-xl" aria-hidden="true" />
              <span className="font-display text-3xl font-semibold text-background">Pravnya</span>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-7 text-[#C8D4CC]">
              The child development companion families trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={siteConfig.appStoreUrl} className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-surface" aria-label="Download on the App Store">
                <img src="/assets/badges/badge-app-store.svg" alt="Download on the App Store placeholder badge" className="h-11 w-auto" />
              </Link>
              <Link href={siteConfig.googlePlayUrl} className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-surface" aria-label="Get it on Google Play">
                <img src="/assets/badges/badge-google-play.svg" alt="Get it on Google Play placeholder badge" className="h-11 w-auto" />
              </Link>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#8FAF99]">{group}</h2>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-sm text-[#C8D4CC] transition hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-[#8FAF99]">
          © 2026 Pravnix Labs. Built with care for families.
        </div>
      </div>
    </footer>
  );
}
