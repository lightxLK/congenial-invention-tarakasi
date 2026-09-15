export const SOURCES = {
  wiki: { label: 'Wikipedia', title: 'Tarakasi', url: 'https://en.wikipedia.org/wiki/Tarakasi', role: 'Process detail, alloy composition, motifs, Odissi ornament names, and the Chandi Medha history with dated installations.' },
  vikaspedia: { label: 'Vikaspedia / ASI', title: 'Cuttack Rupa Tarakasi: The Timeless Silver Filigree Art From the Silver City', url: 'https://en.vikaspedia.in/viewcontent/education/archaeological-survey-of-india/cuttack-rupa-tarakasi-the-timeless-silver-filigree-art-from-the-silver-city', role: "The 'exact origin is unclear' framing and the 12th-century reference; the most institutionally authoritative voice on the unresolved-origin question." },
  gac: { label: 'Google Arts & Culture / Dastkari Haat Samiti', title: 'Tarakasi: The Making of Silver Filigree', url: 'https://artsandculture.google.com/story/tarakasi-the-making-of-silver-filigree-dastkari-haat-samiti/1AVxVAl70Rj6LA', role: 'The step-by-step making process: silver bricks, wire-drawing, dies, workshop scale, finishing. Documented by Chirodeep Chaudhuri with artisan Ruksar Ali.' },
  virasat: { label: 'Virasat-E-Hind Foundation', title: 'Tarakasi Art: On the Brink of Survival', url: 'https://blogvirasatehind.wordpress.com/2017/08/18/tarakasi-art-on-the-brink-of-survival/', role: 'The Persia-via-Indonesia maritime origin theory, Mughal patronage, the Madhusudan Das and 1962 cooperative revival, the rose-motif labour detail, and the survival challenges.' },
  drishti: { label: 'Drishti IAS', title: 'GI Tag to Cuttack Rupa Tarakasi', url: 'https://www.drishtiias.com/daily-updates/daily-news-analysis/gi-tag-to-cuttack-rupa-tarakasi', role: 'The GI recognition date, the legal explainer (DPIIT, GI Act 1999, TRIPS), and the ancient Mesopotamian filigree lineage.' },
  oaklores: { label: 'Oak Lores', title: "Tales in Twisted Silver: A Tribute to Odisha's Filigree Craft", url: 'https://oaklores.com/2025/04/23/tales-in-twisted-silver-a-tribute-to-odishas-filigree-craft/', role: "The Bhoi-dynasty dating, the 'Silver City' epithet, Bali Yatra, named market neighbourhoods, and contemporary revival notes." },
};

export const NAV = [
  { id: 'craft', label: 'The Craft' },
  { id: 'making', label: 'The Making' },
  { id: 'motifs', label: 'Motifs' },
  { id: 'culture', label: 'In Culture' },
  { id: 'cuttack', label: 'Cuttack' },
  { id: 'gi', label: 'GI Recognition' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'sources', label: 'Sources' },
];

export const TIMELINE = [
  { era: '~3500 BCE', kind: 'account', text: 'Filigree as a technique is already old by the time it reaches India — evidence of fine-wire jewellery exists from ancient Mesopotamia.', sources: ['drishti'] },
  { era: '12th century', kind: 'account', text: "Vikaspedia, hosted by the Archaeological Survey of India, records silver-working traditions in the Cuttack region reaching back this far — while noting the craft's exact local origin is unclear.", sources: ['vikaspedia'] },
  { era: 'Mid-16th century', kind: 'account', text: 'Historians trace organised silver filigree work in Cuttack to the reign of the Bhoi dynasty, with Persian artisans connected to the Mughal empire described as bringing intricate wire-design expertise into Odisha.', sources: ['oaklores'] },
  { era: '~500 years ago', kind: 'account', text: 'A separate account places the craft\u2019s arrival by sea — from Persia, by way of Indonesia, through maritime trade.', sources: ['virasat'] },
  { era: 'Mughal era', kind: 'account', text: "Royal patronage strengthens Cuttack's reputation for delicate silverwork.", sources: ['oaklores', 'virasat'] },
  { era: 'c. 1873', kind: 'documented', text: 'An Archaeological Survey of India photograph documents Tarakasi artisans at work in Cuttack — the craft\u2019s earliest visual record in these sources.', sources: ['wiki'] },
  { era: 'Early 20th century', kind: 'documented', text: 'The craft declines. Madhusudan Das — an architect of modern Odisha — founds the Utkal Arts Work Factory to revive it.', sources: ['virasat'] },
  { era: '1962', kind: 'documented', text: 'Chief Minister Biju Patnaik establishes the Kalinga Filigree Cooperative Society to support local artisans.', sources: ['virasat'] },
  { era: '15 March 2024', kind: 'documented', text: 'Cuttack Rupa Tarakasi receives Geographical Indication recognition.', sources: ['drishti'] },
];

