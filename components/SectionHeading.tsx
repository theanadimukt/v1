interface SectionHeadingProps {
  num: string;
  title: string;
}

export default function SectionHeading({ num, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-3 mb-14">
      <span
        className="font-mono text-sm shrink-0"
        style={{ color: "var(--accent)" }}
      >
        {num}.
      </span>
      <h2
        className="text-2xl font-semibold tracking-tight shrink-0"
        style={{
          fontFamily: "var(--font-fraunces)",
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
      <div
        className="flex-1 h-px ml-2"
        style={{ backgroundColor: "var(--border)", minWidth: "20px" }}
      />
    </div>
  );
}
