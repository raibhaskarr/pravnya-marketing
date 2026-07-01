import type { Metadata } from "next";
import { DeviceMobile, Notification, WifiSlash } from "@phosphor-icons/react/dist/ssr";
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
      <Hero centered title="Take your child's record everywhere." body="Available for iPhone, iPad, and Android. Free to start." />
      <section className="pb-20">
        <div className="container-standard grid gap-6 md:grid-cols-2">
          <DownloadCard
            platform="iOS"
            details="For iPhone and iPad. iOS 15 or later · 47 MB"
            href={siteConfig.appStoreUrl}
            badgeSrc="/assets/badges/badge-app-store.svg"
            badgeAlt="Download on the App Store placeholder badge"
          />
          <DownloadCard
            platform="Android"
            details="For Android phones and tablets. Android 10 or later · 52 MB"
            href={siteConfig.googlePlayUrl}
            badgeSrc="/assets/badges/badge-google-play.svg"
            badgeAlt="Get it on Google Play placeholder badge"
          />
        </div>
      </section>
      <section className="bg-surface py-20">
        <div className="container-standard grid gap-6 md:grid-cols-3">
          <FeatureCard icon={DeviceMobile} title="Full access" body="Every feature, on any device." />
          <FeatureCard icon={WifiSlash} title="Offline capture" body="Add observations even without connection." />
          <FeatureCard icon={Notification} title="Gentle reminders" body="Optional prompts to capture if you'd like them." />
        </div>
      </section>
      <CtaBanner title="Your child's story deserves a record this good." cta="Join beta" href="/contact" />
    </>
  );
}
