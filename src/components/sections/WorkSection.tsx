import {
  archivedProjects,
  featuredProjects,
  site,
} from "../../data";
import ButtonLink from "../ui/ButtonLink";
import SectionHeader from "../ui/SectionHeader";
import TagList from "../ui/TagList";

export default function WorkSection() {
  const archivedLabel = archivedProjects.map((project) => project.name).join(" · ");

  return (
    <section className="shell" id="work">
      <SectionHeader title="Selected work" index="02 / 05" />

      <div className="work-list">
        {featuredProjects.map((project, index) => (
          <a
            key={project.id}
            className="work-row"
            data-row
            data-img={project.screenshot}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="work-idx">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="work-name">{project.name}</h3>
              <p className="work-desc">{project.description}</p>
              {project.outcome ? (
                <p className="work-desc">{project.outcome}</p>
              ) : null}
            </div>
            <TagList tags={project.techStack} />
            <span className="work-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </div>

      <div className="work-foot">
        {archivedProjects.length > 0 ? (
          <p className="label">{archivedLabel} — archived</p>
        ) : (
          <span />
        )}
        <ButtonLink href={site.githubProfile} external>
          All repos on GitHub
        </ButtonLink>
      </div>

      <div className="work-preview" id="work-preview" aria-hidden="true">
        <img alt="" id="work-preview-img" />
      </div>
    </section>
  );
}
