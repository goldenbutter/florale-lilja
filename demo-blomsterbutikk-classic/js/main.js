// === I18N — DORMANT (classic tier, NO-only baseline) ===
// Entire translations object + t/applyTranslations/toggleLanguage/initLangToggle wrapped
// in this block comment. Inline Norwegian text in every HTML page is the source of truth.
// Re-enabling EN is a paid 5-min upgrade: drop the surrounding /* ... */, uncomment
// the applyTranslations() and initLangToggle() calls in DOMContentLoaded below, and
// uncomment the EN toggle buttons in nav + mobile menu in every HTML page.
/*
const translations = {
  no: {
    // --- Navigation ---
    'nav.logo':    'Florale Lilja',
    'nav.home':    'Hjem',
    'nav.bouquets':'Buketter',
    'nav.about':   'Om oss',
    'nav.gallery': 'Galleri',
    'nav.contact': 'Kontakt',
    'nav.lang':    'EN',

    // --- Hero ---
    'hero.label':    'Studioflorist i Orkanger',
    'hero.headline': 'Bundet for hånd, blomst for blomst',
    'hero.sub':      'Sesongens vakreste blomster — plukket i Trøndelag, formet med rolige hender. Hver bukett bæres med en historie.',
    'hero.cta':      'Se sesongens buketter',
    'hero.cta2':     'Bestill via Vipps',
    'hero.img.alt':  'Stort romantisk buket av peoner og roser i pasteltoner mot mykt morgensolglys',

    // --- Blooms strip ---
    'blooms.label':  'Sesongens blomster',
    'blooms.heading':'Det vi binder akkurat nå',
    'blooms.sub':    'Friske leveranser hver tirsdag og fredag fra norske gartnerier.',
    'bloom1.name':   'Pioner',
    'bloom1.latin':  'Paeonia lactiflora',
    'bloom1.alt':    'Lyserosa pioner i fullt flor',
    'bloom2.name':   'Ranunkel',
    'bloom2.latin':  'Ranunculus asiaticus',
    'bloom2.alt':    'Tett kremfarget ranunkel sett ovenfra',
    'bloom3.name':   'Anemone',
    'bloom3.latin':  'Anemone coronaria',
    'bloom3.alt':    'Hvit anemone med dyp lilla midte',
    'bloom4.name':   'Eukalyptus',
    'bloom4.latin':  'Eucalyptus cinerea',
    'bloom4.alt':    'Sølvgrønn eukalyptuskvist mot lys bakgrunn',

    // --- Occasion picker ---
    'occasion.label':  'Anledning',
    'occasion.heading':'Til hvilken stund?',
    'occasion.sub':    'Vi former hver bukett etter dagens betydning — store dager, stille dager, og dagene midt imellom.',
    'occ1.title':      'Bryllup',
    'occ1.text':       'Til de største dagene',
    'occ2.title':      'Begravelse',
    'occ2.text':       'I sorgens stillhet',
    'occ3.title':      'Fødsel',
    'occ3.text':       'Velkommen til verden',
    'occ4.title':      'Kjærlighet',
    'occ4.text':       'Ord uten ord',
    'occ5.title':      'Takk',
    'occ5.text':       'Bare fordi',

    // --- Welcome / about florist ---
    'welcome.label':   'Florale Lilja',
    'welcome.heading': 'Et lite studio. Mye håndverk.',
    'welcome.p1':      'Florale Lilja er et stilleflytende studio på Orkanger, drevet av Ingrid Lilja siden 2014. Her finner du ingen typisk butikkhylle med ferdigpakkede buketter — alt bindes etter hånd, etter sesong, etter den anledningen blomstene skal til.',
    'welcome.p2':      'Vi henter blomstene våre fra norske gartnerier når vi kan, og fra ansvarlige importører resten av året. Sortimentet skifter med uka — det er sjelden to dager helt like hos oss.',
    'welcome.p3':      'Kom innom for en kaffe, eller send oss noen ord om hva blomstene skal si.',
    'welcome.signoff': '— Ingrid Lilja',
    'welcome.img.alt': 'Florist Ingrid binder en bukett ved arbeidsbenken i et lyst studio',

    // --- Vipps CTA ---
    'cta.label':       'Bestilling',
    'cta.heading':     'Klar for å sende noen blomster?',
    'cta.sub':         'Velg en bukett, fortell oss litt om dagen den skal til, og vi binder den klar til henting eller levering. Du betaler trygt med Vipps.',
    'cta.btn':         'Bestill via Vipps',
    'cta.btn2':        'Se buketter',

    // --- Contact strip ---
    'contact.h1':      'Adresse',
    'contact.p1':      'Orkdalsveien 25\n7300 Orkanger',
    'contact.h2':      'Åpningstider',
    'contact.p2':      'Tirs–fre 10–17\nLør 10–14',
    'contact.h3':      'Snakk med oss',
    'contact.p3':      '+47 72 48 11 22\npost@floralelilja.no',

    // --- Footer ---
    'footer.tagline':  'Lokalt bundne buketter siden 2014.',
    'footer.address':  'Orkdalsveien 25, 7300 Orkanger',
    'footer.links':    'Sider',
    'footer.contact':  'Kontakt',
    'footer.phone':    '+47 72 48 11 22',
    'footer.email':    'post@floralelilja.no',
    'footer.response': 'Vi svarer som regel innen samme dag',
    'footer.copyright':'© 2026 Florale Lilja',
    'footer.dev':      'Utviklet av Bithun',

    // === BOUQUETTER PAGE ===
    'bouquets.banner.title':'Sesongens buketter',
    'bouquets.banner.sub':  'Bestill håndbundne buketter til henting i Orkanger eller levering lokalt.',
    'bouquets.banner.alt':  'Florist binder en pasteltonet bukett ved arbeidsbenken',

    'catalog.heading':      'Buketter denne uka',
    'catalog.sub':          'Prisene gjelder for buketten som vist. Vi tilpasser gjerne størrelse, farger og innpakning — bare gi beskjed når du bestiller.',

    'b1.title':  'Klassisk hvit',
    'b1.price':  '695',
    'b1.desc':   'Hvite roser, ranunkel, slør og sølveukalyptus. Tidløs og rolig — perfekt til konfirmasjoner, vertinnegaver og enkle takk.',
    'b1.alt':    'Klassisk hvit bukett med roser, ranunkel og eukalyptus',

    'b2.title':  'Pastell vår',
    'b2.price':  '595',
    'b2.desc':   'Lyserosa peoner, fersken-ranunkel og blå tulipaner. Lett og luftig — for de gode hverdagshilsenene.',
    'b2.alt':    'Pasteltonet vårbukett med peoner, ranunkel og tulipaner',

    'b3.title':  'Romantisk rosa',
    'b3.badge':  'Mest populær',
    'b3.price':  '745',
    'b3.desc':   'Roser, peoner og dahliaer i dype og myke rosa nyanser. Vår mest etterspurte bukett — bestselger til kjæresten.',
    'b3.alt':    'Tett romantisk bukett i ulike rosa nyanser',

    'b4.title':  'Sommerhilsen',
    'b4.price':  '495',
    'b4.desc':   'Markblomster bundet løst og fritt — kornblomster, prestekrager, lavendel. Som en sommerlig tur i åkeren.',
    'b4.alt':    'Løs sommerbukett av kornblomster, prestekrager og lavendel',

    'b5.title':  'Bårebukett',
    'b5.price':  '1 450',
    'b5.desc':   'Hvit-grønn bårebukett med roser, lilja og slør. Vi leverer til kapellet eller seremonien etter avtale.',
    'b5.alt':    'Hvit bårebukett med roser, lilja og grønt slør på trebenk',

    'b6.title':  'Bryllupsbukett',
    'b6.price':  'fra 1 800',
    'b6.desc':   'Skreddersydd til din dag etter samtale med oss. Bestilles minst tre uker i forveien — vi bringer fargeprøver og blomsterskisser.',
    'b6.alt':    'Romantisk bryllupsbukett med peoner og slør holdt av brud',

    'faq.heading':'Spørsmål & svar',
    'faq1.q':'Hvordan bestiller jeg?',
    'faq1.a':'Velg buketten du ønsker og klikk «Bestill via Vipps». Du oppgir leveringsdag, eventuelt mottakers adresse og en personlig hilsen — vi binder buketten ferdig til avtalt tid.',
    'faq2.q':'Leverer dere?',
    'faq2.a':'Ja. Vi leverer fritt i Orkanger og Fannrem, og kjører ut til Svorkmo, Lensvik og Børsa for et lite tillegg. Bestillinger gjort før kl. 11 leveres samme dag.',
    'faq3.q':'Kan jeg endre eller avbestille?',
    'faq3.a':'Ja — kontakt oss minst 24 timer før avtalt henting eller levering, så ordner vi det uten kostnad. Bryllups- og begravelsesbestillinger har egne vilkår på grunn av blomstebestilling.',
    'faq4.q':'Hva med bryllup og store oppdrag?',
    'faq4.a':'Ta kontakt minst tre uker i forveien for bryllup, og vi setter av tid til en samtale med fargeprøver. For begravelser kan vi som regel hjelpe innen 24 timer.',

    // --- Vipps modal ---
    'modal.title': 'Dette er en demo',
    'modal.body1': 'Dette er en demo — Vipps-betaling aktiveres når din konto er satt opp.',
    'modal.body2': 'Kontakt oss for å se hvordan dette fungerer for din butikk:',
    'modal.email': 'post@floralelilja.no',
    'modal.close': 'Lukk',

    // === OM OSS PAGE ===
    'about.banner.title':'Om Florale Lilja',
    'about.banner.sub':  'Et lite studio, et stort arbeid med detaljer.',
    'about.banner.alt':  'Bryllupsdekor med blomsterbue og pasteltonede arrangementer',

    'story.heading':'Ingrid og det stille håndverket',
    'story.p1':'Florale Lilja begynte i et lite kjøkkenhjørne på Fannrem i 2014. Ingrid hadde nettopp flyttet hjem fra Bergen og savnet å jobbe med hendene — og blomstene var det første hun kjente at hun ville skape med, dag etter dag.',
    'story.p2':'Studioet flyttet til Orkdalsveien 25 i 2018, der vi nå har plass til både arbeidsbenken, et lite utvalg planter, og ro nok til å ta en kaffe med kunder som vil snakke gjennom en spesiell dag.',
    'story.p3':'Vi binder ikke noe ferdig før det blir bestilt. Det betyr at vi sjelden har de samme blomstene to ganger på rad — men det betyr også at hver bukett er helt din.',

    'photo.caption1':'Arbeidsbenken en tirsdag morgen',
    'photo.caption2':'Sesongens favoritt — pioner i juni',
    'photo.caption3':'Studioets stille sider',
    'photo.caption4':'Bryllupsbukett under siste justering',

    'photo.alt1':'Sakser, bånd og blomster spredt over en arbeidsbenk i tre',
    'photo.alt2':'Nærbilde av tett rosa pioner mot lys grå bakgrunn',
    'photo.alt3':'Sidefokus av studioet med vase, bok og kaffekopp',
    'photo.alt4':'Florist gjør de siste justeringene på en bryllupsbukett',

    'values.heading':'Slik jobber vi',
    'val1.title':'Sesong først',
    'val1.text':'Vi velger blomster etter hva som er friskest akkurat nå — ikke etter en fast meny.',
    'val2.title':'Hånd, ikke bånd',
    'val2.text':'Hver bukett bindes for hånd. Ingen ferdige plastinnpakkede vasebuketter.',
    'val3.title':'Lokalt der vi kan',
    'val3.text':'Vi henter fra norske gartnerier så ofte vi får lov til av sesongen.',

    // === GALLERI PAGE ===
    'gallery.banner.title':'Galleri',
    'gallery.banner.sub':  'Buketter og oppdrag fra de siste sesongene',
    'gallery.banner.alt':  'Vindusoppstilling med pasteltonede buketter i Florale Liljas studio',

    'g.alt1':'Romantisk pasteltonet bukett mot lys gråblå bakgrunn',
    'g.alt2':'Bryllupsbukett med peoner og hvit slør holdt av brud',
    'g.alt3':'Hvit bårebukett på trebenk med stearinlys',
    'g.alt4':'Studio interiør med arbeidsbenk og blomster i bakgrunnen',
    'g.alt5':'Nærbilde av rosa ranunkel mot mørk grønn bakgrunn',
    'g.alt6':'Florist binder bukett med eukalyptus og roser',
    'g.alt7':'Markblomstbukett i grovt papir med jutebånd',
    'g.alt8':'Vase med tulipaner i kremfarge på vinduskarm',
    'g.alt9':'Bryllupsdekor med blomsterbue ute i hagen',
    'g.alt10':'Detaljer av lavendel og kornblomster i sommerlys',
    'g.alt11':'Hvit anemone med svart midte i nærbilde',
    'g.alt12':'Pakket bukett med håndskrevet kort klar for levering',

    // === KONTAKT PAGE ===
    'kontakt.banner.title':'Kontakt oss',
    'kontakt.banner.sub':  'Snakk med Ingrid om buketter, bryllup eller en stille hilsen.',
    'kontakt.banner.alt':  'Florist holder en bukett av eukalyptus og hvite roser',

    'kontakt.heading':'Vi svarer som regel samme dag',
    'kontakt.p1':'Du kan stikke innom studioet vårt på Orkdalsveien 25 i åpningstidene, eller ringe oss for store bestillinger som bryllup og bårebuketter. For mindre buketter er det enklest å sende oss en melding eller bestille direkte.',

    'kontakt.label.address':'Adresse',
    'kontakt.label.phone':  'Telefon',
    'kontakt.label.email':  'E-post',
    'kontakt.label.hours':  'Åpningstider',

    'kontakt.address':'Orkdalsveien 25, 7300 Orkanger',
    'kontakt.phone':  '+47 72 48 11 22',
    'kontakt.email':  'post@floralelilja.no',

    'hours.mon': 'Mandag',
    'hours.tue': 'Tirsdag',
    'hours.wed': 'Onsdag',
    'hours.thu': 'Torsdag',
    'hours.fri': 'Fredag',
    'hours.sat': 'Lørdag',
    'hours.sun': 'Søndag',
    'hours.closed':'Stengt',
    'hours.mon.t':'Stengt',
    'hours.tue.t':'10–17',
    'hours.wed.t':'10–17',
    'hours.thu.t':'10–17',
    'hours.fri.t':'10–17',
    'hours.sat.t':'10–14',
    'hours.sun.t':'Stengt',

    'kontakt.img.alt':'Studio interiør hos Florale Lilja med arbeidsbenken og friske blomster',

    // === 404 ===
    '404.title':'Siden er visnet',
    '404.sub':  'Akkurat denne lenken finner vi ikke lenger — kanskje noe annet vekker interessen din?',
    '404.btn':  'Tilbake til forsiden',
  },

  en: {
    // --- Navigation ---
    'nav.logo':    'Florale Lilja',
    'nav.home':    'Home',
    'nav.bouquets':'Bouquets',
    'nav.about':   'About',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.lang':    'NO',

    // --- Hero ---
    'hero.label':    'Studio florist in Orkanger',
    'hero.headline': 'Hand-tied, stem by stem',
    'hero.sub':      'Seasonal blooms picked in Trøndelag, shaped with quiet hands. Every bouquet carries a story.',
    'hero.cta':      'See this season',
    'hero.cta2':     'Order via Vipps',
    'hero.img.alt':  'Large romantic bouquet of peonies and roses in pastel tones in soft morning light',

    // --- Blooms strip ---
    'blooms.label':  "Today's blooms",
    'blooms.heading':'What we are tying right now',
    'blooms.sub':    'Fresh deliveries every Tuesday and Friday from Norwegian growers.',
    'bloom1.name':   'Peony',
    'bloom1.latin':  'Paeonia lactiflora',
    'bloom1.alt':    'Soft pink peony in full bloom',
    'bloom2.name':   'Ranunculus',
    'bloom2.latin':  'Ranunculus asiaticus',
    'bloom2.alt':    'Tightly layered cream ranunculus seen from above',
    'bloom3.name':   'Anemone',
    'bloom3.latin':  'Anemone coronaria',
    'bloom3.alt':    'White anemone with deep purple centre',
    'bloom4.name':   'Eucalyptus',
    'bloom4.latin':  'Eucalyptus cinerea',
    'bloom4.alt':    'Silver-green eucalyptus sprig against pale background',

    // --- Occasion picker ---
    'occasion.label':  'Occasion',
    'occasion.heading':'For which moment?',
    'occasion.sub':    'We shape every bouquet around the meaning of the day — big days, quiet days, and the ones in between.',
    'occ1.title':      'Wedding',
    'occ1.text':       'For the biggest days',
    'occ2.title':      'Funeral',
    'occ2.text':       'In the silence of grief',
    'occ3.title':      'New baby',
    'occ3.text':       'Welcome to the world',
    'occ4.title':      'Love',
    'occ4.text':       'Words without words',
    'occ5.title':      'Thanks',
    'occ5.text':       'Just because',

    // --- Welcome ---
    'welcome.label':   'Florale Lilja',
    'welcome.heading': 'A small studio. A lot of handwork.',
    'welcome.p1':      "Florale Lilja is a quiet studio in Orkanger, run by Ingrid Lilja since 2014. You won't find rows of pre-packed bouquets here — everything is tied by hand, by season, and by the moment the flowers are meant for.",
    'welcome.p2':      'We source from Norwegian growers when the season allows, and from responsible importers the rest of the year. The shop changes from week to week — rarely two days quite alike.',
    'welcome.p3':      'Drop in for a coffee, or send us a few words about what the flowers should say.',
    'welcome.signoff': '— Ingrid Lilja',
    'welcome.img.alt': 'Florist Ingrid tying a bouquet at the workbench in a sunlit studio',

    // --- Vipps CTA ---
    'cta.label':       'Ordering',
    'cta.heading':     'Ready to send some flowers?',
    'cta.sub':         "Pick a bouquet, tell us a little about the day it's for, and we'll have it tied for pickup or local delivery. You pay safely with Vipps.",
    'cta.btn':         'Order via Vipps',
    'cta.btn2':        'See bouquets',

    // --- Contact strip ---
    'contact.h1':      'Address',
    'contact.p1':      'Orkdalsveien 25\n7300 Orkanger',
    'contact.h2':      'Opening hours',
    'contact.p2':      'Tue–Fri 10–17\nSat 10–14',
    'contact.h3':      'Talk to us',
    'contact.p3':      '+47 72 48 11 22\npost@floralelilja.no',

    // --- Footer ---
    'footer.tagline':  'Locally tied bouquets since 2014.',
    'footer.address':  'Orkdalsveien 25, 7300 Orkanger',
    'footer.links':    'Pages',
    'footer.contact':  'Contact',
    'footer.phone':    '+47 72 48 11 22',
    'footer.email':    'post@floralelilja.no',
    'footer.response': 'We usually reply the same day',
    'footer.copyright':'© 2026 Florale Lilja',
    'footer.dev':      'Developed by Bithun',

    // === BOUQUETS PAGE ===
    'bouquets.banner.title':"This season's bouquets",
    'bouquets.banner.sub':  'Order hand-tied bouquets for pickup in Orkanger or local delivery.',
    'bouquets.banner.alt':  'Florist tying a pastel bouquet at the workbench',

    'catalog.heading':"Bouquets this week",
    'catalog.sub':    "Prices are for the bouquet shown. We're happy to adjust size, colour, and wrapping — just let us know when you order.",

    'b1.title':  'Classic White',
    'b1.price':  '695',
    'b1.desc':   'White roses, ranunculus, gypsophila and silver eucalyptus. Timeless and quiet — for confirmations, host gifts, and simple thank-yous.',
    'b1.alt':    'Classic white bouquet of roses, ranunculus and eucalyptus',

    'b2.title':  'Pastel Spring',
    'b2.price':  '595',
    'b2.desc':   'Soft pink peonies, peach ranunculus and pale tulips. Light and airy — for the everyday hellos that matter.',
    'b2.alt':    'Pastel spring bouquet of peonies, ranunculus and tulips',

    'b3.title':  'Romantic Pink',
    'b3.badge':  'Most popular',
    'b3.price':  '745',
    'b3.desc':   'Roses, peonies and dahlias in deep and soft pinks. Our most-requested bouquet — the one most often sent to a loved one.',
    'b3.alt':    'Lush romantic bouquet in different shades of pink',

    'b4.title':  'Summer Greeting',
    'b4.price':  '495',
    'b4.desc':   'Wildflowers tied loose and free — cornflowers, oxeye daisies, lavender. Like a summer walk through the meadow.',
    'b4.alt':    'Loose summer bouquet of cornflowers, daisies and lavender',

    'b5.title':  'Funeral Spray',
    'b5.price':  '1 450',
    'b5.desc':   'White-and-green funeral spray with roses, lily and gypsophila. We deliver to the chapel or service by appointment.',
    'b5.alt':    'White funeral spray of roses, lily and greenery on wood bench',

    'b6.title':  'Bridal Bouquet',
    'b6.price':  'from 1 800',
    'b6.desc':   'Tailor-made for your day after a meeting with us. Order at least three weeks ahead — we bring colour swatches and floral sketches.',
    'b6.alt':    'Romantic bridal bouquet of peonies and gypsophila held by bride',

    'faq.heading':'Questions & answers',
    'faq1.q':'How do I order?',
    'faq1.a':'Choose the bouquet you want and click "Order via Vipps". You give us a delivery date, the recipient address if any, and a personal greeting — we tie it ready for the agreed time.',
    'faq2.q':'Do you deliver?',
    'faq2.a':'Yes. We deliver free in Orkanger and Fannrem, and run out to Svorkmo, Lensvik and Børsa for a small fee. Orders before 11 am are delivered the same day.',
    'faq3.q':'Can I change or cancel?',
    'faq3.a':"Yes — let us know at least 24 hours before pickup or delivery and we'll sort it out at no cost. Wedding and funeral orders have their own terms because flowers are pre-ordered for them.",
    'faq4.q':'What about weddings and large orders?',
    'faq4.a':"Reach out at least three weeks ahead for weddings and we'll set aside time for a meeting with swatches. For funerals we can usually help within 24 hours.",

    // --- Vipps modal ---
    'modal.title': 'This is a demo',
    'modal.body1': "This is a demo — Vipps payment is enabled once your account is set up.",
    'modal.body2': 'Contact us to see how this works for your shop:',
    'modal.email': 'post@floralelilja.no',
    'modal.close': 'Close',

    // === ABOUT PAGE ===
    'about.banner.title':'About Florale Lilja',
    'about.banner.sub':  'A small studio, a lot of work in the details.',
    'about.banner.alt':  'Wedding decor with floral arch and pastel arrangements',

    'story.heading':'Ingrid and the quiet craft',
    'story.p1':'Florale Lilja started in a small kitchen corner in Fannrem in 2014. Ingrid had just moved home from Bergen and missed working with her hands — and flowers were the first thing she felt she wanted to make with, day after day.',
    'story.p2':'The studio moved to Orkdalsveien 25 in 2018, where we now have room for the workbench, a small selection of plants, and quiet enough to share a coffee with customers who want to talk through a special day.',
    'story.p3':"We don't tie anything before it's ordered. That means we rarely have the same flowers two days in a row — but it also means every bouquet is entirely yours.",

    'photo.caption1':'The workbench on a Tuesday morning',
    'photo.caption2':"Season's favourite — peonies in June",
    'photo.caption3':'The quieter side of the studio',
    'photo.caption4':'Bridal bouquet under final adjustment',

    'photo.alt1':'Scissors, ribbons and flowers spread across a wooden workbench',
    'photo.alt2':'Close-up of layered pink peonies against pale grey background',
    'photo.alt3':'Studio side view with vase, book and coffee cup',
    'photo.alt4':'Florist making the final adjustments on a bridal bouquet',

    'values.heading':'How we work',
    'val1.title':'Season first',
    'val1.text':"We choose flowers by what's freshest right now — not by a fixed menu.",
    'val2.title':'Hand, not band',
    'val2.text':'Every bouquet is tied by hand. No pre-wrapped vase bouquets.',
    'val3.title':'Local where we can',
    'val3.text':'We buy from Norwegian growers as often as the season allows.',

    // === GALLERY PAGE ===
    'gallery.banner.title':'Gallery',
    'gallery.banner.sub':  'Bouquets and orders from recent seasons',
    'gallery.banner.alt':  "Window display of pastel bouquets in Florale Lilja's studio",

    'g.alt1':'Romantic pastel bouquet against pale grey-blue background',
    'g.alt2':'Bridal bouquet of peonies and white gypsophila held by bride',
    'g.alt3':'White funeral spray on wood bench with candles',
    'g.alt4':'Studio interior with workbench and flowers in background',
    'g.alt5':'Close-up of pink ranunculus against deep green background',
    'g.alt6':'Florist tying bouquet with eucalyptus and roses',
    'g.alt7':'Wildflower bouquet in kraft paper with jute ribbon',
    'g.alt8':'Vase of cream tulips on a windowsill',
    'g.alt9':'Wedding decor with floral arch outdoors in a garden',
    'g.alt10':'Detail of lavender and cornflowers in summer light',
    'g.alt11':'White anemone with black centre in close-up',
    'g.alt12':'Wrapped bouquet with handwritten card ready for delivery',

    // === KONTAKT PAGE ===
    'kontakt.banner.title':'Contact us',
    'kontakt.banner.sub':  'Talk to Ingrid about bouquets, weddings, or a quiet greeting.',
    'kontakt.banner.alt':  'Florist holding a bouquet of eucalyptus and white roses',

    'kontakt.heading':'We usually reply the same day',
    'kontakt.p1':"You can drop into the studio at Orkdalsveien 25 during opening hours, or call us for large orders such as weddings and funeral sprays. For smaller bouquets it's easiest to send a message or order directly.",

    'kontakt.label.address':'Address',
    'kontakt.label.phone':  'Phone',
    'kontakt.label.email':  'Email',
    'kontakt.label.hours':  'Opening hours',

    'kontakt.address':'Orkdalsveien 25, 7300 Orkanger',
    'kontakt.phone':  '+47 72 48 11 22',
    'kontakt.email':  'post@floralelilja.no',

    'hours.mon': 'Monday',
    'hours.tue': 'Tuesday',
    'hours.wed': 'Wednesday',
    'hours.thu': 'Thursday',
    'hours.fri': 'Friday',
    'hours.sat': 'Saturday',
    'hours.sun': 'Sunday',
    'hours.closed':'Closed',
    'hours.mon.t':'Closed',
    'hours.tue.t':'10–17',
    'hours.wed.t':'10–17',
    'hours.thu.t':'10–17',
    'hours.fri.t':'10–17',
    'hours.sat.t':'10–14',
    'hours.sun.t':'Closed',

    'kontakt.img.alt':"Studio interior at Florale Lilja with workbench and fresh flowers",

    // === 404 ===
    '404.title':"This page has wilted",
    '404.sub':  "We can't find that page anymore — maybe something else catches your eye?",
    '404.btn':  'Back to home',
  }
};

// === LANGUAGE MANAGEMENT ===
// Classic tier: EN toggle UI commented out in HTML, but translations object is kept intact.
// Set currentLang directly to 'no' so applyTranslations() still resolves keys against the no map.
let currentLang = 'no';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations['no'][key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'IMG') {
      el.alt = val;
    } else if (el.hasAttribute('placeholder')) {
      el.placeholder = val;
    } else if (val.includes('\n')) {
      el.innerHTML = val.split('\n').map(line => line.trim()).join('<br>');
    } else {
      el.textContent = val;
    }
  });

  document.documentElement.lang = currentLang === 'no' ? 'nb' : 'en';

  const toggleEl = document.getElementById('lang-toggle');
  const mobileToggleEl = document.getElementById('mobile-lang-toggle');
  if (toggleEl) toggleEl.textContent = t('nav.lang');
  if (mobileToggleEl) mobileToggleEl.textContent = t('nav.lang');
}

// EN toggle UI is commented out in classic tier — initLangToggle() is not wired.
// Kept here so a one-line uncomment enables it as a paid upgrade.
function toggleLanguage() {
  currentLang = currentLang === 'no' ? 'en' : 'no';
  localStorage.setItem('fl-lang', currentLang);
  applyTranslations();
}

function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  const mobileBtn = document.getElementById('mobile-lang-toggle');
  if (btn) btn.addEventListener('click', toggleLanguage);
  if (mobileBtn) mobileBtn.addEventListener('click', toggleLanguage);
}
*/

