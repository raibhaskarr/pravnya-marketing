import type { Metadata } from "next";
import { Lock, ShieldCheck, XCircle } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <>
      <Hero centered eyebrow="Privacy" title="Your child's story belongs to your family. Not to us." body="Privacy is not a feature we added. It is the foundation we built on." />
      <section className="bg-forest-subtle py-20">
        <div className="container-standard">
          <h2 className="text-center font-display text-4xl">Three things that will never happen.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["We will never sell your data.", "Your child's developmental record is not for sale, at any price, to any party, for any purpose."],
              ["We will never use your record to train AI models.", "What you observe about your child stays in your record."],
              ["We will never share your data without your explicit permission.", "Your record is shared only when you initiate a share."],
            ].map(([title, body]) => <FeatureCard key={title} icon={XCircle} title={title} body={body} />)}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-standard grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">What happens to your data — specifically.</h2>
            <div className="mt-8 space-y-5 text-base leading-7 text-ink-secondary">
              <p>Your record is stored on secure servers. All data is encrypted at rest and in transit.</p>
              <p>The AI models that generate summaries are trained on general datasets, not on individual family records.</p>
              <p>You can request a copy of your record or ask us to delete your account and its data at any time by contacting <a href="mailto:support@pravnya.com" className="text-forest underline">support@pravnya.com</a>. Self-serve export and deletion tools are on our roadmap.</p>
            </div>
          </div>
          <div className="grid gap-5">
            <FeatureCard icon={Lock} title="Encrypted in transit" body="All production data flows must use encrypted transport." />
            <FeatureCard icon={ShieldCheck} title="Access is limited" body="Production access is limited to authorized personnel only." />
          </div>
        </div>
      </section>
    </>
  );
}

