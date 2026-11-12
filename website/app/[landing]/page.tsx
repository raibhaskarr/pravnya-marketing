import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageView } from "@/components/sections/landing-page";
import { landingPages } from "@/content/landing";
import { landingMetadata } from "@/lib/seo";

// Search-focused landing pages (e.g. /iep-goal-tracker), one per file in content/landing/.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ landing: page.slug }));
}

type Props = { params: Promise<{ landing: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { landing } = await params;
  const page = landingPages.find((p) => p.slug === landing);
  return page ? landingMetadata(page) : {};
}

export default async function LandingRoute({ params }: Props) {
  const { landing } = await params;
  const page = landingPages.find((p) => p.slug === landing);
  if (!page) notFound();
  return <LandingPageView page={page} />;
}
