import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms");

const lastUpdated = "July 1, 2026";

export default function TermsPage() {
  return (
    <>
      <Hero eyebrow="Legal" title="Terms of Service" body={`Last updated: ${lastUpdated}`} />
      <section className="pb-24">
        <div className="container-narrow grid gap-10 text-base leading-7 text-text-secondary">
          <div>
            <p>
              These terms govern your use of the pravnix.ai website, operated by Pravnix Labs Pvt. Ltd.
              ("Pravnix Labs," "we," "us"). By using this website, you agree to these terms. If you do
              not agree, please do not use the site.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Informational purpose</h2>
            <p className="mt-3">
              This website exists to describe Pravnix Labs as a company: who we are, what we build, and
              how we think about responsible AI. It does not host or operate the Pravnya product —
              Pravnya is used at pravnya.com, which has its own terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Not professional advice</h2>
            <p className="mt-3">
              Nothing on this website constitutes medical, clinical, legal, financial, or other
              professional advice. Content describing Pravnya's AI principles and architecture is
              provided for transparency about how our products work — it is not a substitute for
              consulting a qualified professional about your child's development or any other matter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Information may change</h2>
            <p className="mt-3">
              Product descriptions, roadmaps, team information, and other content on this site reflect
              our plans and understanding at the time of publishing and may change without notice as
              our products and company evolve.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Intellectual property</h2>
            <p className="mt-3">
              The text, design, and branding on this website belong to Pravnix Labs unless otherwise
              noted. You may not reproduce, distribute, or create derivative works from this site's
              content without our written permission, other than for personal, non-commercial reference.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Acceptable use</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 grid list-disc gap-2 pl-5">
              <li>Use this website in a way that could disable, overburden, or impair it.</li>
              <li>Attempt to gain unauthorized access to any part of the site or its infrastructure.</li>
              <li>Use the contact form to send spam, malicious content, or unlawful material.</li>
              <li>Scrape or harvest content from this site for unauthorized commercial use.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">External links</h2>
            <p className="mt-3">
              This site links to external destinations, including pravnya.com. We are not responsible
              for the content, policies, or practices of websites we do not operate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Limitation of liability</h2>
            <p className="mt-3">
              This website is provided "as is" without warranties of any kind. To the fullest extent
              permitted by law, Pravnix Labs is not liable for any damages arising from your use of, or
              inability to use, this website or its content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Changes to these terms</h2>
            <p className="mt-3">
              We may update these terms as the website evolves. We will change the "last updated" date
              above when we do.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-text-primary">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to{" "}
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
