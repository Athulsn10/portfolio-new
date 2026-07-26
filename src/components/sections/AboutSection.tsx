import { site } from "../../data";
import SectionHeader from "../ui/SectionHeader";

function emphasizeMern(text: string) {
  const marker = "MERN stack";
  const index = text.indexOf(marker);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <em>{marker}</em>
      {text.slice(index + marker.length)}
    </>
  );
}

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
              {emphasizeMern(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
