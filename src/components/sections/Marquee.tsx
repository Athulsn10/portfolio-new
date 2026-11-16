import { brandLogos, site } from "../../data";
import BrandLogo from "../ui/BrandLogo";

export default function Marquee() {
  // Duplicated so the -50% loop wraps seamlessly.
  const items = [...site.marquee, ...site.marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="marquee">
        {items.map((id, index) => (
          <span className="marquee-item" key={`${id}-${index}`}>
            {brandLogos[id].path ? <BrandLogo id={id} /> : null}
            <span className="marquee-label">{brandLogos[id].title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
