import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("terms");

const lastUpdated = "July 2, 2026";

export default function TermsPage() {
  return (
    <>
      <Hero centered eyebrow="Legal" title="Terms of Service" body={`Last updated: ${lastUpdated}`} />
      <section className="pb-24">
        <div className="container-standard mx-auto grid max-w-3xl gap-10 text-base leading-7 text-ink-secondary">
          <div>
            <p>
              These Terms of Service ("Terms") govern your access to and use of Pravnya, including our website,
              mobile applications, and related services (together, the "Service"), operated by the team behind
              Pravnya ("Pravnya," "we," "us," "our"). By creating an account or using the Service, you agree to
              these Terms. If you do not agree, please do not use the Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">1. What Pravnya is</h2>
            <p className="mt-3">
              Pravnya helps parents and caregivers capture, organize, and understand their child's developmental
              story — through notes, photos, voice memos, documents, a longitudinal timeline, progress views, and
              an AI assistant ("Ask Pravnya") that helps you understand your own observations. Pravnya is not a
              medical device, a diagnostic tool, or a substitute for professional medical, therapeutic, or
              educational advice. See Section 6 below.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">2. Eligibility and your account</h2>
            <p className="mt-3">
              You must be at least 18 years old and the parent, legal guardian, or another adult with authorized
              caregiving responsibility for a child to create an account and add that child's information to
              Pravnya. You are responsible for the accuracy of the information you provide, for keeping your
              login credentials confidential, and for all activity under your account. Notify us promptly at{" "}
              <a href="mailto:support@pravnya.com" className="text-forest underline">
                support@pravnya.com
              </a>{" "}
              if you believe your account has been accessed without authorization.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">3. Your family's data and content</h2>
            <p className="mt-3">
              You own the observations, photos, videos, voice notes, documents, and other content you add to
              Pravnya about your child ("Your Content"). We do not sell Your Content, and we do not use it to
              train AI models for other families. To provide the Service, you grant us a limited license to
              store, process, and display Your Content back to you and to anyone you explicitly choose to share
              it with (see Section 5). Full details on how we collect, use, and protect your data are in our{" "}
              <a href="/privacy" className="text-forest underline">
                Privacy Policy
              </a>
              , which is part of these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">4. AI features</h2>
            <p className="mt-3">
              Ask Pravnya and other AI-generated insights are based on the information in your own record. They
              are intended to help you notice patterns and prepare for conversations with professionals — they
              are not medical, clinical, legal, or diagnostic conclusions, and they can be incomplete or wrong.
              You are responsible for reviewing AI-generated content before relying on or sharing it, and for
              consulting a qualified professional for any medical, developmental, or legal decision.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">5. Sharing with others</h2>
            <p className="mt-3">
              Pravnya lets you choose to share parts of your record with family members, caregivers, or
              professionals, with permissions you control. You are responsible for deciding who you invite and
              what access level you grant them. You can review and revoke access at any time from your child's
              profile. We are not responsible for what a person you've granted access to does with information
              they've viewed or exported.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">6. Not medical, therapeutic, or legal advice</h2>
            <p className="mt-3">
              Pravnya does not assess, evaluate, diagnose, or treat any medical or developmental condition, and
              nothing in the Service — including AI-generated content — constitutes medical, psychological,
              therapeutic, educational, or legal advice. Always consult a qualified professional for decisions
              about your child's health, development, education, or care, and contact emergency services directly
              in any urgent or crisis situation. Pravnya is not equipped to respond to emergencies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">7. Subscriptions and billing</h2>
            <p className="mt-3">
              Pravnya offers a free plan and an optional paid Premium plan with additional features. Current
              pricing is available at{" "}
              <a href="/pricing" className="text-forest underline">
                pravnya.com/pricing
              </a>
              . If you subscribe to a paid plan, you authorize us to charge the applicable fees to your chosen
              payment method on a recurring basis until you cancel. You can cancel at any time; your access
              continues until the end of the current billing period, and your record is preserved — you are not
              deleted or downgraded on cancellation, only moved to free-plan limits.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">8. Acceptable use</h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="mt-3 grid list-disc gap-2 pl-5">
              <li>Use the Service for any child you do not have authorized caregiving responsibility for.</li>
              <li>Attempt to gain unauthorized access to any account, data, or system.</li>
              <li>Use the Service to harass, harm, or violate the rights of any person.</li>
              <li>Upload content that is unlawful, or that you do not have the right to upload.</li>
              <li>Reverse-engineer, scrape, or interfere with the Service's normal operation.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">9. Intellectual property</h2>
            <p className="mt-3">
              The Pravnya name, brand, app, website, and underlying software belong to us and are protected by
              intellectual property law. These Terms do not grant you any rights to our trademarks, branding, or
              proprietary technology beyond what's needed to use the Service as intended. Your Content remains
              yours, as described in Section 3.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">10. Termination</h2>
            <p className="mt-3">
              You may stop using the Service and request account deletion at any time by contacting{" "}
              <a href="mailto:support@pravnya.com" className="text-forest underline">
                support@pravnya.com
              </a>
              . We may suspend or terminate your access if you violate these Terms or use the Service in a way
              that could harm us, other users, or a child whose data you don't have authorization to hold.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">11. Disclaimers and limitation of liability</h2>
            <p className="mt-3">
              The Service is provided "as is," without warranties of any kind, express or implied. To the fullest
              extent permitted by law, Pravnya and its team are not liable for any indirect, incidental, or
              consequential damages arising from your use of the Service, including decisions made based on
              AI-generated content. Nothing in these Terms limits liability that cannot be limited under
              applicable law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">12. Changes to these Terms</h2>
            <p className="mt-3">
              We may update these Terms as the Service evolves. If we make a material change, we will notify you
              in the app or by email before it takes effect. Continuing to use the Service after a change takes
              effect means you accept the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">13. Governing law</h2>
            <p className="mt-3">
              These Terms are governed by the laws of India, without regard to conflict-of-law principles, unless
              a different governing law is required by the laws of your country of residence.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-ink">14. Contact</h2>
            <p className="mt-3">
              Questions about these Terms can be sent to{" "}
              <a href="mailto:support@pravnya.com" className="text-forest underline">
                support@pravnya.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
