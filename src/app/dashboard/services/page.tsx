import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Globe2,
  Mail,
  Plus,
  ShieldCheck,
} from "lucide-react";

const siteCarePlans = [
  {
    website: "toffeestack.com",
    status: "Active",
    statusClass: "bg-green-50 text-green-700",
    plan: "Site Care",
    price: "£39 / month",
    mailboxes: "1 included + 2 additional",
    renewal: "Renews 02 Jun 2026",
  },
  {
    website: "greenoakstudio.co.uk",
    status: "Active",
    statusClass: "bg-green-50 text-green-700",
    plan: "Site Care",
    price: "£39 / month",
    mailboxes: "1 included",
    renewal: "Renews 18 May 2026",
  },
  {
    website: "acmeplumbing.co.uk",
    status: "Pending",
    statusClass: "bg-amber-50 text-amber-700",
    plan: "Site Care",
    price: "£39 / month",
    mailboxes: "Not added yet",
    renewal: "Starts when website goes live",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <ButtonLink href="/dashboard/chat">
            <Plus className="h-4 w-4" />
            New Plan
        </ButtonLink>
      </div>

      <div className="grid gap-5">
        {siteCarePlans.map((care) => (
          <Link
            key={care.website}
            href="/dashboard/services"
            className="group grid gap-6 rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-[var(--primary)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-8 lg:grid-cols-[1fr_520px_130px] lg:items-center"
          >
            <div>
              <span
                className={`inline-flex rounded-full px-4 py-2 text-sm font-bold ${care.statusClass}`}
              >
                {care.status}
              </span>

              <h1 className="mt-5 text-2xl font-black text-[var(--heading)]">
                Site Care
              </h1>

              <p className="mt-2 text-base leading-7 text-[var(--muted-foreground)]">
                Managed website hosting, support, updates, security and uptime care.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Meta icon={Globe2} label="Website" value={care.website} />
              <Meta icon={ShieldCheck} label="Plan" value={care.plan} />
              <Meta icon={Mail} label="Mailboxes" value={care.mailboxes} />
              <Meta icon={CalendarDays} label="Renewal" value={care.renewal} />
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-[var(--primary)] lg:justify-end">
              View Site Care
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
  icon: typeof CheckCircle2;
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