import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("privacy");

const lastUpdated = "July 1, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Privacy Policy" body={`Last updated: ${lastUpdated}`} />
      <section className="pb-24">
        <div className="container-narrow grid gap-10 text-base leading-7 text-text-secondary">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Who we are</h2>
            <p className="mt-3">
              Pravnix Labs Pvt. Ltd. ("Pravnix Labs," "we," "us") is the company behind this website
              (pravnix.ai) and builds AI products for families, including Pravnya. This policy covers
              only the pravnix.ai company website — the product you use at pravnya.com has its own
              privacy policy, published on that site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">What we collect on this website</h2>
            <p className="mt-3">
              The only personal information this website collects is what you choose to submit through
              our contact form: your name, your email address, the inquiry type you select, and the
              contents of your message. We do not require an account, and we do not collect this
              information through any other page on the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Why we collect it</h2>
            <p className="mt-3">
              We collect this information for one reason: to respond to you. Depending on the inquiry
              type you select, your message is routed to the relevant team (partnerships, press,
              investors, careers, or general contact) so the right person can reply.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">How we use it</h2>
            <ul className="mt-3 grid list-disc gap-2 pl-5">
              <li>To read and respond to your message.</li>
              <li>To keep a record of correspondence for our own reference.</li>
              <li>To route your inquiry to the appropriate team internally.</li>
            </ul>
            <p className="mt-3">We do not use contact form submissions for marketing or advertising purposes.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">We do not sell personal data</h2>
            <p className="mt-3">
              We do not sell, rent, or trade personal information submitted through this website to
              any third party, under any circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Email and contact handling</h2>
            <p className="mt-3">
              If you email us directly or submit the contact form, your message and email address are
              retained only for as long as needed to respond to and resolve your inquiry, after which
              we delete or archive it. We do not add contact form submissions to a marketing list.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Analytics</h2>
            <p className="mt-3">
              This website does not currently run any analytics or tracking scripts. If we introduce
              analytics in the future, we will use a privacy-respecting, cookieless approach and update
              this policy before doing so.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Security</h2>
            <p className="mt-3">
              We take reasonable technical and organizational measures to protect information submitted
              through this website from unauthorized access, disclosure, or misuse. No method of
              transmission or storage is perfectly secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Your choices</h2>
            <p className="mt-3">
              You can ask us to tell you what information we hold about you, or to delete it, at any
              time by emailing us at the address below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Changes to this policy</h2>
            <p className="mt-3">
              We may update this policy as the website evolves. We will change the "last updated" date
              above when we do.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
            <p className="mt-3">
              Questions about this policy or your data can be sent to{" "}
              <a href={`mailto:${siteConfig.emails.general}`} className="text-forest-bright hover:text-text-primary">
                {siteConfig.emails.general}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
