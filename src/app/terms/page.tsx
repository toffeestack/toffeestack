import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";

export const metadata = {
  title: "Terms | ToffeeStack",
  description:
    "Read the ToffeeStack Terms & Conditions for website design, development, hosting, support and related digital services.",
};

const sections = [
  {
    number: "1.",
    title: "About ToffeeStack",
    content: `ToffeeStack is a full stack web development and digital solutions business specialising in modern websites, custom web applications, API integrations, e-commerce systems, infrastructure deployment, and ongoing maintenance services. We work with businesses of all sizes, from startups and local businesses through to larger companies requiring advanced systems and infrastructure.

Our services may include website design, frontend and backend development, hosting, ongoing support, maintenance, consulting, deployment, integrations, performance optimisation, and related digital services.`,
  },
  {
    number: "2.",
    title: "Using This Website",
    content: `By using this website, you agree to do so lawfully and respectfully. You must not attempt to interfere with the operation, security, or availability of the website, servers, infrastructure, or connected systems. Any attempt to gain unauthorised access, scrape content, abuse contact forms, or misuse the website in any way is strictly prohibited.

All content displayed on this website, including branding, designs, code samples, graphics, written content, layouts, animations, and portfolio work, remains the intellectual property of ToffeeStack unless otherwise stated. Content from this website may not be copied, reproduced, redistributed, or reused without written permission.`,
  },
  {
    number: "3.",
    title: "Consultations & Project Discussions",
    content: `We offer an initial consultation free of charge. This allows us to understand your project requirements, discuss goals, review possible technical solutions, and determine the best approach for your business.

The consultation stage is intended to help both parties understand the scope and suitability of the project before any work begins. During this process we may discuss estimated pricing, timelines, infrastructure requirements, functionality, and any ongoing support requirements that may apply after launch.

A consultation does not form a legally binding agreement and does not guarantee that a project will be accepted or scheduled. We reserve the right to decline projects at our discretion.`,
  },
  {
    number: "4.",
    title: "Quotes & Project Approval",
    content: `Following consultation, a written quote or proposal may be provided. This document will normally outline the agreed scope of work, estimated project timelines, pricing, payment structure, deliverables, and any ongoing hosting or maintenance recommendations relevant to the project.

Quotes are based on the information provided at the time of consultation. If project requirements later change, additional development work may be required and revised pricing may apply.

All quotes are valid for 30 days unless otherwise stated. Projects will only begin once the quote has been approved and any required upfront payment has been received.`,
  },
  {
    number: "5.",
    title: "Payments",
    content: `Payment terms will always be discussed during the consultation and quotation stage. Depending on the nature and size of the project, we may require either partial or full upfront payment before development begins.

For projects under £1,000, payment may be made either by bank transfer or via a secure online payment link. Projects exceeding £1,000 must be paid via bank transfer only.

Invoices must be paid within the agreed payment period outlined on the invoice or proposal. Failure to make payment on time may result in delays, suspension of work, withholding of deliverables, or suspension of hosting and support services where applicable.

Due to the nature of custom development work, deposits and upfront payments are generally non-refundable once work has commenced. This is because development time, planning, design, infrastructure setup, and technical work begin immediately once a project is approved.

Ownership of completed work does not transfer until all outstanding invoices have been paid in full.`,
  },
  {
    number: "6.",
    title: "Project Timelines",
    content: `Every project is different, and project timelines can vary significantly depending on complexity, functionality, integrations, client response times, and the availability of required content or assets.

Estimated timeframes will be discussed during the consultation stage and finalised during the quotation stage. While we always aim to deliver projects efficiently and on schedule, all delivery dates should be considered estimates unless explicitly agreed otherwise in writing.

Delays can sometimes occur due to late feedback, delayed content delivery, changes in project scope, third-party service interruptions, or technical issues outside of our control. In these situations, timelines may need to be adjusted accordingly.`,
  },
  {
    number: "7.",
    title: "Client Responsibilities",
    content: `Clients are responsible for providing accurate project information, supplying required content and assets in a timely manner, and responding to feedback requests during development.

This may include logos, written content, product information, images, access credentials, API details, or other materials required to complete the project.

Clients are also responsible for ensuring they have the legal right to use any content, images, branding, or materials supplied to us.`,
  },
  {
    number: "8.",
    title: "Revisions & Scope Changes",
    content: `Projects are quoted based on an agreed scope of work. Minor revisions are usually included where appropriate, particularly for design adjustments, small content amendments, or minor refinements during the development process.

Requests outside of the agreed project scope may require additional development time and may incur additional charges.`,
  },
  {
    number: "9.",
    title: "Hosting & Infrastructure",
    content: `Clients may choose to host their website independently or use infrastructure managed by ToffeeStack.

Where hosting is managed by us, we may utilise cloud infrastructure, VPS systems, containerised deployments, dedicated servers, or third-party hosting providers depending on the requirements of the project.

While we take reasonable steps to maintain security, uptime, and performance, we cannot guarantee uninterrupted availability at all times.`,
  },
  {
    number: "10.",
    title: "Site Care & Ongoing Support",
    content: `Following project completion, we strongly recommend all clients move onto a ToffeeStack Site Care Plan.

Our Site Care Plan currently starts from £39 per month and is designed primarily for small to medium-sized businesses. This includes managed hosting, maintenance, minor updates, technical support, and one custom business email account using your domain name.

Additional email accounts are billed separately. More advanced development work, redesigns, integrations, SEO campaigns, or structural website changes are not included within the standard plan and may require separate quotations.`,
  },
  {
    number: "11.",
    title: "Third-Party Services",
    content: `Many projects rely on third-party platforms and services including hosting providers, APIs, payment processors, plugins, CMS platforms, email services, and external software providers.

While we aim to integrate reliable technologies wherever possible, ToffeeStack cannot be held responsible for outages, pricing changes, discontinued services, API limitations, security vulnerabilities, or failures originating from third-party providers.`,
  },
  {
    number: "12.",
    title: "Intellectual Property",
    content: `Unless otherwise agreed in writing, ownership of completed project deliverables transfers to the client once all outstanding invoices have been paid in full.

We retain ownership of any internal frameworks, reusable systems, deployment tooling, utilities, development processes, or proprietary technologies used during development unless specifically agreed otherwise.`,
  },
  {
    number: "13.",
    title: "Limitation of Liability",
    content: `ToffeeStack will not be liable for indirect losses, loss of profits, business interruption, loss of revenue, data loss, reputational damage, or technical issues caused by third-party systems or providers.

While we always aim to deliver work to a high professional standard, no website, application, or online service can ever be guaranteed to be completely error-free, uninterrupted, or immune from security risks.`,
  },
  {
    number: "14.",
    title: "Project Suspension & Termination",
    content: `Either party may terminate a project agreement in writing at any stage.

If a project is cancelled after work has begun, clients remain responsible for payment covering work completed up to the cancellation date.`,
  },
  {
    number: "15.",
    title: "Privacy",
    content: `Any personal information shared through this website or during the course of a project will only be used for communication, project management, service delivery, invoicing, and related business operations.

We do not sell personal information to third parties.`,
  },
  {
    number: "16.",
    title: "Changes To These Terms",
    content: `These Terms & Conditions may be updated occasionally to reflect changes to services, infrastructure, legal requirements, or business operations.

The latest version will always be published on this website.`,
  },
  {
    number: "17.",
    title: "Governing Law",
    content: `These Terms & Conditions are governed by the laws of England and Wales.`,
  },
  {
    number: "18.",
    title: "Contact",
    content: `If you have any questions regarding these Terms & Conditions, please contact ToffeeStack directly through hello@toffeestack.com.`,
  },
];

export default function TermsPage() {
  return (
    <main className="overflow-hidden bg-white">
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
        title="Terms"
        meta={
          <p className="text-base leading-8 text-[var(--muted-foreground)]">
            Last updated: 6 May 2026
          </p>
        }
      />

      <section className="bg-white pb-24 pt-2 sm:pt-4 sm:pb-28">
        <Container>
          <div className="space-y-14">
            {sections.map((section) => (
              <div key={section.number}>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-black text-[#305CDE]">
                    {section.number}
                  </span>

                  <h2 className="text-2xl font-black text-[#050816]">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-6 space-y-6">
                  {section.content.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="max-w-none text-base leading-8 text-[#5E6475]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
