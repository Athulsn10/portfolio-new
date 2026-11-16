import { site } from "../../data";
import SectionHeader from "../ui/SectionHeader";

export default function AboutSection() {
  return (
    <section className="shell" id="about">
      <SectionHeader title="About" index={site.about.index} />

      <div className="about-grid">
        <aside className="about-aside">
          <p className="label label--flame" data-fade>
            {site.about.asideLabel}
          </p>
        </aside>

        <div className="about-body">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} data-lines>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
