interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <li className="flex items-start gap-[var(--spacing-sm)]">
      <span className="material-symbols-outlined text-primary text-2xl mt-0.5 shrink-0">
        {icon}
      </span>
      <div>
        <h4 className="font-[var(--font-body)] text-sm font-semibold tracking-[0.05em] text-on-surface text-lg">
          {title}
        </h4>
        <p className="font-[var(--font-body)] text-sm text-on-surface-variant">
          {description}
        </p>
      </div>
    </li>
  );
}
