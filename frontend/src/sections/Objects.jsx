import { Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { OBJECT_CATS } from '../content';

const RATIOS = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[16/10]', 'aspect-[4/5]'];

export default function Objects() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-40" data-testid="section-objects">
      <SectionHead num="05" kicker="Forms" title="What Silver Becomes" />

      <Reveal>
        <p className="max-w-[680px] text-base leading-relaxed text-silverd md:text-lg md:leading-[1.7]">
          Tarakasi is not jewellery alone. The same wire becomes waist bands for marriage, vermilion boxes, miniature handbags, idols, monument replicas — and the immense festival backdrops of the Durga Puja. <SourceNote keys={['wiki', 'oaklores']} />
        </p>
      </Reveal>

      <div className="masonry mt-16 columns-1 sm:columns-2 lg:columns-3">
        {OBJECT_CATS.map((c, i) => (
          <Reveal key={c.name} className="mb-8" delay={(i % 3) * 0.06}>
            <div className={i % 2 === 1 ? 'lg:mt-14' : ''}>
              <Ph label={`${c.name.toUpperCase()} — catalogue object shot`} meta="Photograph to be supplied · even museum lighting" ratio={RATIOS[i]} />
              <h3 className="mt-4 font-display text-xl font-light text-ink md:text-2xl">{c.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-silverd">{c.items}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 border-t border-rule pt-8 md:mt-24">
        <p className="font-micro text-[10px] uppercase tracking-[0.22em] text-accent">Recurring subjects</p>
        <p className="mt-4 max-w-3xl font-display text-xl font-light leading-relaxed text-ink md:text-2xl">
          Animals, birds, flowers and vines; the Konark Chakra and temple mementoes; the chariot of Arjuna with Krishna from the Gita; Lord Jagannath, Subhadra and Balabhadra; souvenir replicas of the Taj Mahal and the Eiffel Tower. <SourceNote keys={['wiki', 'oaklores']} />
        </p>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-silverd">
          One rose motif — a recurring subject — takes roughly three to four hours of continuous work to complete. <SourceNote keys={['virasat']} />
        </p>
      </Reveal>
    </section>
  );
}
