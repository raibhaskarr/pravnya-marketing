import Link from "next/link";
import { footerGroups, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-inset py-16">
      <div className="container-full">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link href="/" className="text-base font-semibold text-text-primary">Pravnix Labs</Link>
            <p className="mt-4 max-w-sm font-display text-sm italic leading-6 text-text-tertiary">{siteConfig.tagline}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {Object.entries(footerGroups).map(([group, links]) => (
              <div key={group}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.08em] text-sage">{group}</h2>
                <ul className="mt-5 grid gap-3">
                  {links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link href={link.href} className="text-sm text-text-secondary transition hover:text-text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 border-t border-border pt-8 text-sm text-text-tertiary">
          <p>© 2026 Pravnix Labs Pvt. Ltd. India</p>
          <p className="mt-2">Built to last. Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
