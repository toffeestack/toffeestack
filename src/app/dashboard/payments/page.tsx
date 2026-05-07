import {
  CalendarDays,
  CreditCard,
  Filter,
  Globe2,
  Layers3,
} from "lucide-react";

const payments = [
  {
    date: "07 May 2026",
    domain: "toffeestack.com",
    type: "Web Design",
    title: "Website refresh deposit",
    amount: "£600",
    status: "Paid",
    statusClass: "bg-green-50 text-green-700",
  },
  {
    date: "02 May 2026",
    domain: "acmeplumbing.co.uk",
    type: "Development",
    title: "Custom quote form build",
    amount: "£350",
    status: "Outstanding",
    statusClass: "bg-amber-50 text-amber-700",
  },
  {
    date: "18 Apr 2026",
    domain: "greenoakstudio.co.uk",
    type: "Site Care",
    title: "Monthly Site Care plan",
    amount: "£39",
    status: "Paid",
    statusClass: "bg-green-50 text-green-700",
  },
  {
    date: "12 Apr 2026",
    domain: "brightdental.co.uk",
    type: "Integration",
    title: "CRM form integration",
    amount: "£180",
    status: "Overdue",
    statusClass: "bg-red-50 text-red-700",
  },
];

const filters = ["All", "Web Design", "Site Care", "Development", "Integration"];

export default function PaymentsPage() {
  return (
    <div className="space-y-5">
      <div className="rounded-[2rem] border border-[#E8EDF7] bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-center">
          <div className="group relative">
            <label className="absolute left-4 top-[-10px] z-10 bg-white px-2 text-[13px] font-bold text-[#596073] transition-colors group-focus-within:text-[var(--secondary)]">
              Date
            </label>
            <input
              type="date"
              className="h-14 w-full rounded-2xl border border-[#E8EDF7] bg-white px-5 text-sm outline-none transition focus:border-[var(--primary)]"
            />
          </div>

          <div className="group relative">
            <label className="absolute left-4 top-[-10px] z-10 bg-white px-2 text-[13px] font-bold text-[#596073] transition-colors group-focus-within:text-[var(--secondary)]">
              Domain
            </label>
            <select className="h-14 w-full rounded-2xl border border-[#E8EDF7] bg-white px-5 text-sm outline-none transition focus:border-[var(--primary)]">
              <option>All domains</option>
              <option>toffeestack.com</option>
              <option>acmeplumbing.co.uk</option>
              <option>greenoakstudio.co.uk</option>
              <option>brightdental.co.uk</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className="h-11 cursor-pointer rounded-full border border-[#E8EDF7] bg-white px-4 text-sm font-bold text-[#596073] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[#E8EDF7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
        <div className="hidden grid-cols-[1.1fr_1fr_1fr_1.4fr_0.8fr_0.8fr] border-b border-[#E8EDF7] bg-[#F8FAFD] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-[#596073] lg:grid">
          <div>Date</div>
          <div>Domain</div>
          <div>Type</div>
          <div>Payment For</div>
          <div>Amount</div>
          <div>Status</div>
        </div>

        <div>
          {payments.map((payment, index) => (
            <div
              key={`${payment.title}-${payment.date}`}
              className={`grid gap-4 px-6 py-5 transition hover:bg-[#F8FAFD] lg:grid-cols-[1.1fr_1fr_1fr_1.4fr_0.8fr_0.8fr] lg:items-center ${
                index !== payments.length - 1 ? "border-b border-[#E8EDF7]" : ""
              }`}
            >
              <TableCell icon={CalendarDays} label="Date" value={payment.date} />
              <TableCell icon={Globe2} label="Domain" value={payment.domain} />
              <TableCell icon={Layers3} label="Type" value={payment.type} />
              <TableCell icon={Filter} label="Payment For" value={payment.title} />

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#596073] lg:hidden">
                  Amount
                </p>
                <p className="mt-1 text-sm font-black text-[var(--heading)] lg:mt-0">
                  {payment.amount}
                </p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#596073] lg:hidden">
                  Status
                </p>
                <span
                  className={`mt-2 inline-flex rounded-full px-4 py-2 text-sm font-bold lg:mt-0 ${payment.statusClass}`}
                >
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TableCell({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CreditCard;
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#596073] lg:hidden">
        {label}
      </p>
      <div className="mt-1 flex items-center gap-2 text-sm font-bold text-[var(--heading)] lg:mt-0">
        <Icon className="h-4 w-4 text-[var(--primary)] lg:hidden" />
        {value}
      </div>
    </div>
  );
}