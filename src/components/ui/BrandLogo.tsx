import { brandLogos, type BrandLogoId } from "../../data";

interface BrandLogoProps {
  id: BrandLogoId;
  /** Decorative by default; pass a label when the mark conveys meaning. */
  label?: string;
  className?: string;
}

export default function BrandLogo({ id, label, className }: BrandLogoProps) {
  const icon = brandLogos[id];

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      focusable="false"
    >
      {label ? <title>{label}</title> : null}
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}
