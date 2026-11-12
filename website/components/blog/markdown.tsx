import Link from "next/link";
import type { ReactNode } from "react";

// Renders the small Markdown subset described in content/blog/README.md.

function inline(text: string, keyPrefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyPrefix}-${i++}`;
    if (m[1]) {
      const href = m[2];
      const cls = "font-semibold text-forest underline underline-offset-4 hover:text-forest-dark";
      out.push(
        href.startsWith("/") ? (
          <Link key={key} href={href} className={cls}>{m[1]}</Link>
        ) : (
          <a key={key} href={href} className={cls} rel="noopener noreferrer" target="_blank">{m[1]}</a>
        ),
      );
    } else if (m[3]) out.push(<strong key={key} className="font-semibold text-ink">{m[3]}</strong>);
    else if (m[4]) out.push(<em key={key}>{m[4]}</em>);
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);
  return (
    <>
      {blocks.map((block, bi) => {
        const key = `b${bi}`;
        const lines = block.split("\n").map((l) => l.trim());
        if (block.startsWith("### ")) {
          return <h3 key={key} className="mt-10 text-2xl font-semibold text-ink">{inline(block.slice(4), key)}</h3>;
        }
        if (block.startsWith("## ")) {
          return <h2 key={key} className="mt-14 font-display text-[28px] font-medium leading-tight text-ink md:text-[34px]">{inline(block.slice(3), key)}</h2>;
        }
        if (lines.every((l) => /^[-*] /.test(l))) {
          return (
            <ul key={key} className="mt-5 list-disc space-y-2 pl-6">
              {lines.map((l, li) => <li key={li}>{inline(l.slice(2), `${key}-${li}`)}</li>)}
            </ul>
          );
        }
        if (lines.every((l) => /^\d+\. /.test(l))) {
          return (
            <ol key={key} className="mt-5 list-decimal space-y-2 pl-6">
              {lines.map((l, li) => <li key={li}>{inline(l.replace(/^\d+\. /, ""), `${key}-${li}`)}</li>)}
            </ol>
          );
        }
        if (block.startsWith("> ")) {
          return (
            <blockquote key={key} className="mt-6 rounded-xl border-l-4 border-forest bg-forest-subtle px-5 py-4 text-ink">
              {inline(lines.map((l) => l.replace(/^>\s?/, "")).join(" "), key)}
            </blockquote>
          );
        }
        return <p key={key} className="mt-5">{inline(lines.join(" "), key)}</p>;
      })}
    </>
  );
}
