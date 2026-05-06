import Link from "next/link";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent text-sm font-bold whitespace-nowrap outline-none transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--primary)] text-white before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[var(--secondary)] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        secondary:
          "bg-[#F5F7FA] text-[var(--heading)] before:absolute before:inset-0 before:origin-left before:scale-x-0 before:bg-[#E5E7EB] before:transition-transform before:duration-300 before:ease-out hover:before:scale-x-100",
        outline:
          "border-[var(--border)] bg-white text-[var(--heading)] hover:bg-[var(--muted)]",
        ghost:
          "bg-transparent text-[var(--heading)] hover:bg-[var(--muted)]",
        destructive:
          "bg-red-50 text-red-600 hover:bg-red-100",
        link:
          "rounded-none bg-transparent p-0 text-[var(--primary)] hover:underline",
      },
      size: {
        default: "px-6 py-3.5",
        sm: "px-5 py-3 text-sm",
        lg: "px-7 py-4 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
    children: ReactNode;
  };

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </ButtonPrimitive>
  );
}

function ButtonLink({
  className,
  variant = "default",
  size = "default",
  children,
  href,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Link>
  );
}

export { Button, ButtonLink, buttonVariants };