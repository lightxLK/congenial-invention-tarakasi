import { Reveal, SectionHead, SourceNote } from '../components/Shared';
import { TIMELINE } from '../content';

function Node({ kind }) {
  const pos = 'absolute top-1.5 -left-[calc(2.5rem+6px)] md:-left-[calc(3.5rem+6px)]';
  if (kind === 'account') {
    return (
      <span className={`${pos} flex h-3 w-3 items-center justify-center`} aria-hidden="true">
        <span className="absolute h-3 w-px rotate-45 bg-silverm" />
        <span className="absolute h-3 w-px -rotate-45 bg-silverm" />
      </span>
    );
  }
  return (
    <span className={`${pos} h-[9px] w-[9px] rounded-full border border-accent bg-paper`} aria-hidden="true" />
  );
}

export default function History() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28" data-testid="section-history">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHead num="02" kicker="History" title="A Craft With Many Beginnings" />
            <Reveal>
              <p className="max-w-sm text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
                The sources do not agree on when Tarakasi began, and that disagreement is itself evidence of how old, and how orally transmitted, the tradition is. Where accounts diverge, they are shown as diverging. Where the record firms up, the thread becomes one.
              </p>
              <div className="mt-8 space-y-3 font-micro text-[10px] uppercase tracking-[0.18em] text-silverd">
                <p className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3 items-center justify-center"><span className="absolute h-3 w-px rotate-45 bg-silverm" /><span className="absolute h-3 w-px -rotate-45 bg-silverm" /></span>
                  Account: sources differ
                </p>
                <p className="flex items-center gap-3">
                  <span className="h-[9px] w-[9px] rounded-full border border-accent" />
                  Documented anchor
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ol className="relative ml-2 border-l border-rule pl-10 md:pl-14">
            {TIMELINE.map((t, i) => (
              <li key={t.era} className={`relative ${i < TIMELINE.length - 1 ? 'pb-14 md:pb-16' : ''} ${i % 2 === 1 ? 'md:ml-16' : ''}`}>
                <Node kind={t.kind} />
                <Reveal>
                  <p className="font-micro text-xs uppercase tracking-[0.2em] text-accent">{t.era}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink md:text-base md:leading-[1.7]">{t.text}</p>
                  <div className="mt-3"><SourceNote keys={t.sources} /></div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
