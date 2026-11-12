import type { Metadata } from "next";
import { ArrowRight, DeviceMobile, Globe, Notification } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { DownloadCard } from "@/components/ui/download-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import Link from "next/link";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("download");

const downloadFaq = [
  { question: "Is there an iPhone app?", answer: "Not yet. On an iPhone or iPad, open Pravnya in Safari or any browser. The web app does everything the Android app does." },
  { question: "Which Android phones are supported?", answer: "Phones and tablets running Android 10 or later. Get it from Google Play." },
  { question: "Can I use the web app and the Android app together?", answer: "Yes. Sign in with the same account and you see the same private record on both." },
  { question: "Can I use Pravnya in the UAE?", answer: "Yes. Pravnya launched in India and is available to families in the UAE and elsewhere, on the web and on Android." },
];

export default function DownloadPage() {
  return (
    <>
      <Hero centered title="Use Pravnya wherever family life happens." body="Open Pravnya on the web, or get the Android app. Free to start." />
      <section className="pb-20">
        <div className="container-standard grid gap-6 md:grid-cols-2">
          <article className="rounded-xl bg-dark-surface p-8 text-background shadow-l md:p-10">
            <Globe className="h-14 w-14 text-mint" aria-hidden />
            <h2 className="mt-8 font-display text-3xl text-background">Use the web app</h2>
            <p className="mt-3 text-[#C8D4CC]">Works in your phone or computer browser. Nothing to download.</p>
            <a href={siteConfig.signUpUrl} className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 font-semibold text-forest transition hover:bg-background">
              Start free <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </article>
          <DownloadCard
            platform="Android"
            details="For Android phones and tablets. Android 10 or later · 52 MB"
            href={siteConfig.googlePlayUrl}
            badgeSrc="/assets/badges/badge-google-play.png"
            badgeAlt="Get it on Google Play"
          />
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard grid gap-6 md:grid-cols-3">
          <FeatureCard icon={DeviceMobile} title="Made for everyday use" body="Log a session while it is still fresh." />
          <FeatureCard icon={Globe} title="Use it across devices" body="Open the same private record from your browser." />
          <FeatureCard icon={Notification} title="Gentle prompts" body="After a scheduled therapy session, Home offers to help you jot down how it went." />
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="container-standard max-w-3xl">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Get started in three steps.</h2>
          <ol className="mt-6 list-decimal space-y-3 pl-6 text-lg leading-8 text-ink-secondary">
            <li>Create your free account on the web or in the Android app.</li>
            <li>Add your child, and upload their IEP or therapy plan if you have one, so Pravnya knows their goals.</li>
            <li>After the next therapy session or a moment at home, write, photograph or say what happened, then approve what Pravnya suggests.</li>
          </ol>
          <p className="mt-6 text-ink-secondary">New to Pravnya? See <Link href="/how-it-works" className="font-semibold text-forest underline underline-offset-4">how it works</Link>.</p>
        </div>
      </section>
      <section className="bg-surface py-16 md:py-20">
        <JsonLd data={faqJsonLd(downloadFaq)} />
        <div className="container-standard">
          <h2 className="text-center font-display text-3xl text-ink md:text-4xl">Download questions</h2>
          <div className="mt-10"><FaqAccordion items={downloadFaq} /></div>
        </div>
      </section>
      <CtaBanner title="Start with one note." body="Free to start. No credit card." cta="Start free" />
    </>
  );
}
