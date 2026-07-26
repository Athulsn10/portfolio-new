import { site } from "../../data";
import ButtonLink from "../ui/ButtonLink";

export default function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="shell">
        <p className="label label--flame" data-fade>
          {site.contact.index}
        </p>
        <h2>
          <span className="mask">
            <span data-split>{site.contact.heading[0]}</span>
          </span>
          <span className="mask">
            <span data-split className="outline">
              {site.contact.heading[1]}
            </span>
          </span>
        </h2>

        <a className="mailto" href={`mailto:${site.contact.email}`}>
          {site.contact.email} <span aria-hidden="true">↗</span>
        </a>

        <div className="socials">
          {site.socials.map((social) => (
            <ButtonLink key={social.id} href={social.href} external>
              {social.label} ↗
            </ButtonLink>
          ))}
          <ButtonLink
            href={site.resume.href}
            download={site.resume.downloadName}
            variant="flame"
          >
            Download résumé ↓
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
