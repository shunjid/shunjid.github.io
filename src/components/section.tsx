import React from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-ink/10 grid gap-x-12 gap-y-8 border-t py-16 sm:py-24 lg:grid-cols-[16rem_1fr] print:py-6"
    >
      <h2
        id={`${id}-title`}
        className="text-ink text-3xl leading-none font-bold tracking-[-0.04em] sm:text-4xl"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
