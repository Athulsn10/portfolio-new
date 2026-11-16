interface SectionHeaderProps {
  title: string;
  index: string;
}

export default function SectionHeader({ title, index }: SectionHeaderProps) {
  return (
    <div className="sec-head" data-fade>
      <h2>{title}</h2>
      <span className="label" aria-hidden="true">
        {index}
      </span>
    </div>
  );
}
