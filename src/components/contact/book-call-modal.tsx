"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const times = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
];

const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function formatDateValue(date: Date) {
  return date.toISOString().split("T")[0];
}

function formatDateLabel(value: string) {
  if (!value) return "Choose a weekday";
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isWeekend(date: Date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isPastDate(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const checkDate = new Date(date);
  checkDate.setHours(0, 0, 0, 0);

  return checkDate < today;
}

export function BookCallModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => new Date());

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    company: "",
    phone: "",
    message: "",
  });

  const calendarDays = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    const firstWeekday = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (Date | null)[] = [];

    for (let i = 0; i < firstWeekday; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }, [visibleMonth]);

  const monthLabel = visibleMonth.toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const closeModal = () => {
    setOpen(false);
    setStep(1);
    setCalendarOpen(false);
  };

  const canGoNext = formData.date && formData.time;

  const canSubmit =
    formData.date &&
    formData.time &&
    formData.name &&
    formData.phone &&
    formData.message;

  const emailBody = encodeURIComponent(
    `Preferred date: ${formData.date}
Preferred time: ${formData.time}

Name: ${formData.name}
Company name: ${formData.company}
Contact number: ${formData.phone}

What the call is about:
${formData.message}

Note: We understand ToffeeStack will contact us as close to the selected time as possible.`
  );

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[#F5F7FA] px-7 py-4 text-sm font-bold text-[var(--heading)]"
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-[#E5E7EB] transition-transform duration-300 ease-out group-hover:scale-x-100" />
        <span className="relative z-10 flex items-center gap-2">
          Book A Call
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-5 backdrop-blur-sm">
          <div className="relative flex min-h-[720px] w-full max-w-2xl flex-col rounded-[2rem] bg-white p-5 shadow-[0_30px_90px_rgba(15,23,42,0.25)] sm:p-6">
            <button
              onClick={closeModal}
              className="absolute right-5 top-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl bg-[#F5F7FA] text-[var(--heading)]"
              aria-label="Close booking modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF3FF] text-[var(--secondary)]">
              <CalendarDays className="h-6 w-6" />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--primary)]">
              Step {step} Of 2
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-[var(--heading)]">
              {step === 1 ? "Pick A Time" : "Your Details"}
            </h2>

            <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
              {step === 1
                ? "Choose a preferred weekday and time between 9am and 5pm."
                : "Tell us who to contact and what you would like to discuss."}
            </p>

            {step === 1 && (
              <div className="mt-5 flex flex-1 flex-col">
                <div className="grid gap-4">
                  <div className="relative">
                    <p className="text-sm font-bold text-[var(--heading)]">
                      Preferred Date
                    </p>

                    <button
                      type="button"
                      onClick={() => setCalendarOpen((current) => !current)}
                      className="mt-2 flex w-full cursor-pointer items-center justify-between rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] px-4 py-4 text-left text-sm font-bold text-[var(--heading)] outline-none transition hover:border-[var(--primary)]"
                    >
                      <span>{formatDateLabel(formData.date)}</span>
                      <CalendarDays className="h-5 w-5 text-[var(--primary)]" />
                    </button>

                    {calendarOpen && (
                      <div className="absolute left-0 right-0 top-[86px] z-20 rounded-[2rem] border border-[#E8EDF7] bg-white p-4 shadow-[0_20px_70px_rgba(15,23,42,0.14)]">
                        <div className="flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() =>
                              setVisibleMonth(
                                new Date(
                                  visibleMonth.getFullYear(),
                                  visibleMonth.getMonth() - 1,
                                  1
                                )
                              )
                            }
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F8FAFD] text-[var(--heading)] transition hover:bg-[#EEF3FF]"
                            aria-label="Previous month"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>

                          <p className="text-sm font-black text-[var(--heading)]">
                            {monthLabel}
                          </p>

                          <button
                            type="button"
                            onClick={() =>
                              setVisibleMonth(
                                new Date(
                                  visibleMonth.getFullYear(),
                                  visibleMonth.getMonth() + 1,
                                  1
                                )
                              )
                            }
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-[#F8FAFD] text-[var(--heading)] transition hover:bg-[#EEF3FF]"
                            aria-label="Next month"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>

                        <div className="mt-4 grid grid-cols-7 gap-2">
                          {weekdays.map((day) => (
                            <div
                              key={day}
                              className="text-center text-xs font-black text-[var(--muted-foreground)]"
                            >
                              {day}
                            </div>
                          ))}

                          {calendarDays.map((date, index) => {
                            if (!date) {
                              return <div key={`empty-${index}`} />;
                            }

                            const value = formatDateValue(date);
                            const disabled = isWeekend(date) || isPastDate(date);
                            const selected = formData.date === value;

                            return (
                              <button
                                key={value}
                                type="button"
                                disabled={disabled}
                                onClick={() => {
                                  updateField("date", value);
                                  setCalendarOpen(false);
                                }}
                                className={`flex h-10 items-center justify-center rounded-xl text-sm font-bold transition ${
                                  selected
                                    ? "bg-[var(--primary)] text-white"
                                    : disabled
                                      ? "cursor-not-allowed bg-[#F8FAFD] text-slate-300"
                                      : "cursor-pointer bg-[#F8FAFD] text-[var(--heading)] hover:bg-[#EEF3FF] hover:text-[var(--primary)]"
                                }`}
                              >
                                {date.getDate()}
                              </button>
                            );
                          })}
                        </div>

                        <p className="mt-4 text-xs font-bold leading-5 text-[var(--muted-foreground)]">
                          Calls are available Monday to Friday only.
                        </p>
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[var(--heading)]">
                      Preferred Time
                    </p>

                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {times.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => updateField("time", slot)}
                          className={`cursor-pointer rounded-2xl px-3 py-2.5 text-sm font-bold transition ${
                            formData.time === slot
                              ? "bg-[var(--primary)] text-white"
                              : "bg-[#F8FAFD] text-[var(--heading)] hover:bg-[#EEF3FF]"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] p-4 text-sm leading-6 text-[var(--muted-foreground)]">
                    Calls are available Monday to Friday in half-hour slots
                    between 9am and 5pm. We will contact you as close to your
                    selected time as possible.
                  </div>
                </div>

                <div className="mt-auto flex justify-end pt-5">
                  <button
                    type="button"
                    disabled={!canGoNext}
                    onClick={() => setStep(2)}
                    className={`inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition ${
                      canGoNext
                        ? "cursor-pointer bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                        : "cursor-not-allowed bg-gray-200 text-gray-500"
                    }`}
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-5 flex flex-1 flex-col">
                <div className="grid gap-4">
                  <div>
                    <label className="mb-2 block text-sm font-bold text-[var(--heading)]">
                      Your Name
                    </label>

                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      className="w-full rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] px-5 py-4 text-[var(--heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[var(--heading)]">
                      Company Name
                    </label>

                    <input
                      type="text"
                      value={formData.company}
                      onChange={(event) =>
                        updateField("company", event.target.value)
                      }
                      className="w-full rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] px-5 py-4 text-[var(--heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[var(--heading)]">
                      Contact Number
                    </label>

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(event) =>
                        updateField("phone", event.target.value)
                      }
                      className="w-full rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] px-5 py-4 text-[var(--heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
                      placeholder="Best number to contact you on"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold text-[var(--heading)]">
                      What Is The Call About?
                    </label>

                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(event) =>
                        updateField("message", event.target.value)
                      }
                      className="w-full resize-none rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] px-5 py-3 text-[var(--heading)] outline-none transition placeholder:text-slate-400 focus:border-[var(--primary)]"
                      placeholder="Tell us a bit about your website, support needs or project idea..."
                    />
                  </div>

                  <div className="rounded-2xl border border-[#E8EDF7] bg-[#F8FAFD] p-4 text-sm leading-6 text-[var(--muted-foreground)]">
                    Selected call time:{" "}
                    <strong className="text-[var(--heading)]">
                      {formatDateLabel(formData.date)} at {formData.time}
                    </strong>
                    . We will contact you as close to this time as possible.
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-5 sm:flex-row sm:justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-[#E8EDF7] px-7 py-4 text-sm font-bold text-[var(--heading)] transition hover:bg-[#F8FAFD]"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  <a
                    href={`mailto:hello@toffeestack.com?subject=Book a call request&body=${emailBody}`}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold transition ${
                      canSubmit
                        ? "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                        : "pointer-events-none bg-gray-200 text-gray-500"
                    }`}
                  >
                    Request Call
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}