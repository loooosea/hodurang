export default function PixelDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full py-4 ${className}`}>
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 bg-warm-400"
            style={{ opacity: i % 3 === 0 ? 1 : 0.4 }}
          />
        ))}
      </div>
    </div>
  );
}