export const STEPS = [
  { name: 'Melt', detail: 'A silver lump is placed in a small clay pot set within a bucket of hot coals; the fire is regulated by a hand-cranked bellows. Melting takes roughly ten minutes.', sources: ['wiki'] },
  { name: 'Cast', detail: 'Molten silver is poured into a rod-shaped mould, then cooled in water.', sources: ['wiki'] },
  { name: 'Draw', detail: 'The cooled rod is pressed and pulled into long, thin wire using a wire-drawing machine — historically a two-man hand process — producing flat wires as a base form.', sources: ['wiki', 'gac'] },
  { name: 'Refine gauge', detail: 'Thicker wires are drawn down further, gauge chosen according to the design. The finest wire can be thinner than a strand of hair.', sources: ['gac', 'oaklores'] },
  { name: 'Twist & curl', detail: 'Wire is softened over a kerosene flame directed through a mouth-held blow-tube, then strung, twisted and shaped by hand — needles for twisting, dies for small circular forms and fine dotted detail.', sources: ['wiki', 'gac'] },
  { name: 'Frame — farma', detail: 'A hand-drawn sketch guides the piece. A thicker wire is bent into the outer frame, the farma.', sources: ['gac'] },
  { name: 'Fill', detail: 'Thinner wires are curled and packed inward, building the interior detail of the design.', sources: ['gac'] },
  { name: 'Assemble', detail: 'Individual wire elements are assembled into the final composition; for larger pieces, flat cut silver shapes supplement the wirework.', sources: ['gac'] },
  { name: 'Fuse', detail: 'The piece is set in a mixture of borax powder and water, soldering powder is sprinkled over the joins, and heat is applied — while the metal is still warm it is shaped into its final ornament form.', sources: ['wiki'] },
  { name: 'Clean', detail: 'The finished piece is immersed briefly in a dilute acid solution.', sources: ['gac'] },
  { name: 'Polish', detail: 'A polishing solution is applied, then the piece is hand-polished to a perfect shine using brass-tipped tools and brushes — or oxidised for an antique finish.', sources: ['gac', 'oaklores'] },
];

export const WORKSHOP = [
  { text: 'Teams of four to five artisans typically collaborate on a piece; workshops are often small, cramped spaces behind showrooms or inside artisans\u2019 homes.', sources: ['gac'] },
  { text: 'Winter months are the preferred working season.', sources: ['gac'] },
  { text: 'A complex piece can take two to three weeks depending on intricacy — a single mistake can undo days of work.', sources: ['oaklores'] },
];

export const MOTIFS = [
  { name: 'Spiral', note: 'Wound tight from a single wire — the base unit of countless motifs.', sources: ['virasat'] },
  { name: 'Curl', note: 'An open turn of wire, packed inward to fill a frame.', sources: ['virasat'] },
  { name: 'Creeper', note: 'A running vine of wire, bridging larger forms.', sources: ['virasat'] },
  { name: 'Jaali lattice', note: 'An open mesh of crossed wires, light passing through.', sources: ['virasat'] },
  { name: 'Circle', note: 'Small circular forms produced with dies.', sources: ['gac'] },
  { name: 'Dot', note: 'Fine dotted detail, die-pressed into the wirework.', sources: ['gac'] },
];

