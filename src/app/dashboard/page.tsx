import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CreditCard,
  FileText,
  FolderKanban,
  Globe2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ButtonLink } from "@/components/ui/button";

const cards = [
  {
    title: "Projects",
    description: "Track website builds, progress and milestones.",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Websites",
    description: "View websites hosted or managed by ToffeeStack.",
    href: "/dashboard/websites",
    icon: Globe2,
  },
  {
    title: "Quotes",
    description: "Review quote requests, sent quotes and approvals.",
    href: "/dashboard/quotes",
    icon: FileText,
  },
  {
    title: "Payments",
    description: "See outstanding and completed payments.",
    href: "/dashboard/payments",
    icon: CreditCard,
  },
  {
    title: "Services",
    description: "Manage active services and Site Care plans.",
    href: "/dashboard/services",
    icon: BriefcaseBusiness,
  },
  {
    title: "Messages",
    description: "Continue your chat with the ToffeeStack team.",
    href: "/dashboard/chat",
    icon: MessageCircle,
  },
];

const updates = [
  "Your portal is ready to use.",
  "Project updates will appear here.",
  "Quotes and payment requests will be linked to projects.",
  "Website status updates will show here when your project moves forward.",
  "Messages from the ToffeeStack team will appear in this feed.",
];

export default async function DashboardPage() {
  const session = await auth();

  const user = session?.user?.email
    ? await prisma.user.findUnique({
        where: { email: session.user.email },
        include: { customerProfile: true },
      })
    : null;

  const firstName = user?.name?.split(" ")[0] || "there";

  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
          <h2 className="text-2xl font-black text-[var(--heading)]">
            Latest Updates
          </h2>

          <div className="dashboard-scroll mt-6 max-h-[204px] overflow-y-auto pr-3">
            {updates.map((item, index) => (
              <div
                key={item}
                className={`py-4 text-base leading-7 text-[var(--muted-foreground)] ${
                  index !== updates.length - 1
                    ? "border-b border-[#E8EDF7]"
                    : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#050816] p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(48,92,222,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(253,60,124,0.22),transparent_35%)]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />

          <div className="relative">
            <h2 className="text-2xl font-black">Quick Actions</h2>

            <div className="mt-6 space-y-3">
              <QuickAction href="/dashboard/quotes" label="Request a Quote" />
              <QuickAction href="/dashboard/chat" label="Send a Message" />
              <QuickAction href="/dashboard/payments" label="View Payments" />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className="group flex min-h-[260px] flex-col rounded-[2rem] border border-[#E8EDF7] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.1)]"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] transition group-hover:bg-[var(--secondary)]/10 group-hover:text-[var(--secondary)]">
                  <Icon className="h-5 w-5" />
                </div>

                <h2 className="mt-5 text-xl font-black text-[var(--heading)]">
                  {card.title}
                </h2>

                <p className="mt-2 text-base leading-7 text-[var(--muted-foreground)]">
                  {card.description}
                </p>
              </div>

              <div className="mt-auto pt-6">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[var(--primary)]">
                  View {card.title}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

function QuickAction({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-2xl bg-white/[0.08] p-4 text-sm font-bold text-white transition hover:bg-white/[0.12]"
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}