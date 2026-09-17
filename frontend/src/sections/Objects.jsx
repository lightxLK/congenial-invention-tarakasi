import { Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { OBJECT_CATS, RECURRING_SUBJECTS } from '../content';

const BENTO_SPANS = [
  'col-span-2 row-span-2',
  'col-span-1 row-span-1',
  'col-span-1 row-span-2',
  'col-span-1 row-span-1',
  'col-span-2 row-span-1',
  'col-span-2 row-span-1',
];

const RATIOS = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[16/10]', 'aspect-[4/5]'];
const OBJECT_IMAGES = [
  '/images/objects-jewellery.webp',
  '/images/objects-ornaments.webp',
  '/images/objects-souvenirs.webp',
  '/images/objects-idols.webp',
  '/images/objects-architectural.webp',
  '/images/objects-festival.webp',
];

const RECURRING_IMAGES = [
  '/images/objects-recurring-animals-birds-flowers.webp',
  '/images/objects-recurring-konark-chakra.webp',
  '/images/objects-recurring-arjunas-chariot.webp',
  '/images/objects-recurring-jagannath-trio.webp',
  '/images/objects-recurring-taj-eiffel.webp',
  '/images/objects-recurring-rose.webp',
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
        <div className="mt-8 grid grid-flow-dense grid-cols-2 auto-rows-[130px] gap-3 sm:grid-cols-3 sm:auto-rows-[150px] md:gap-4 lg:grid-cols-4 lg:auto-rows-[170px]">
          {RECURRING_SUBJECTS.map((s, i) => (
            <Reveal key={s.name} delay={(i % 6) * 0.05} className={BENTO_SPANS[i]}>
              <div className="group relative h-full w-full overflow-hidden bg-paper2">
                <img
                  src={RECURRING_IMAGES[i]}
                  alt={`Tarakasi work depicting ${s.name.toLowerCase()}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                  <p className="font-display text-sm font-light leading-snug text-paper md:text-lg">{s.name}</p>
                  <p className="mt-1 hidden text-xs leading-relaxed text-silverl md:block">{s.note}</p>
                </div>
              </div>
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
