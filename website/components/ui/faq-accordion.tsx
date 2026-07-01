"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
  category?: string;
};

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  return (
    <div className="mx-auto max-w-3xl">
      {items.map((item) => {
        const active = open === item.question;
        return (
          <div key={item.question} className="border-b border-border">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-lg font-semibold text-ink"
                aria-expanded={active}
                onClick={() => {
                  setOpen(active ? null : item.question);
                  if (!active) trackEvent("faq_open", { question: item.question });
                }}
              >
                <span>{item.question}</span>
                <CaretDown aria-hidden className={cn("h-5 w-5 shrink-0 text-ink-tertiary transition", active && "rotate-180")} />
              </button>
            </h3>
            <div className={cn("grid transition-all", active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
              <div className="overflow-hidden">
                <p className="pb-5 text-base leading-7 text-ink-secondary">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

