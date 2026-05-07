import { Download, Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const messages = [
  {
    sender: "Adam Taylor",
    role: "Customer",
    date: "22nd of June at 8:48am",
    message: `
Hi,

I need help to process the payment via my VISA card.

It keeps returning failed payments after the checkout. I need to land out this campaign within today, can you please help ASAP.

Thanks
    `,
    attachments: [
      {
        name: "invoice.pdf",
        size: "29 KB",
      },
      {
        name: "receipt.png",
        size: "90 KB",
      },
    ],
  },
  {
    sender: "ToffeeStack Support",
    role: "Staff",
    date: "22nd of June at 9:02am",
    message: `
Hi Adam,

Thanks for sending this over.

We can see the failed transaction attempt. This usually happens when 3D Secure verification is blocked by the bank.

Please try again using an incognito browser window or another card. If it still fails, we can send you a direct payment link manually.

Thanks
    `,
  },
  {
    sender: "Adam Taylor",
    role: "Customer",
    date: "22nd of June at 9:11am",
    message: `
Using incognito worked perfectly.

Payment has now gone through successfully.
    `,
  },
];

export default function ChatPage() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#E8EDF7] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="dashboard-scroll max-h-[calc(100vh-290px)] overflow-y-auto p-6 sm:p-8">
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className="rounded-[1.8rem] border border-[#E8EDF7] bg-[#FCFDFE] p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-black ${
                    message.role === "Staff"
                      ? "bg-[var(--secondary)]/10 text-[var(--secondary)]"
                      : "bg-[var(--primary)]/10 text-[var(--primary)]"
                  }`}
                >
                  {message.sender
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1">
                    <h2
                      className={`text-lg font-black ${
                        message.role === "Staff"
                          ? "text-[var(--secondary)]"
                          : "text-[var(--heading)]"
                      }`}
                    >
                      {message.sender}
                    </h2>

                    <p className="text-sm text-[var(--muted-foreground)]">
                      {message.date}
                    </p>
                  </div>

                  <div className="mt-5 whitespace-pre-line text-base leading-8 text-[var(--muted-foreground)]">
                    {message.message}
                  </div>

                  {message.attachments && (
                    <div className="mt-6">
                      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[var(--heading)]">
                        <Paperclip className="h-4 w-4" />
                        {message.attachments.length} Attachments
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        {message.attachments.map((attachment) => (
                          <button
                            key={attachment.name}
                            className="flex cursor-pointer items-center justify-between rounded-2xl border border-[#E8EDF7] bg-white p-4 text-left transition hover:border-[var(--primary)]"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                                PDF
                              </div>

                              <div>
                                <p className="text-sm font-bold text-[var(--heading)]">
                                  {attachment.name}
                                </p>

                                <p className="text-sm text-[var(--muted-foreground)]">
                                  {attachment.size}
                                </p>
                              </div>
                            </div>

                            <Download className="h-5 w-5 text-[var(--primary)]" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="border-t border-[#E8EDF7] bg-white p-4 sm:p-5">
        <div className="flex items-end gap-3 rounded-[1.6rem] border border-[#E8EDF7] bg-[#F8FAFD] p-3 transition focus-within:border-[var(--primary)]">
          <button
            type="button"
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl bg-white text-[#596073] transition hover:text-[var(--primary)]"
          >
            <Paperclip className="h-5 w-5" />
          </button>

          <textarea
            rows={1}
            placeholder="Write a reply..."
            className="min-h-12 flex-1 resize-none bg-transparent px-2 py-3 text-base leading-6 text-[var(--heading)] outline-none placeholder:text-[#8A93A6]"
          />

          <Button type="submit" className="h-12 px-5">
            Send
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}