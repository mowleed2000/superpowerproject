interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-bold uppercase tracking-widest ${
            dark ? 'text-softblue' : 'text-cobalt'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          } ${dark ? 'text-gray-300' : 'text-body-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
