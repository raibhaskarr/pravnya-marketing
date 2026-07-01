type Props = {
  title?: string;
  lines: string[];
};

export function SpecificationBlock({ title, lines }: Props) {
  return (
    <div className="rounded-md border border-border bg-bg-inset p-5 font-mono text-sm leading-7 text-text-code md:p-6">
      {title ? <p className="mb-4 text-xs uppercase tracking-[0.08em] text-text-tertiary">{title}</p> : null}
      <pre className="whitespace-pre-wrap break-words">{lines.join("\n")}</pre>
    </div>
  );
}
