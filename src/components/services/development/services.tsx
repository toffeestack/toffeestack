"use client";

import { useState } from "react";
import {
  CalendarDays,
  LayoutDashboard,
  LockKeyhole,
  MessageSquare,
  MonitorSmartphone,
  ShoppingBasket,
  Store,
  UtensilsCrossed,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const tabs = [
  {
    title: "E-Commerce",
    text: "Online stores built to sell products, manage orders and make it simple for customers to buy from you.",
    icon: ShoppingBasket,
    points: [
      "Product pages",
      "Basket and checkout",
      "Payment setup",
      "Order enquiries",
      "WooCommerce or Shopify",
      "Custom store features",
    ],
  },
  {
    title: "Booking Systems",
    text: "Custom booking flows for appointments, consultations, services, events or availability-based enquiries.",
    icon: CalendarDays,
    points: [
      "Date and time selection",
      "Availability rules",
      "Booking forms",
      "Email notifications",
      "Customer details",
      "Admin management",
    ],
  },
  {
    title: "Food Ordering",
    text: "Food ordering systems for takeaways, restaurants, cafés or local food businesses that need online orders.",
    icon: UtensilsCrossed,
    points: [
      "Menu pages",
      "Item options",
      "Collection or delivery",
      "Order notifications",
      "Customer details",
      "Payment options",
    ],
  },
  {
    title: "Client Portals",
    text: "Private login areas where customers can view updates, files, screenshots, messages or project information.",
    icon: LockKeyhole,
    points: [
      "Customer logins",
      "Project updates",
      "Secure files",
      "Message areas",
      "Account pages",
      "Private dashboards",
    ],
  },
  {
    title: "Dashboards",
    text: "Admin panels and dashboards that help you manage customers, projects, orders, enquiries or business data.",
    icon: LayoutDashboard,
    points: [
      "Admin areas",
      "Customer records",
      "Status tracking",
      "Project views",
      "Reports",
      "Internal tools",
    ],
  },
  {
    title: "Business Tools",
    text: "Custom tools built around the way your business works, helping reduce manual admin and repeated tasks.",
    icon: MonitorSmartphone,
    points: [
      "Quote tools",
      "Enquiry systems",
      "Custom calculators",
      "Staff workflows",
      "Automated emails",
      "API-powered panels",
    ],
  },
  {
    title: "Marketplace Features",
    text: "Features for websites that need listings, sellers, service providers, directories or searchable content.",
    icon: Store,
    points: [
      "Listings",
      "Search filters",
      "User submissions",
      "Profiles",
      "Categories",
      "Approval flows",
    ],
  },
  {
    title: "Messaging Systems",
    text: "Communication systems for support, customer updates, project messages or internal conversations.",
    icon: MessageSquare,
    points: [
      "Project chat",
      "Support messages",
      "Notifications",
      "Customer replies",
      "File sharing",
      "Message history",
    ],
  },
];

export function DevelopmentServices() {
  const [active, setActive] = useState(0);
  const selected = tabs[active];
  const Icon = selected.icon;

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--primary)]">
              What We Build
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
              Custom development for real business needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
              From online stores and booking systems to client portals,
              dashboards and food ordering platforms, we build custom features
              around the way your business works.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-[#E8EDF7] bg-[#F8FAFD] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:p-5">
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab, index) => (
                <button
                  key={tab.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`cursor-pointer rounded-full px-5 py-3 text-sm transition ${
                    active === index
                      ? "bg-[var(--primary)] text-white"
                      : "bg-white text-[var(--heading)] hover:bg-[#EEF3FF]"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-[2rem] bg-white p-7">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-black text-[var(--heading)]">
                {selected.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
                {selected.text}
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {selected.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl bg-[#F8FAFD] px-5 py-4 text-sm text-[var(--muted-foreground)]"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}