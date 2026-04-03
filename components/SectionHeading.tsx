interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true, light = true }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold mb-3 ${
          light ? "text-cream" : "text-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-cream/60" : "text-dark/60"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 mb-8 flex ${centered ? "justify-center" : ""}`}>
        <div className="w-16 h-1 bg-gold rounded-full" />
      </div>
    </div>
  );
}
