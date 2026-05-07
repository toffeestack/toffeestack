import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  FileText,
  FolderKanban,
  Plus,
} from "lucide-react";

import { ButtonLink } from "@/components/ui/button";

const quotes = [
  {
    title: "ToffeeStack Website Refresh",
    project: "Website Refresh",
    status: "Accepted",
    statusClass: "bg-green-50 text-green-700",
    total: "£1,200",
    payment: "Deposit Paid",
    date: "Accepted 03 May 2026",
  },
  {
    title: "Acme Plumbing Website",
    project: "New Website Build",
    status: "Sent",
    statusClass: "bg-blue-50 text-blue-700",
    total: "£950",
    payment: "Awaiting Acceptance",
    date: "Sent 01 May 2026",
  },
  {
    title: "Bright Dental Landing Page",
    project: "Landing Page",
    status: "Under Review",
    statusClass: "bg-purple-50 text-purple-700",
    total: "£450",
    payment: "Not Requested",
    date: "Requested 28 Apr 2026",
  },
  {
    title: "Site Care Add-on",
    project: "Ongoing Care",
    status: "Declined",
    statusClass: "bg-red-50 text-red-700",
    total: "£39 / month",
    payment: "No Payment Due",
    date: "Declined 18 Apr 2026",
  },
];

export default function QuotesPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <ButtonLink href="/dashboard/chat">
          <Plus className="h-4 w-4" />
          Request Quote
        </ButtonLink>
      </div>

      <div className="grid gap-5">
        {quotes.map((quote) => (
          <Link
            key={quote.title}
            href="/dashboard/quotes"
            className="group grid gap-6 rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_520px_130px] lg:items-center"
          >
            <div>
              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${quote.statusClass}`}
              >
                {quote.status}
              </span>

              <h2 className="mt-5 text-2xl font-black text-[var(--heading)]">
                {quote.title}
              </h2>

              <p className="mt-2 text-base leading-7 text-[var(--muted-foreground)]">
                Review quote details, linked project and payment status.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Meta icon={FolderKanban} label="Project" value={quote.project} />
              <Meta icon={FileText} label="Total" value={quote.total} />
              <Meta icon={CreditCard} label="Payment" value={quote.payment} />
              <Meta icon={CalendarDays} label="Date" value={quote.date} />
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-[var(--primary)] lg:justify-end">
              View Quote
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof FileText;
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