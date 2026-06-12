export const it = {
  nav: {
    concept: "Perché conta",
    styles: "Studi di stile",
    services: "Offerta",
    pricing: "Prezzi",
    process: "Processo",
    contact: "Contatti",
    createPreview: "Parliamone",
    bagLabel: "Piano sito",
  },
  home: {
    hero: {
      eyebrow: "Siti e marketing per ristoranti locali",
      title: "Molti ospiti scelgono il tuo ristorante prima ancora di entrare.",
      intro:
        "Prima ti cercano online — foto, menu, recensioni, orari. VICINO crea siti curati che trasformano quel primo sguardo in una prenotazione, una visita o una richiesta.",
      primaryCta: "Parliamone",
      secondaryCta: "Guarda gli studi di stile",
      microcopy:
        "Anteprima prezzi più sotto — pacchetti chiari, niente preventivi misteriosi.",
    },
    concept: {
      label: "01 / Il momento sul telefono",
      title:
        "Il tuo ristorante viene giudicato sul telefono prima che al tavolo.",
      text: "Di solito un ospite non legge tutto. Controlla in fretta: atmosfera, menu, orari, posizione e quanto è facile prenotare o scriverti.",
      cta: "Guarda gli studi di stile →",
      microcopy: "L’obiettivo è semplice: rendere ovvio il prossimo passo.",
      stats: [
        { value: 73, suffix: "%", label: "ti cerca online prima di scegliere dove mangiare" },
        { value: 88, suffix: "%", label: "giudica la credibilità del locale prima sul telefono" },
        { value: 2, suffix: "×", label: "più voglia di prenotare con un sito chiaro e veloce" },
      ],
      checks: [
        {
          title: "Trovato subito",
          text: "Posizione, orari e pagine facili da trovare aiutano gli ospiti a sceglierti prima di passare oltre.",
        },
        {
          title: "Sembra aggiornato",
          text: "Visual curati fanno percepire il locale vivo, seguito e meritevole di una visita.",
        },
        {
          title: "Risponde alle domande",
          text: "Menu, foto, indicazioni e contatti si trovano velocemente senza cercare troppo.",
        },
        {
          title: "Trasforma interesse in azione",
          text: "Link chiari a WhatsApp, prenotazione o richiesta evitano che l’interesse si perda.",
        },
      ],
      floaters: [
        "Posso vedere il menu?",
        "È aperto stasera?",
        "Posso scrivergli ora?",
      ],
      phone: {
        ariaLabel:
          "Illustrazione di un ospite che confronta un ristorante sul telefono",
        searchLabel: "Ricerca ospite",
        query: "cena vicino a me stasera",
        resultLabel: "Anteprima risultato",
        name: "Il tuo ristorante",
        rating: "4.8",
        description:
          "Atmosfera chiara, menu aggiornato, orari visibili e un modo diretto per prenotare o fare una domanda.",
        previewCards: [
          { icon: "◒", label: "Mood" },
          { icon: "≋", label: "Menu" },
          { icon: "↗", label: "Prenota" },
        ],
        facts: [
          { label: "Aperto", value: "Stasera" },
          { label: "Menu", value: "Aggiornato" },
          { label: "Contatto", value: "WhatsApp" },
        ],
        primaryAction: "Vedi prezzi",
        secondaryAction: "Vedi stili",
      },
    },
    socialProof: {
      label: "Scelti dai locali",
      title: "Ristoranti che volevano essere scelti — non solo scrollati.",
      logos: [
        "Trattoria Lina",
        "Bar Centrale",
        "Gelateria Sole",
        "Kebab 24",
        "Osteria Vicina",
        "Caffè Mattino",
      ],
      testimonials: [
        {
          quote:
            "Gli ospiti hanno iniziato a dire che prenotavano perché il sito sembrava proprio il locale.",
          author: "Marco",
          role: "Titolare trattoria",
        },
        {
          quote:
            "Finalmente sembriamo aperti, aggiornati e facili da raggiungere. Più prenotazioni dal telefono.",
          author: "Giulia",
          role: "Responsabile caffè",
        },
        {
          quote:
            "Menu chiaro e veloce e un pulsante per scrivere al volo. Esatto per la pausa pranzo.",
          author: "Ahmet",
          role: "Street food",
        },
        {
          quote:
            "Sembra nostro, non un template. La gente ricorda i gusti e il sito.",
          author: "Sara",
          role: "Gelateria",
        },
      ],
    },
    worlds: {
      label: "02 / Studi di stile",
      title:
        "Non template. Mondi di brand che mostrano cosa può diventare il tuo ristorante online.",
      text: "Queste direzioni immaginarie mostrano come lo stesso metodo possa cambiare da elegante a familiare, veloce o giocoso — senza far sembrare tutti i ristoranti uguali.",
      switchLabel: "Mostra studio di stile",
      prevLabel: "Studio di stile precedente",
      nextLabel: "Studio di stile successivo",
      staticLabel: "Build statico",
      items: [
        {
          id: "fine-dining",
          palette: "fine",
          label: "Studio di stile 01",
          businessType: "Fine dining",
          theme: "Atmosfera",
          headline:
            "Prima di prenotare, gli ospiti dovrebbero già sentire la serata.",
          description:
            "Ritmo elegante, tipografia raffinata e dettagli cinematografici creano desiderio prima ancora che qualcuno entri dalla porta.",
          takeaway:
            "Per i ristoranti premium, il sito deve far sembrare la prenotazione il passo più naturale.",
          visualTitle: "Prenotazioni con rituale",
          visualText:
            "Superfici scure, contrasti silenziosi e momenti editoriali trasformano il primo contatto in un’esperienza curata.",
          visualChip: "Menu degustazione / 19:30",
          visualStat: "Prenota",
        },
        {
          id: "neighborhood-cafe",
          palette: "cafe",
          label: "Studio di stile 02",
          businessType: "Caffè di quartiere",
          theme: "Familiarità",
          headline:
            "I migliori ristoranti locali sembrano familiari prima ancora di entrare.",
          description:
            "Visual caldi, orari chiari, evidenza del menu e senso del luogo aiutano a trasformare le abitudini in fedeltà.",
          takeaway:
            "Per caffè e locali di quartiere, il sito deve rendere semplice capire il ritmo quotidiano e tornare spesso.",
          visualTitle: "Mattina, pranzo, ritorno",
          visualText:
            "Card morbide, calore materico e dettagli locali fanno sentire il sito parte del quartiere.",
          visualChip: "Aperto oggi / 07:30",
          visualStat: "Visita",
        },
        {
          id: "street-food",
          palette: "street",
          label: "Studio di stile 03",
          businessType: "Kebab & street food",
          theme: "Slancio",
          headline: "Quando il cibo corre veloce, anche il sito deve farlo.",
          description:
            "Menu decisi, percorsi mobile-first, indicazioni chiare e visual energici trasformano la voglia in visita.",
          takeaway:
            "Per i ristoranti quick-service, chiarezza ed energia contano quanto l’atmosfera.",
          visualTitle: "Dalla voglia al banco",
          visualText:
            "Card ad alto contrasto, call to action tipo sticker e gerarchia diretta rendono ovvio il prossimo passo.",
          visualChip: "Offerta pranzo / 12–15",
          visualStat: "Visita",
        },
        {
          id: "gelato",
          palette: "gelato",
          label: "Studio di stile 04",
          businessType: "Gelato e dolci",
          theme: "Gioia",
          headline: "Alcuni ristoranti dovrebbero sembrare una piccola festa.",
          description:
            "Palette giocose, forme arrotondate, contenuti sui gusti e dettagli amichevoli rendono un piccolo piacere più condivisibile e memorabile.",
          takeaway:
            "Per i luoghi amati dalle famiglie, la memorabilità è uno strumento di crescita — non decorazione.",
          visualTitle: "Gusti che restano in mente",
          visualText:
            "Sistemi pastello, movimento morbido e card allegre rendono l’esperienza digitale generosa e ripetibile.",
          visualChip: "Pistacchio / novità",
          visualStat: "Condividi",
        },
      ],
    },
    services: {
      label: "03 / Offerta",
      title: "I dettagli digitali che aiutano le persone a sceglierti.",
      text: "VICINO unisce design del sito, atmosfera di brand, visibilità locale e supporto al lancio in un percorso chiaro per ristoranti.",
      items: [
        {
          icon: "✦",
          title: "Design e sviluppo sito",
          text: "Siti Astro veloci e responsive, con layout mobile e struttura multilingua inclusi dall’inizio.",
          details: [
            "Mobile-first",
            "Build statico",
            "Percorso contatto",
            "Lancio rapido",
          ],
        },
        {
          icon: "◐",
          title: "Atmosfera di brand",
          text: "Direzione visiva, tono, colori, tipografia e sistemi di layout che sembrano su misura, non generici.",
          details: [
            "Direzione mood",
            "Sistema type",
            "Token colore",
            "Ritmo sezioni",
          ],
        },
        {
          icon: "⌖",
          title: "Visibilità locale",
          text: "Struttura SEO-friendly, metadata localizzati, base analytics e informazioni pronte per Google.",
          details: ["SEO locale", "Schema base", "Analytics", "Google-ready"],
        },
      ],
    },
    pricing: {
      label: "04 / Anteprima prezzi",
      title: "Costruisci un piano chiaro per il sito del ristorante.",
      text: "Scegli ciò che serve ora al tuo ristorante. Il totale si aggiorna subito con prezzi di pacchetto chiari, mentre le funzioni future restano visibili ma non disponibili.",
      helperTitle: "Come funziona",
      helperText:
        "La base è sempre inclusa. Aggiungi i moduli utili adesso; le idee non ancora pronte sono segnate come coming soon e non entrano nel totale.",
      totalLabel: "Totale stimato",
      includedLabel: "Incluso",
      selectedLabel: "Selezionato",
      comingSoonLabel: "Coming soon",
      unavailableLabel: "Non disponibile ora",
      sendPlan: "Parliamone",
      modulesLabel: "Moduli",
      addonsLabel: "Extra",
      presetsLabel: "Punti di partenza tipici",
      presets: [
        {
          title: "Starter caffè",
          text: "Una prima versione chiara per locali di quartiere che hanno bisogno di orari, menu e fiducia nella ricerca locale.",
          price: 1330,
          items: ["Foundation", "Menu digitale", "Fatti trovare"],
          optionIds: ["digital-menu", "get-found"],
        },
        {
          title: "Ristorante premium",
          text: "Una rotta curata per ristoranti dove atmosfera, prenotazione e presentazione contano di più.",
          price: 1590,
          items: ["Foundation", "Design premium", "Prenotazioni"],
          optionIds: ["design-animation", "reservations"],
        },
        {
          title: "Presenza locale completa",
          text: "Un pacchetto più ampio per ristoranti che vogliono struttura, visibilità, foto e spazio per crescere.",
          price: 1740,
          items: ["Foundation", "Sito completo", "Fatti trovare", "Gallery"],
          optionIds: ["site-structure", "get-found", "gallery-reviews"],
        },
      ],
      base: {
        title: "Foundation",
        price: 690,
        description:
          "Base obbligatoria: layout mobile, struttura multilingua, una landing page, SEO base, SSL, setup hosting, blocco contatti, mappa, form e link social.",
      },
      modules: [
        {
          id: "site-structure",
          title: "Struttura sito completa",
          price: 450,
          status: "available",
          description:
            "Struttura multi-pagina con About/Storia, shell pagina menu, navigazione, footer completo e copy di sezione.",
        },
        {
          id: "design-animation",
          title: "Design premium e animazione",
          price: 550,
          status: "available",
          description:
            "Direzione visiva premium, layout custom, hover state e animazioni scroll leggere.",
        },
        {
          id: "digital-menu",
          title: "Menu digitale",
          price: 290,
          status: "available",
          description:
            "Menu strutturato con categorie, allergeni, filtri dietetici e foto dei piatti.",
        },
        {
          id: "reservations",
          title: "Prenotazioni",
          price: 350,
          status: "available",
          description:
            "Form o widget di prenotazione, flusso di conferma e note sulla disponibilità.",
        },
        {
          id: "orders-delivery",
          title: "Ordini e delivery",
          price: null,
          status: "coming-soon",
          description:
            "Percorsi ordine online, carrelli, messaggi per asporto e flussi aggregatori sono pianificati ma non disponibili ora.",
        },
        {
          id: "get-found",
          title: "Fatti trovare",
          price: 350,
          status: "available",
          description:
            "SEO locale, schema, metadata geografici, termini locali indicizzabili, GA4 e base Meta Pixel.",
        },
        {
          id: "gallery-reviews",
          title: "Gallery e recensioni",
          price: 250,
          status: "available",
          description:
            "Gallery fotografica e recensioni Google. I video marketing generati con AI arriveranno più avanti.",
        },
        {
          id: "events",
          title: "Eventi",
          price: 180,
          status: "available",
          description:
            "Pagina eventi, form richieste e calendario o lista semplice.",
        },
      ],
      addons: [
        {
          id: "custom-animations",
          title: "Animazioni custom",
          price: 150,
          status: "available",
          description:
            "Movimento extra oltre al modulo design, mantenuto veloce e accessibile.",
        },
        {
          id: "copywriting",
          title: "Copywriting conversione premium",
          price: 250,
          status: "available",
          description: "Copy done-for-you oltre al normale copy di sezione.",
        },
        {
          id: "google-profile",
          title: "Setup Google Business Profile",
          price: 290,
          status: "available",
          description:
            "Setup o pulizia una tantum per ristoranti assenti o poco curati su Google.",
        },
        {
          id: "advanced-booking",
          title: "Prenotazioni avanzate",
          price: null,
          status: "coming-soon",
          description:
            "Depositi, gestione tavoli e regole no-show sono previsti per una fase successiva.",
        },
        {
          id: "loyalty",
          title: "Programma fedeltà",
          price: null,
          status: "coming-soon",
          description:
            "Strumenti futuri per far tornare i clienti. Per ora solo roadmap.",
        },
        {
          id: "membership",
          title: "Area membership",
          price: null,
          status: "coming-soon",
          description:
            "Area clienti o contenuti riservati. Non disponibile ora.",
        },
      ],
      future: {
        title: "AI Assistant — risposte, prenotazioni, chiamate",
        status: "coming-soon",
        description:
          "Un futuro livello AI per chiamate, messaggi, FAQ e flussi di prenotazione dopo aver consolidato la base sito.",
      },
    },
    process: {
      label: "05 / Processo",
      title: "Una collaborazione chiara dalla prima impressione al lancio.",
      items: [
        {
          title: "Scopriamo l’atmosfera",
          text: "Conosciamo ristorante, ospiti, menu, quartiere e momenti che dovrebbero definire l’esperienza digitale.",
        },
        {
          title: "Diamo forma alla direzione",
          text: "Trasformiamo il contesto in una rotta creativa: struttura pagine, linguaggio visivo, priorità contenuto e scope di lancio.",
        },
        {
          title: "Costruiamo il sito",
          text: "Creiamo un sito static-first, responsive e localizzato, con layout mobile e struttura multilingua inclusi.",
        },
        {
          title: "Lanciamo e rifiniamo",
          text: "Pubblichiamo, rifiniamo e individuiamo i prossimi miglioramenti marketing utili per il ristorante senza complicare il sistema.",
        },
      ],
    },
    finalCta: {
      label: "Inizia",
      title: "Pronto a costruire un sito che sembri il tuo ristorante?",
      text: "Raccontaci il tuo ristorante, caffè, bar, gelateria o street-food spot. Ti aiutiamo a creare una presenza digitale curata, memorabile e utile per ospiti reali.",
      primaryCta: "Parliamone",
      secondaryCta: "Rivedi gli studi",
    },
  },
  footer: {
    contact: "Contatti",
    follow: "Seguici",
    legal: "Termini",
    terms: "Termini",
    privacy: "Privacy Policy",
    cookies: "Cookie Policy",
    comingSoon: "In arrivo",
  },
  seo: {
    title: "VICINO — Siti premium per ristoranti e caffè",
    description:
      "VICINO crea siti curati e identità digitali per ristoranti, caffè, bar, gelaterie e street-food spot che vogliono distinguersi online.",
  },
};
