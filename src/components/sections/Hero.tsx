import { site } from "../../data";
import ButtonLink from "../ui/ButtonLink";

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero-top">
        <p className="label" data-fade>
          {site.role} · {site.location}
        </p>
        <span className="chip" data-fade>
          <i className="pulse" aria-hidden="true" /> {site.availability}
        </span>
      </div>

      <div className="hero-grid">
        <div>
          <h1 className="hero-name">
            <span className="mask">
              <span data-split>{site.shortName}</span>
            </span>
            <span className="mask">
              <span data-split className="outline">
                S Nair
              </span>
            </span>
          </h1>

          <p className="hero-lead">
            {site.hero.leadBefore}
            <b>{site.hero.leadEmphasis}</b>
            {site.hero.leadAfter}
          </p>

          <div className="hero-cta">
            <ButtonLink href={site.hero.primaryCta.href} variant="flame">
              {site.hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink href={site.hero.secondaryCta.href}>
              {site.hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <figure className="hero-photo" data-reveal>
          <img
            src={site.portrait.src}
            alt={site.portrait.alt}
            width={640}
            height={800}
          />
          <figcaption>
            <span>{site.name}</span>
            <span>{site.portrait.captionYear}</span>
          </figcaption>
        </figure>
      </div>

      <div className="hero-foot">
        <p className="label scroll-cue">
          <span>{site.hero.scrollCue}</span>
          <span id="cue-arrow">↓</span>
        </p>
        <p className="label">{site.hero.footNote}</p>
      </div>
    </section>
  );
}
