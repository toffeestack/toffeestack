import Link from "next/link";
import { ArrowRight, Globe2, Plus, Server, ShieldCheck } from "lucide-react";

const websites = [
  {
    name: "ToffeeStack",
    domain: "toffeestack.com",
    description: "Main business website and customer portal.",
    status: "Live",
    statusClass: "bg-green-500",
    hosting: "PHP 8.2",
    storage: "Disk 2.4 GB",
  },
  {
    name: "Acme Plumbing",
    domain: "acmeplumbing.co.uk",
    description: "Local plumbing business website with quote system.",
    status: "In Development",
    statusClass: "bg-amber-500",
    hosting: "PHP 8.2",
    storage: "Disk 5.1 GB",
  },
  {
    name: "Bright Dental",
    domain: "brightdental.co.uk",
    description: "Landing page and Google Ads conversion website.",
    status: "Review",
    statusClass: "bg-purple-500",
    hosting: "PHP 8.1",
    storage: "Disk 1.1 GB",
  },
  {
    name: "GreenOak",
    domain: "greenoakstudio.co.uk",
    description: "Creative portfolio and hosting management.",
    status: "Live",
    statusClass: "bg-green-500",
    hosting: "PHP 8.2",
    storage: "Disk 3.2 GB",
  },
  {
    name: "Launch Product",
    domain: "launchproduct.com",
    description: "SaaS launch landing page and onboarding funnel.",
    status: "Live",
    statusClass: "bg-green-500",
    hosting: "PHP 8.2",
    storage: "Disk 512 MB",
  },
];

export default function WebsitesPage() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {websites.map((website) => (
        <Link
          key={website.domain}
          href={`https://${website.domain}`}
          target="_blank"
          className="group overflow-hidden rounded-[2rem] border border-[#E8EDF7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden border-b border-[#E8EDF7] bg-[#F8FAFD]">
            <img
              src={`https://image.thum.io/get/width/1200/crop/800/https://${website.domain}`}
              alt={website.name}
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex h-[260px] flex-col p-6">
            <div>
              <h2 className="text-2xl font-black text-[var(--heading)]">
                {website.name}
              </h2>

              <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                {website.domain}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3 text-sm text-[var(--muted-foreground)]">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${website.statusClass}`}
                />

                <span>{website.status}</span>
              </div>

              <span className="text-[#D5DBE8]">|</span>

              <span>{website.hosting}</span>

              <span className="text-[#D5DBE8]">|</span>

              <span>{website.storage}</span>
            </div>

            <div className="mt-auto pt-8">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                Visit Website
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </Link>
      ))}

      <Link
        href="/dashboard/quotes"
        className="group flex min-h-[520px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#D7DEEB] bg-white p-10 text-center shadow-[0_20px_60px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] transition group-hover:bg-[var(--secondary)]/10 group-hover:text-[var(--secondary)]">
          <Plus className="h-8 w-8" />
        </div>

        <h2 className="mt-8 text-2xl font-black text-[var(--heading)]">
          Add New Website
        </h2>

        <p className="mt-3 max-w-[260px] text-base leading-7 text-[var(--muted-foreground)]">
          Create and launch a new website project with ToffeeStack.
        </p>

        <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
          Request Quote
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </div>
      </Link>
    </div>
  );
}