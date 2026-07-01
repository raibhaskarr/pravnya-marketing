"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setOpen(false);
    openButtonRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition", scrolled ? "border-b border-border bg-bg-surface/95 backdrop-blur-md" : "bg-transparent")}>
      <div className="container-full flex h-[60px] items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-text-primary" aria-label="Pravnix Labs home">
          Pravnix Labs
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-text-secondary transition hover:text-text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="/contact" className="min-h-10 px-4 py-2">Contact</Button>
        </div>
        <button
          ref={openButtonRef}
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-text-secondary md:hidden"
          onClick={() => setOpen(true)}
        >
          <List className="h-6 w-6" />
        </button>
      </div>
      {open ? (
        <div role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-50 bg-bg px-6 py-6 md:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-text-primary" onClick={closeMenu}>
              Pravnix Labs
            </Link>
            <button ref={closeButtonRef} type="button" aria-label="Close navigation" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-bg-surface text-text-secondary" onClick={closeMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-12 grid gap-6" aria-label="Mobile primary navigation">
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className="border-b border-border pb-5 text-3xl font-bold text-text-primary" onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Button href="/contact" className="w-full" >Contact</Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