export const OBJECT_CATS = [
  { name: 'Jewellery', items: 'Earrings, necklaces, bangles, anklets, toe rings, arm jewellery' },
  { name: 'Ornaments & vermilion boxes', items: 'Brooches, pendants, hairpins, vermilion boxes' },
  { name: 'Souvenirs & miniatures', items: 'Miniature handbags, customised gifts, mementoes' },
  { name: 'Idols & showpieces', items: 'Idols, decorative frames, display pieces' },
  { name: 'Architectural replicas', items: 'Monument replicas, Konark Chakra mementoes' },
  { name: 'Festival work', items: 'Chandi Medha backdrops, crowns, puja ornaments' },
];

export const ODISSI_FORMS = [
  { name: 'Sinthi', zone: 'Head / forehead', x: 50, y: 7 },
  { name: 'Kapa', zone: 'Ear', x: 33, y: 17 },
  { name: 'Choker', zone: 'Neck', x: 61, y: 27 },
  { name: 'Padaka-tilaka', zone: 'Neck — long necklace', x: 37, y: 39 },
  { name: 'Bahichudi / Tayila', zone: 'Arm — armlets', x: 65, y: 48 },
  { name: 'Kankana', zone: 'Wrist — bracelets', x: 33, y: 58 },
  { name: 'Mekhala', zone: 'Waist — belt', x: 58, y: 66 },
  { name: 'Anklets & bells', zone: 'Feet', x: 45, y: 89 },
];

export const MEDHA = [
  { year: '1956', place: 'Choudhury Bazaar', kg: 250, note: 'First large chandi medha installed' },
  { year: '1991', place: 'Sheikh Bazaar', kg: 350, note: 'Puja mandap backdrop' },
  { year: '2004', place: 'Ranihat', kg: 483, note: 'Chandi medha installed' },
  { year: '2005', place: 'Haripur-Dolamundai', kg: 500, note: 'Backdrop installed' },
  { year: '2006', place: 'Sheikh Bazaar', kg: 450, note: 'Backdrop remodelled in silver' },
];

export const PUJA_AREAS = ['Chandni Chowk', 'Chauliaganj', 'Choudhury Bazar', 'Khan Nagar', 'Banka Bazar', 'Dargaah Bazaar', 'Balu Bazar'];

export const GI_ROWS = [
  { q: 'Recognition date', a: 'Cuttack Rupa Tarakasi received Geographical Indication recognition on 15 March 2024.', sources: ['drishti'] },
  { q: 'What a GI means', a: 'A GI tag identifies a product as originating from a specific geographic region and legally restricts use of that name to authorised producers from that place.', sources: ['drishti'] },
  { q: 'The regulator', a: 'In India, GI registration is administered by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Geographical Indications of Goods (Registration and Protection) Act, 1999 — aligned with the WTO\u2019s TRIPS agreement.', sources: ['drishti'] },
  { q: 'Protection term', a: 'Once registered, GI protection lasts ten years.', sources: ['drishti'] },
  { q: 'Recognised alongside', a: 'The recognition was granted in the same period as GI tags for Banglar Muslin (West Bengal), Narasapur Crochet Lace (Andhra Pradesh) and Kutch Rogan Craft (Gujarat).', sources: ['drishti'] },
];

export const CHALLENGES = [
  { text: 'The craft is intensely labour-intensive — complex pieces can take two to three weeks, and precision leaves no margin.', sources: ['oaklores'] },
  { text: 'Raw material costs are rising sharply as silver prices climb.', sources: ['oaklores', 'virasat'] },
  { text: 'Artisans face competition from coarser, cheaper machine-assisted filigree produced at volume — factory processes can replicate thousands of pieces a day.', sources: ['virasat', 'oaklores'] },
  { text: 'Interest among younger generations is declining, given the skill, patience and modest returns the craft currently offers.', sources: ['virasat', 'oaklores'] },
  { text: 'Approximately 400 artisans are estimated to still be working in Cuttack; without continued support, the craft is described as being in real danger of erosion.', sources: ['virasat'] },
  { text: 'And yet — designers are increasingly bringing Tarakasi into fashion shows, luxury collections and international exhibitions, and handicraft training centres are offering renewed institutional support.', sources: ['oaklores'], closing: true },
];
