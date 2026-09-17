import { Ph, Reveal, SectionHead, SourceNote } from '../components/Shared';
import { OBJECT_CATS, RECURRING_SUBJECTS } from '../content';

const RATIOS = ['aspect-[3/4]', 'aspect-[4/3]', 'aspect-square', 'aspect-[3/4]', 'aspect-[16/10]', 'aspect-[4/5]'];

// Real delivered pixel dimensions per recurring-subject image, so tiles are sized to fit
// (not cropped/stretched to an arbitrary grid cell): 2848x1504, 1472x1472, 1984x2144, 2880x1472, 1280x1024, 1536x2752.
const RECURRING_RATIOS = ['aspect-[89/47]', 'aspect-square', 'aspect-[62/67]', 'aspect-[45/23]', 'aspect-[5/4]', 'aspect-[24/43]'];
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
  '/images/objects-recurring-taj-mahal.webp',
  '/images/objects-recurring-eiffel-tower.webp',
  '/images/objects-recurring-rose.webp',
];

function SubjectTile({ subject, src, ratio, className = '' }) {
  return (
    <div className={`group relative w-full overflow-hidden bg-paper2 ${ratio} ${className}`}>
      <img
        src={src}
        alt={`Tarakasi work depicting ${subject.name.toLowerCase()}`}
        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
        <p className="font-display text-sm font-light leading-snug text-paper md:text-lg">{subject.name}</p>
        <p className="mt-1 hidden text-xs leading-relaxed text-silverl md:block">{subject.note}</p>
      </div>
    </div>
  );
}

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
          Across jewellery, showpieces and festival work, the same handful of subjects recur. Seven of the most common: <SourceNote keys={['wiki', 'oaklores']} />
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal><SubjectTile subject={RECURRING_SUBJECTS[0]} src={RECURRING_IMAGES[0]} ratio={RECURRING_RATIOS[0]} /></Reveal>
          <Reveal delay={0.05}><SubjectTile subject={RECURRING_SUBJECTS[1]} src={RECURRING_IMAGES[1]} ratio={RECURRING_RATIOS[1]} /></Reveal>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal delay={0.1}><SubjectTile subject={RECURRING_SUBJECTS[2]} src={RECURRING_IMAGES[2]} ratio={RECURRING_RATIOS[2]} /></Reveal>
          <Reveal delay={0.15}><SubjectTile subject={RECURRING_SUBJECTS[5]} src={RECURRING_IMAGES[5]} ratio={RECURRING_RATIOS[5]} /></Reveal>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal delay={0.2}><SubjectTile subject={RECURRING_SUBJECTS[3]} src={RECURRING_IMAGES[3]} ratio={RECURRING_RATIOS[3]} /></Reveal>
          <Reveal delay={0.25}><SubjectTile subject={RECURRING_SUBJECTS[4]} src={RECURRING_IMAGES[4]} ratio={RECURRING_RATIOS[4]} /></Reveal>
        </div>

        <Reveal delay={0.3} className="mx-auto mt-6 max-w-xl">
          <SubjectTile subject={RECURRING_SUBJECTS[6]} src={RECURRING_IMAGES[6]} ratio="aspect-[4/3]" />
        </Reveal>

        <p className="mt-8 max-w-xl text-xs leading-relaxed text-silverm">
          <SourceNote keys={['virasat']} />
        </p>
      </Reveal>
    </section>
  );
}
