import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("deleteAccount");

const lastUpdated = "July 12, 2026";

export default function DeleteAccountPage() {
  return (
    <>
      <Hero
        centered
        eyebrow="Account & Data"
        title="Delete your Pravnya account"
        body="Deleting a child's profile and deleting your own account are two separate actions, each self-serve with a 30-day grace period to change your mind. Export your record first — once the grace period ends, deletion is irreversible."
      />
      <p className="pb-8 text-center text-sm text-ink-secondary">Last updated: {lastUpdated}</p>

      <section className="bg-forest-subtle py-16">
        <div className="container-standard max-w-3xl">
          <h2 className="font-display text-3xl">Before you delete — export your record</h2>
          <p className="mt-4 text-base leading-7 text-ink-secondary">
            Once the 30-day grace period ends, your data is gone — there is no recovery after that. If you
            want to keep any part of your child&apos;s developmental history, export it first from inside the
            app (Data &amp; Export on a child&apos;s profile).
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-standard max-w-3xl space-y-12">
          <div>
            <h2 className="font-display text-3xl">Deleting a child&apos;s profile</h2>
            <p className="mt-4 text-base leading-7 text-ink-secondary">
              From that child&apos;s profile page in the app, go to <strong>Danger Zone → Delete</strong>, type
              the child&apos;s name to confirm, and the profile is hidden immediately and scheduled for
              permanent deletion in 30 days. You can cancel any time before then from the same screen —
              cancelling also restores the profile to normal.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-secondary">
              After 30 days, everything for that child is permanently removed: all entries, photos, voice
              recordings, documents, milestones, AI summaries, and Ask Pravnya conversation history.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl">Deleting your own account</h2>
            <p className="mt-4 text-base leading-7 text-ink-secondary">
              From your profile page in the app, go to <strong>Danger Zone → Delete Account</strong>, confirm
              your password, and your account is disabled immediately and scheduled for permanent removal of
              your personal information in 30 days. Sign back in with your existing password any time before
              then to cancel.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-secondary">
              <strong>Deleting your account does not delete your children&apos;s profiles.</strong> It removes
              your own login and personal information (name, email, password) only. If you also want a
              child&apos;s data gone, delete that child&apos;s profile separately, either before or after
              deleting your account.
            </p>
            <p className="mt-4 text-base leading-7 text-ink-secondary">
              If you&apos;d rather have our team handle either of these for you, or don&apos;t have access to
              the app, email{" "}
              <a href="mailto:support@pravnya.com" className="text-forest underline">
                support@pravnya.com
              </a>{" "}
              from the email address on your account and we&apos;ll process the request within 30 days.
            </p>
          </div>

          <div>
            <h2 className="font-display text-3xl">What doesn&apos;t get deleted</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-ink-secondary">
              <li>PDFs you&apos;ve already downloaded and saved to your own device</li>
              <li>Emails you&apos;ve sent to professionals containing Pravnya summaries</li>
              <li>Your subscription billing history, held by our payment provider per legal requirements</li>
              <li>A child&apos;s profile, when only your own account was deleted (see above)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
