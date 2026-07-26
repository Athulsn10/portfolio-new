import { skillGroups } from "../../data";
import SectionHeader from "../ui/SectionHeader";
import TagList from "../ui/TagList";

export default function ToolkitSection() {
  return (
    <section className="shell" id="skills">
      <SectionHeader title="Toolkit" index="04 / 05" />

      {skillGroups.map((group) => (
        <div key={group.id} className="skill-group" data-fade>
          <p className="label label--flame">{group.label}</p>
          <TagList
            tags={group.items}
            className="chips"
            itemClassName="chip-sk"
          />
        </div>
      ))}
    </section>
  );
}
