"use client";

import Link from "next/link";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { mobileNav, primaryNav } from "@/content/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="container-standard flex h-16 items-center justify-between">
        <Link href="/" className="inline-flex items-center" aria-label="Pravnya home">
          <img src="/assets/brand/pravnya-wordmark.svg" alt="Pravnya" className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-[15px] text-ink-secondary transition hover:text-forest">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 md:flex">
          <Link href="#" className="text-[15px] text-ink-secondary transition hover:text-forest">
            Sign in
          </Link>
          <Button href="/contact">Start free</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <List className="h-6 w-6" />
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 min-h-screen bg-dark-surface px-6 py-6 text-background md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center" onClick={() => setOpen(false)} aria-label="Pravnya home">
              <img src="/assets/brand/pravnya-wordmark.svg" alt="Pravnya" className="h-8 w-auto brightness-0 invert" />
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-6" aria-label="Mobile navigation">
            {mobileNav.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="font-display text-3xl text-background"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
