export default function DotGridBackground({
  className = "",
  opacity = 0.3,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`absolute inset-0 dot-grid pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
