import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "default" | "flame";
  size?: "md" | "sm";
  download?: string | boolean;
  external?: boolean;
  className?: string;
}

export default function ButtonLink({
  href,
  children,
  variant = "default",
  size = "md",
  download,
  external = false,
  className = "",
}: ButtonLinkProps) {
  const classes = [
    "btn",
    variant === "flame" ? "btn--flame" : "",
    size === "sm" ? "btn--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={classes}
      href={href}
      download={download}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
