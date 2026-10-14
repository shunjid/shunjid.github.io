import { RichText } from "@/data/types";

export function RichTextBlock({ parts }: { parts: RichText[] }) {
  const inline = parts.filter((part) => !("quote" in part));
  const quotes = parts.filter((part) => "quote" in part);

  return (
    <>
      <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
        {inline.map((part, index) =>
          "href" in part && part.href ? (
            <a
              key={index}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink decoration-accent/40 hover:text-accent hover:decoration-accent font-medium underline underline-offset-4 transition-colors"
            >
              {part.text}
            </a>
          ) : (
            <span key={index}>{"text" in part ? part.text : null}</span>
          ),
        )}
      </p>
      {quotes.map((part, index) =>
        "quote" in part ? (
          <blockquote
            key={index}
            className="border-ink/15 text-ink/85 mt-3 border-l pl-4 text-sm leading-relaxed text-pretty italic"
          >
            &ldquo;{part.quote}&rdquo;
          </blockquote>
        ) : null,
      )}
    </>
  );
}
