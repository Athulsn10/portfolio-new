import { site } from "../../data";
import ButtonLink from "../ui/ButtonLink";

export default function Header() {
  return (
    <header className="header" id="header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top">
          <i aria-hidden="true" /> {site.name}
        </a>
        <nav className="nav" aria-label="Sections">
          {site.navigation.map((item) => (
            <a key={item.id} href={item.href} data-nav={item.id}>
              {item.label}
            </a>
          ))}
        </nav>
        <ButtonLink
          href={site.resume.href}
          download={site.resume.downloadName}
          size="sm"
        >
          {site.resume.label}
        </ButtonLink>
      </div>
    </header>
  );
}
