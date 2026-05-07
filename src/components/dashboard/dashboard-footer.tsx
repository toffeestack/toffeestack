import Link from "next/link";

export function DashboardFooter() {
  return (
    <footer className="mt-8 pt-8">
      <div className="flex flex-col gap-4 py-6 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 ToffeeStack. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <Link
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--heading)]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--heading)]"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}