// === NAVIGATION ===
function initNav() {
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    // Classic tier: 240px right-anchored dropdown card. No body-scroll lock.
    // Close on outside-click / Escape / link-click.
    function closeMenu() {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', e => {
      if (!mobileMenu.classList.contains('open')) return;
      if (mobileMenu.contains(e.target) || hamburger.contains(e.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMenu();
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPage) link.classList.add('active');
    if (currentPage === '' && href === 'index.html') link.classList.add('active');
  });
}

// === SCROLL ANIMATIONS ===
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// === VIPPS MODAL ===
function initVippsModal() {
  const backdrop = document.getElementById('vipps-modal');
  if (!backdrop) return;

  function openModal() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    backdrop.querySelector('.modal-close-btn').focus();
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.vipps-trigger').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      openModal();
    });
  });

  const closeBtn = backdrop.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });
}

// === FAQ ACCORDION ===
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

// === GALLERY LIGHTBOX ===
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const lightbox = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  if (!lightbox || !lbImg) return;

  let currentIndex = 0;
  const images = Array.from(items).map(item => ({
    src:     item.querySelector('img').src,
    alt:     item.querySelector('img').alt,
    caption: item.dataset.caption || ''
  }));

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;
    lbImg.src = images[currentIndex].src;
    lbImg.alt = images[currentIndex].alt;
    if (lbCaption) lbCaption.textContent = images[currentIndex].caption;
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
    });
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
  });

  document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('lightbox-prev')?.addEventListener('click', () => showImage(currentIndex - 1));
  document.getElementById('lightbox-next')?.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  // Classic tier — i18n + animations disabled (paid upgrades). Uncomment to enable.
  // applyTranslations();
  // initLangToggle();
  initNav();
  // initScrollAnimations();
  initVippsModal();
  initFaq();
  initGallery();

  // document.querySelector('main')?.classList.add('page-fade');
});
