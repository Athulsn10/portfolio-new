interface TagListProps {
  tags: string[];
  className?: string;
  itemClassName?: string;
}

export default function TagList({
  tags,
  className = "work-tags",
  itemClassName = "tag",
}: TagListProps) {
  return (
    <div className={className}>
      {tags.map((tag) => (
        <span key={tag} className={itemClassName}>
          {tag}
        </span>
      ))}
    </div>
  );
}
