"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Code2,
  MonitorSmartphone,
  PlugZap,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { TextInput } from "@/components/ui/text-input";

const services = [
  {
    id: "website-design",
    title: "Website Design",
    description:
      "Professional business websites designed to help you look trusted online.",
    icon: MonitorSmartphone,
  },
  {
    id: "site-care",
    title: "Site Care",
    description:
      "Updates, support, security checks and ongoing website maintenance.",
    icon: ShieldCheck,
  },
  {
    id: "development",
    title: "Development",
    description:
      "Booking systems, dashboards, portals and custom business tools.",
    icon: Code2,
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "Connect platforms, automate tasks and reduce manual admin work.",
    icon: PlugZap,
  },
];

export function ServiceChoiceForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 lg:pb-24 lg:pt-14">
      <div className="absolute inset-0 -z-10 bg-[#F8FAFD]" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-bold">
          <Link
            href="/"
            className="text-[var(--muted-foreground)] transition hover:text-[var(--primary)]"
          >
            Home
          </Link>

          <span className="text-[var(--primary)]">/</span>

          <span className="text-[var(--heading)]">New Project</span>
        </div>

        <div className="mt-10 max-w-3xl">
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--heading)] sm:text-6xl lg:text-[4.3rem]">
            What are you looking to build?
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            Select the service that best matches your project. We’ll then ask a
            few simple questions to understand your business, goals and what
            you’re looking to build.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = selectedService === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-[2rem] border p-7 text-left transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-[var(--primary)] text-white shadow-[0_24px_80px_rgba(48,92,222,0.22)]"
                    : "border-[#E8EDF7] bg-[#F8FAFD] text-[var(--heading)] shadow-[0_12px_40px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:border-[#D8E2F2] hover:bg-white hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                }`}
              >
                {isActive && (
                  <>
                    <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]" />
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--secondary)]/30 blur-3xl" />
                  </>
                )}

                <div className="relative">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "bg-[#EEF3FF] text-[var(--secondary)]"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  <h2 className="mt-6 text-xl font-black leading-tight">
                    {service.title}
                  </h2>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      isActive
                        ? "text-white/80"
                        : "text-[var(--muted-foreground)]"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {selectedService && (
          <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-[#E8EDF7] bg-[#F8FAFD] px-6 py-10 shadow-[0_24px_80px_rgba(15,23,42,0.06)] sm:px-8 lg:px-12 lg:py-16">
            <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#305CDE_1px,transparent_1px),linear-gradient(to_bottom,#305CDE_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full bg-[var(--primary)]/10 blur-3xl" />
            <div className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-[var(--secondary)]/10 blur-3xl" />

            <div className="relative">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
                  Project Questions
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-[var(--heading)] sm:text-4xl lg:text-5xl">
                  Tell Us About Your Project.
                </h2>

                <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                  We’ll use this information to understand your business, what
                  you need and the best way ToffeeStack can help.
                </p>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <TextInput label="Full Name *" required />
                <TextInput label="Company Name *" required />
                <TextInput label="Email Address *" type="email" required />
                <TextInput label="Contact Number *" type="tel" required />

                <div className="md:col-span-2">
                  <TextInput label="Current Website" type="url" />
                </div>
              </div>

              <div className="mt-5">
                <TextInput
                  label="What Does Your Company Do? *"
                  rows={5}
                  textarea
                  required
                />
              </div>

              <div className="mt-5">
                <TextInput
                  label="What Are You Looking For? *"
                  rows={6}
                  textarea
                  required
                />
              </div>

              <div className="mt-10 flex justify-end">
                <Button type="button">
                  Submit Project Enquiry
                  <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}