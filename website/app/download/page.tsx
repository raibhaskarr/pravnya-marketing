import type { Metadata } from "next";
import { ArrowRight, DeviceMobile, Globe, Notification } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { DownloadCard } from "@/components/ui/download-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { CtaBanner } from "@/components/ui/cta-banner";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("download");

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
          <FeatureCard icon={DeviceMobile} title="Made for everyday use" body="Capture an update while it is still fresh." />
          <FeatureCard icon={Globe} title="Use it across devices" body="Open the same private record from your browser." />
          <FeatureCard icon={Notification} title="Gentle reminders" body="Optional prompts to capture if you'd like them." />
        </div>
      </section>
      <CtaBanner title="Start with one update." body="Free to start. No credit card." cta="Start free" />
    </>
  );
}
