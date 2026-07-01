import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { CtaBanner } from "@/components/ui/cta-banner";
import { Hero } from "@/components/sections/hero";
import { faqItems } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("faq");

export default function FaqPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={data} />
      <Hero centered title="Questions parents ask." body="If you don't find your answer here, contact us. We respond to every message." />
      <section className="pb-20">
        <FaqAccordion items={faqItems} />
      </section>
      <CtaBanner title="Still have a question?" cta="Contact us" href="/contact" />
    </>
  );
}

