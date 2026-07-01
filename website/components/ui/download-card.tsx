type Props = {
  platform: string;
  details: string;
  href: string;
  badgeSrc: string;
  badgeAlt: string;
};

export function DownloadCard({ platform, details, href, badgeSrc, badgeAlt }: Props) {
  return (
    <article className="rounded-xl bg-dark-surface p-8 text-background shadow-l md:p-10">
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl" aria-hidden>
        {platform === "iOS" ? "" : "▶"}
      </div>
      <h2 className="font-display text-3xl text-background">{platform}</h2>
      <p className="mt-3 text-[#C8D4CC]">{details}</p>
      <div className="mt-8">
        <a href={href} className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dark-surface">
          <img src={badgeSrc} alt={badgeAlt} className="h-12 w-auto" />
        </a>
      </div>
      <div className="mt-8 hidden rounded-md border border-white/15 bg-white/5 p-4 text-center text-xs uppercase tracking-[0.08em] text-[#8FAF99] md:block">
        QR code placeholder
      </div>
    </article>
  );
}
