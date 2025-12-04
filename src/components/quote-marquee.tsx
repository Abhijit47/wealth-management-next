import { Marquee } from '@devnomic/marquee';

export default function QuoteMarquee({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Marquee fade={true} pauseOnHover={true} numberOfCopies={10}>
      {children}
    </Marquee>
  );
}
