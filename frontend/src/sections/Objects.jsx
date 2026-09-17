import { Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { OBJECT_CATS, RECURRING_SUBJECTS } from '../content';

const RATIOS = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[16/10]', 'aspect-[4/5]'];
const OBJECT_IMAGES = [
  '/images/objects-jewellery.png',
  '/images/objects-ornaments.png',
  '/images/objects-souvenirs.png',
  '/images/objects-idols.png',
  '/images/objects-architectural.png',
  '/images/objects-festival.png',
];

export default function Objects() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-28" data-testid="section-objects">
      <SectionHead num="05" kicker="Forms" title="What Silver Becomes" />

      <Reveal>
        <p className="max-w-[680px] text-base leading-relaxed text-silverd md:text-lg md:leading-[1.7]">
          Tarakasi is not jewellery alone. The same wire becomes waist bands for marriage, vermilion boxes, miniature handbags, idols, monument replicas, and the immense festival backdrops of the Durga Puja. <SourceNote keys={['wiki', 'oaklores']} />
        </p>
      </Reveal>

      <div className="masonry mt-16 columns-1 sm:columns-2 lg:columns-3">
        {OBJECT_CATS.map((c, i) => (
          <Reveal key={c.name} className="mb-8" delay={(i % 3) * 0.06}>
            <div className={i % 2 === 1 ? 'lg:mt-14' : ''}>
              <Ph
                label={`${c.name.toUpperCase()}: catalogue object shot`}
                ratio={RATIOS[i]}
                src={OBJECT_IMAGES[i]}
                alt={`Tarakasi ${c.name.toLowerCase()}, catalogue shot`}
              />
              <h3 className="mt-4 font-display text-xl font-light text-ink md:text-2xl">{c.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-silverd">{c.items}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 border-t border-rule pt-8 md:mt-24">
        <p className="font-micro text-[10px] uppercase tracking-[0.22em] text-accent">Recurring subjects</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-silverd md:text-base md:leading-[1.7]">
          Across jewellery, showpieces and festival work, the same handful of subjects recur. Six of the most common: <SourceNote keys={['wiki', 'oaklores']} />
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {RECURRING_SUBJECTS.map((s, i) => (
            <Reveal key={s.name} delay={(i % 6) * 0.05}>
              <Ph label={`MOTIF: ${s.name.toLowerCase()}`} ratio="aspect-square" alt={`Tarakasi work depicting ${s.name.toLowerCase()}`} />
              <p className="mt-3 font-display text-base font-light leading-snug text-ink">{s.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-silverd">{s.note}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-xs leading-relaxed text-silverm">
          <SourceNote keys={['virasat']} />
        </p>
      </Reveal>
    </section>
  );
}
