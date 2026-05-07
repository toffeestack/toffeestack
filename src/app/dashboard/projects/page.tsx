import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  FileText,
  Globe2,
} from "lucide-react";

const projects = [
  {
    title: "ToffeeStack Website Refresh",
    description: "Homepage, services pages and client portal improvements.",
    status: "In Progress",
    statusClass: "bg-amber-50 text-amber-700",
    website: "toffeestack.com",
    quote: "Accepted",
    payment: "Part Paid",
    date: "Started 02 May 2026",
  },
  {
    title: "Acme Plumbing Website",
    description: "New five-page business website with quote request form.",
    status: "Under Review",
    statusClass: "bg-purple-50 text-purple-700",
    website: "Coming soon",
    quote: "Accepted",
    payment: "Outstanding",
    date: "Started 28 Apr 2026",
  },
  {
    title: "Bright Dental Landing Page",
    description: "Single landing page for local Google Ads campaign.",
    status: "Quoted",
    statusClass: "bg-blue-50 text-blue-700",
    website: "Not live yet",
    quote: "Sent",
    payment: "Not requested",
    date: "Requested 24 Apr 2026",
  },
  {
    title: "Green Oak Website Care",
    description: "Website support, hosting and ongoing monthly maintenance.",
    status: "Completed",
    statusClass: "bg-green-50 text-green-700",
    website: "greenoak-example.co.uk",
    quote: "Accepted",
    payment: "Paid",
    date: "Completed 18 Apr 2026",
  },
];

export default function ProjectsPage() {
  return (
    <div className="grid gap-5">
      {projects.map((project) => (
        <Link
          key={project.title}
          href="/dashboard/projects"
          className="group grid gap-6 rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_520px_130px] lg:items-center sm:p-8"
        >
          <div>
            <span
              className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${project.statusClass}`}
            >
              {project.status}
            </span>

            <h2 className="mt-5 text-2xl font-black text-[var(--heading)]">
              {project.title}
            </h2>

            <p className="mt-2 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
              {project.description}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Meta icon={Globe2} label="Website" value={project.website} />
            <Meta icon={FileText} label="Quote" value={project.quote} />
            <Meta icon={CreditCard} label="Payment" value={project.payment} />
            <Meta icon={CalendarDays} label="Date" value={project.date} />
          </div>

          <div className="flex items-center gap-2 text-sm font-bold text-[var(--primary)] lg:justify-end">
            View Project
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Globe2;
  label: string;
  value: string;
}) {
  return (
    <div className="min-h-[84px] rounded-2xl bg-[#F8FAFD] p-4">
      <div className="flex items-center gap-2 text-xs font-bold text-[#596073]">
        <Icon className="h-4 w-4 text-[var(--primary)]" />
        {label}
      </div>

      <p className="mt-2 text-sm font-bold text-[var(--heading)]">{value}</p>
    </div>
  );
}