import { experience, formatTenure } from "../../data";
import SectionHeader from "../ui/SectionHeader";

function roleDateLabel(role: (typeof experience)[number]): string {
  const base = `${role.startLabel} — ${role.endLabel}`;

  if (role.end === "present") {
    return `${base} · ${formatTenure(role.start.month, role.start.year)}`;
  }

  if (role.durationLabel) {
    return `${base} · ${role.durationLabel}`;
  }

  return base;
}

export default function ExperienceSection() {
  return (
    <section className="shell" id="experience">
      <SectionHeader title="Experience" index="03 / 05" />

      <div className="timeline">
        <div className="timeline-line" id="tl-line" aria-hidden="true">
          <span id="tl-fill" />
        </div>

        {experience.map((role) => (
          <article key={role.id} className="job" data-job>
            <div>
              <h3>{role.title}</h3>
              <p className="org">
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {role.company}
                </a>{" "}
                · {role.employmentType}
              </p>
            </div>
            <div className="job-meta">
              <span
                className={
                  role.highlight ? "label label--flame" : "label"
                }
              >
                {roleDateLabel(role)}
              </span>
              <span className="label">{role.location}</span>
            </div>
            {role.bullets && role.bullets.length > 0 ? (
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
