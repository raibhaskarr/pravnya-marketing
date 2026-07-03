import type { Metadata } from "next";
import { Lock, ShieldCheck, XCircle } from "@phosphor-icons/react/dist/ssr";
import { Hero } from "@/components/sections/hero";
import { FeatureCard } from "@/components/ui/feature-card";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy");

const lastUpdated = "July 3, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Hero centered eyebrow="Privacy" title="Your child's story belongs to your family. Not to us." body="Privacy is not a feature we added. It is the foundation we built on." />
      <p className="pb-8 text-center text-sm text-ink-secondary">Last updated: {lastUpdated}</p>
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
              <p>Export your complete record or delete a child&apos;s profile any time, right from the app — Data and Export on a child&apos;s profile, or Danger Zone settings to delete. You can also email <a href="mailto:support@pravnya.com" className="text-forest underline">support@pravnya.com</a> if you&apos;d rather we handle a request for you.</p>
              <p>Pravnya does not use cookies or any third-party tracking or analytics technology. Sign-in uses a token stored on your device, not a cookie. If that changes in the future, we&apos;ll update this page and give you an opt-out before it does.</p>
              <p>Your data is stored and processed in the United States today, regardless of where your family is located.</p>
            </div>
          </div>
          <div className="grid gap-5">
            <FeatureCard icon={Lock} title="Encrypted in transit" body="All production data flows must use encrypted transport." />
            <FeatureCard icon={ShieldCheck} title="Access is limited" body="Production access is limited to authorized personnel only." />
          </div>
        </div>
      </section>
      <section className="bg-forest-subtle py-20">
        <div className="container-standard">
          <h2 className="font-display text-4xl">Who we work with.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-secondary">
            A small number of vendors process data on our behalf so Pravnya can work. None of them can use your child&apos;s record for anything except providing the service listed below to us.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-forest/20 text-ink-secondary">
                  <th className="py-3 pr-4 font-semibold">Vendor</th>
                  <th className="py-3 pr-4 font-semibold">What they receive</th>
                  <th className="py-3 font-semibold">Used for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {[
                  ["Anthropic", "Notes, observations, and images you or Pravnya's AI generate — never used to train their models.", "Ask Pravnya, summaries, and report generation"],
                  ["Google (Gemini, Vertex AI, Cloud Storage)", "Same as above, plus voice recordings and photos/videos you upload.", "AI features and secure media storage"],
                  ["MSG91", "Your phone number and one-time verification codes only.", "Phone verification"],
                  ["Google Workspace", "Names and email addresses for messages Pravnya sends on your behalf.", "Account and invitation emails"],
                  ["Cloudinary", "Centre/organization logo images only — never your child's data.", "Centre branding"],
                  ["Render", "Your account and record data, encrypted at rest.", "Application hosting (United States)"],
                ].map(([vendor, receives, usedFor]) => (
                  <tr key={vendor}>
                    <td className="py-3 pr-4 font-semibold text-ink">{vendor}</td>
                    <td className="py-3 pr-4 text-ink-secondary">{receives}</td>
                    <td className="py-3 text-ink-secondary">{usedFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

