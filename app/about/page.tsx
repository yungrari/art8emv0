const variants = {
  A: "font-reforma-sans leading-none uppercase text-6xl md:text-8xl p-4 md:p-16",
  B: "font-xhdd-compressed leading-none uppercase text-3xl md:text-4xl p-4 md:p-16",
};

export default async function About({
  searchParams,
}: {
  searchParams: Promise<{ variant: keyof typeof variants }>;
}) {
  const { variant } = await searchParams;
  const className = variants[variant] || variants.A;

  return (
    <article className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
      <p className={className}>
        Art.8m is a professional video creator and content manager specializing
        in unique, bold, and creative visual content for social media. With a
        focus on innovative design, Art.8m tailors solutions to elevate your
        brand presence and storytelling.
      </p>
    </article>
  );
}
