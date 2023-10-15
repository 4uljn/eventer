import { createStore } from "vuex";

export default createStore({
  state: {
    events: [
      {
        id: 1,
        name: "Open Rhythm",
        city: "Milano",
        price: "Gratis",
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }), // Formatta la data come 'yyyy-MM-dd'
        category: "DJ",
        at: "Ex Macello",
        image: require("@/assets/media/open_rhythm.jpeg"),
        description:
          "Open Rhythm by CULT x Belli di Notte torna per l'ultima volta sul dancefloor dell'Ex Macello il 12/10/2023. 7 ore di musica tra dj set ed esibizioni live. ",
        further_details:
        "this is a 16+ event",
        age: "16+",
        presentedBy: "CULT",
        disponibilita: 0,
      },
      {
        id: 2,
        name: "Jungla • First Release Party",
        city: "Milano",
        price: "Gratis",
        date: new Date("2023-10-19").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }), // Formatta la data come 'yyyy-MM-dd'
        category: "party",
        at: "ARCA",
        image: require("@/assets/media/jungla.jpeg"),
        description:
          " Il 12 ottobre ci ritroviamo nella sala Bistrot di Arca Milano per festeggiare la nascita di Jungla Records. Un’occasione speciale per iniziare una nuova storia e ascoltare le prime produzioni della nuova label meneghina.",
        further_details:
        "I minori devono essere accompagnati da una persona maggiorenne",
          age: "18+",
        presentedBy: "6AM snc",
        disponibilita: 1,
      },
      {
        id: 3,
        name: "Disco Stupenda w/ Whodamanny & Tommiboy",
        city: "Milano",
        price: 25,
        date: new Date("2023-10-24").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/disco_stupenda.avif"),
        description:
          "Bonobo torna in Italia per un Dj Set imperidbile per una data esclusiva ai Magazzini Generali di Milano, con lui in line up ci sarà il talentuoso produttore italiano tanto amato all'estero Luca Bacchetti ",
        further_details:
        "L'evento potrebbe subire dei ritardi",
        age: "16",
        presentedBy: "6AM snc",
        disponibilita: 2,
      },
      {
        id: 4,
        name: "Purple Disco Machine",
        city: "Milano",
        price: 46,
        date: new Date("2023-10-27").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/purple_disco.jpeg"),
        description:
          "Siamo orgogliosi di presentare in esclusiva nazionale lo show di uno degli artisiti più famosi del pianeta, Purple Disco Machine che ha raggiunto il successo nel 2020 grazie al singolo Hypnotized prodotto in collaborazione con il gruppo Sophie and the Giants e divenuto uno dei tormentoni dell'estate.",
        further_details:
        "questo biglietto è riservato per il primo giorno di evento", 
          age: "18+",
        disponbilita: 3,
        presentedBy: "Tino Piontek",
      },
      {
        id: 5,
        name: "Sneakerness Milan Day1",
        city: "Milano",
        price: 12,
        at: "East End Studios",
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "social",
        image: require("@/assets/media/sneakerness.avif"),
        description:
          "questo ticket e' valido per il primo giorno di evento: 14 ottobre dalle 10 alle 21",
        further_details:
          "PRIORITY TICKET E' VALIDO PER IL PRIMO GIORNO DI EVENTO: 14 OTTOBRE 2023 CON ACCESSO ANTICIPATO ALLE ORE 9 (INVECE CHE ALLE 10) FINO ALLE ORE 21  Europe's leading Sneaker & Lifestyle Convention is coming to Milano! 14-15 OCT 2023 H.10/21 EAST END STUDIOS- MILAN Via Mecenate 88/A BAMBINI GRATIS FINO AI 12 ANNI CON DOCUMENTO DI IDENTITA' ACCESSO AGEVOLATO PER I DISABILI LIBERO ACCESSO AI CANI",
        age: "Tutte le età",
        disponibilita: 4,
        presentedBy:"EAST MARKET MILANO",
      },
      {
        id: 6,
        name: "Pierluca Mariti (Piuttosto_Che) presenta “Niente di che",
        city: "Milano",
        price: 26.28,
        at: "ARCA",
        date: new Date("2023-10-24").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "Artist Signing",
        image: require("@/assets/media/piuttosto_che.jpeg"),
        description:
          "24/10 - Prima Data di Milano del Tour di Presentazione di 'Niente di che' il nuovo romanzo di Pierluca Mariti (PIUTTOSTO_CHE). \n 18.30 Apertura \n 19.30 Presentazione + Firmacopie",
        further_details:
          "Prima e dopo lo Spettacolo presso il Bar / Bistrot di Arca Milano sarà possibile mangiare e bere qualcosa nell'attesa oppure rilassarsi per quattro chiacchere dopo la presentazione.",
        age: "Tutte le età",
        disponibilita: 5,
        presentedBy:"6AM snc",
      },
      {
        id: 7,
        name: "Sneakerness Milan Day2",
        city: "Milano",
        price: 26.28,
        date: new Date("2023-10-15").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "film",
        image: require("@/assets/media/sneakerness2.avif"),
        description:
          " questo ticket e' valido per il secondo giorno di evento: 15 ottobre dalle 10 alle 21",
        further_details:
          "Europe's leading Sneaker & Lifestyle Convention is coming to Milano! 14-15 OCT 2023 H.10/21 EAST END STUDIOS- MILAN Via Mecenate 88/A \n BAMBINI GRATIS FINO AI 12 ANNI CON DOCUMENTO DI IDENTITA' ACCESSO AGEVOLATO PER I DISABILI LIBERO ACCESSO AI CANI",
        age: "Tutte le età",
        disponibilita: 0,
        presentedBy:"EAST MARKET MILANO",
      },
      {
        id: 8,
        name: "Parra for Cuva LIVE",
        city: "Milano",
        price: 26.28,
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "film",
        image: require("@/assets/media/parraforcura.avif"),
        age: "12",
        presentedBy: "east market Milano",
        further_details:
        "questo biglietto è valido per il terzo giorno di evento",
        description:
          " questo ticket e' valido per il terzo giorno di evento: 19 ottobre dalle 10 alle 21",
        disponibilita: 1,
      },
      {
        id: 9,
        name: "Valerio Vaudano aka Vaudafunk dj set",
        city: "Milano",
        price: 26.28,
        at: "Clèr",
        date: new Date("2023-10-7").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/valerio.avif"),
        age: "18+",
        description:
          " questo ticket e' valido per il terzo giorno di evento: 20 ottobre dalle 10 alle 21",
        further_details:
        "evento riservato ai maggiorenni",  
        disponbilita: 2,
        presentedBy:"east market Milano",
      },

      {
        id: 10,
        name: "No More what’s next",
        city: "Milano",
        price: 26.28,
        at: "Apollo Club Milano",
        date: new Date("2023-10-7").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/nomore.avif"),
        age: "16",
        disponbilita: 3,
        description:
        "Il biglietto è valido per il secondo giorno di evento",
        further_details:
        "L'evento prevede un drink gratuito a testa",
        presentedBy:"OGR Milano",
      },

      {
        id: 11,
        name: "Take It Easy: DJ BORING + DJLMP + Ilaria Gr",
        city: "Milano",
        price: 11.32,
        at: "Tunnel Club",
        date: new Date("2023-10-19").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        age: "tutte le età",
        category: "dj",
        image: require("@/assets/media/takeiteasy.avif"),
        description:
          'Ti ricordiamo che per accedere è obbligatoria la tessera Arci, per farla ti consigliamo di compilare la preadesione online sul nostro sito ',
        further_details:
          "Prima e dopo lo Spettacolo sarà possibile bere drink",
        disponbilita: 4,
        presentedBy:"OGR Milano",
      },

      {
        id: 12,
        name: "La Clèr Open Jam",
        city: "Milano",
        price: 26.28,
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/la_cler.jpeg"),
        description:
          " Quartetto base composto da batteria, basso, chitarra e tastiere che aprirà lo spettacolo, poi i musicisti dello Studio La Sabbia lasceranno il passo a chiunque voglia suonare uno dei loro strumenti creando una situazione armoniosa e inclusiva.",
        further_details:
          "Vuoi suonare uno strumento diverso? Portalo e raggiungilo sul palco. Vuoi cantare? Porta te stesso e raggiungili sul palco.",
        age: "18+",
        presentedBy: "Clèr",
        disponbilita: 5,
      },

      {
        id: 13,
        name: "Arto Lindsay - JAZZMI 2023",
        city: "Milano",
        price: "gratis",
        at: "Armani / Silos",
        date: new Date("2023-10-19").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        age: "16",
        image: require("@/assets/media/arto.avif"),
        description:
        "questo biglietto è valido per il primo giorno di evento",
        further_details:
        "L'evento inizierà un'ora dopo l'orario inizialmente previsto",
        disponbilita: 0,
        presentedBy: "Zebulon",
      },

      {
        id: 14,
        name: "BABYMETAL UK & EU Tour 2023 + WARGASM ",
        city: "Milano",
        price: 46,
        at: "Fabrique",
        date: new Date("2023-10-19").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        age: "17",
        image: require("@/assets/media/babymetal.avif"),
        disponibilita: 1,
        description:
        "questo biglietto è valido per il terzo giorno di evento",
        further_details:
        "Una bevanda in omaggio con l'acquisto del biglietto",
        presentedBy:"La Fabrique",
      },
      {
        id: 15,
        name: "Adult Fireworks Entry Tickets only",
        city: "London",
        price: 17,
        date: new Date("2023-11-04").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/fireworks.jpeg"),
        at: "Alexandra Palace",
        description:
        " Entry to the Fireworks Festival and German Bier Festival (excludes Ice Skating). Adults over the age of 18 only. Please bring a valid ID with you..",
        further_details:
        "Level up your bonfire night experience and join us in the Palace’s Great Hall for the UK’s largest German Bier Festival!",
        disponbilita: 3,
        presentedBy:"Alexandra Palace",
      },
      {
        id: 16,
        name: "Los Campesinos!",
        city: "London",
        price: 9,
        date: new Date("2024-02-17").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/campesinos.jpeg"),
        at: "Troxy",
        disponbilita: 4,
        description:
        "Entry to the best party of London! Adults over the age of 18 only. Please bring a valid ID with you.",
        further_details:
        "Live the greatest experience!",
        presentedBy: "Troxy",
      },
      {
        id: 17,
        name: "Gauchoworld",
        city: "London",
        price: "Gratis",
        date: new Date("2023-10-13").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/gauchoworld.jpeg"),
        at: "EartH",
        disponbilita: 5,
        age:"18+",
        description:
        "Adults over the age of 18 only. Please bring a valid ID with you.",
        further_details:
        "Music, drink and more!",
        presentedBy: "Troxy",
      },
      {
        id: 18,
        name: "MASIWEI 2023 WORLD TOUR - The Grand Finale",
        city: "London",
        price: 87.3,
        age:"17",
        date: new Date("2023-10-22").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/masiwei.jpeg"),
        description:
        "Masiwei is finally making his way to London for the final stop of his sold out 2023 World Tour!",
        further_details:
        "Masiwei is one of the most recognised and celebrated names in the Chinese hip-hop scene with over 2.2 million following on Weibo and 1.8 million on TikTok.",
        at: "Troxy",
        disponbilita: 0,
      },
      {
        id: 19,
        name: "ROAST",
        city: "London",
        price: 22,
        age:"18+",
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/roast.jpeg"),
        at: "Electrowerkz",
        disponbilita: 1,
        description:
        "Bears, cubs, chubs, chasers, muscle bears, trans men, muscle men, and admirers. 7 DJ'S, 5 rooms, 1 big darkroom",
        further_details:
        "Men only. LAST ENTRY 3AM - NO PHYSICAL ID = NO ENTRY. 18+.",
        presentedBy:"ROAST & The Electrowerkz",
      },
      {
        id: 20,
        name: "LICK HALLOWEEN LONDON",
        city: "London",
        price: 20,
        age:"17",
        date: new Date("2023-10-27").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/halloween.jpeg"),
        at: "Fire & Lightbox",
        disponbilita: 2,
        description:
        "Venue is wheelchair accessible with a disabled toilet. A free carer ticket is available please contact us directly to confirm",
        further_details:
        "Please note: LICK is filmed and photographed for promotional purposes. If you do not wish to be on camera please approach us politely on the night and let us know",
        presentedBy:"LICK Events",
      },
      {
        id: 21,
        name: "YUGYEOM",
        city: "London",
        price: 56.5,
        age:"17",
        date: new Date("2023-11-02").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/yugyeom.jpeg"),
        at: "Troxy",
        disponbilita: 3,
        description:
        "YUGYEOM, a rising South Korean artist under AOMG, is a former GOT7 member who has transitioned into a dynamic solo career. His music effortlessly blends R&B, HIP-HOP, and POP, showcasing his smooth vocals and captivating choreography",
        further_details:
        "With a magnetic stage presence, YUGYEOM is making a mark in the K-POP and R&B scene.",
        presentedBy:"Magic Sound Entertainment"
      },
      {
        id: 22,
        name: "Stone Island Presents London",
        city: "London",
        price: "Gratis",
        age:"16",
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/stone.jpeg"),
        description:
        "This is a 16+ event. You may be asked to prove your age and if you’re unable to show valid ID, you may be refused entry.",
        further_details:
        "All tickets to shows at Islington Assembly Hall are subject to a Venue Levy of £1 + VAT.",
        presentedBy: "AGMP",
        at: "Roundhouse",
        disponbilita: 4,
      },
      {
        id: 23,
        name: "Gruff Rhys: Live + Signing",
        city: "London",
        age:"16",
        price: 14.44,
        date: new Date("2024-01-29").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/gruff.jpeg"),
        description:
        "Mutations Festival is part of Bershka x DICE moved by music",
        further_details:
        "Day tickets and Weekend Tickets are available",
        presentedBy:"FORM x Bershka",
        at: "Rough Trade East",
        disponbilita: 5,
      },
      {
        id: 24,
        name: "The Vaccines: Live + Signing (3pm Doors)",
        city: "London",
        price: 15.54,
        age:"14+",
        date: new Date("2024-01-14").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/vaccines.jpeg"),
        at: "Rough Trade East",
        description:
        "Rough Trade is very excited to present a live outstore performance from The Vaccines at CONTENT Liverpool.",
        further_details:
        "This is a 14+ event",
        presentedBy:"Rough Trade",
        disponbilita: 0,
      },
      {
        id: 25,
        name: "The Last Dinner Party",
        city: "London",
        age:"14+",
        price: 30.09,
        date: new Date("2024-02-01").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/dinner.jpeg"),
        at: "Roundhouse",
        presentedBy:"Live Nation",
        description:
        "From serenading the dimly-lit corners of East London pubs to Courting interest from several major record labels.",
        further_details:
        "This is a 14+ event. Each under 18 must be accompanied by a responsible adult who is over 21.",
        disponbilita: 1,
      },
      {
        id: 26,
        name: "House Of Trash - Ft. Luke Solomon",
        city: "London",
        age:"17",
        price: 22,
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/trash.jpeg"),
        presentedBy:"Live Trash Center",
        description:
        "From great music comes great vibes",
        further_details:
        "This is a 17+ event. Each under 18 must be accompanied by a responsible adult who is over 21.",
        at: "Electrowerkz",
        disponbilita: 2,
      },
      {
        id: 27,
        name: "Swing & Bass: The Final Curtain",
        city: "London",
        age:"17",
        price: 11.64,
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/curtain.jpeg"),
        at: "Hootananny Brixton",
        description:
        "Hilary stands for victory. Swing stands for Bass!",
        further_details:
        "This is a 17+ event. Each under 18 must be accompanied by a responsible adult who is over 21.",
        presentedBy:"HIGH-LO",
        disponbilita: 3,
      },
      {
        id: 28,
        name: "Club Renaissance: The Visuals Edition",
        city: "London",
        age:"14+",
        price: 11.64,
        date: new Date("2023-11-11").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/renaissance.jpeg"),
        description:
        "Renaissance? A visaul edition for middle class men!",
        further_details:
        "For Fans Only. A must-have event",
        at: "Venue MOT Unit 18",
        presentedBy:"Michieline Studios",
        disponbilita: 4,
      },
      {
        id: 29,
        name: "King Krule",
        city: "London",
        price: 27.75,
        age:"14+",
        date: new Date("2023-10-09").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/krule.jpeg"),
        description:
        "Do you want to know who is the King?",
        further_details:
        "Event for Eventers!",
        at: "Eventim Apollo",
        presentedBy:"Wells Office Rules",
        disponbilita: 5,
      },
      {
        id: 30,
        name: "ChoirCo",
        city: "London",
        price: 17.85,
        age:"14+",
        date: new Date("2023-12-09").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/choirco.jpeg"),
        at: "EartH",
        description:
        "Songs you sing in the shower, scream at your cousin’s wedding, howl on the dancefloor at 2am. ChoirCo presents (Taking The Guilt Out Of) Guilty Pleasures: a celebration of all of those songs you’re too afraid to admit you really love.",
        further_details:
        "This is a 14+ event. Each under 18 must be accompanied by a responsible adult who is over 21.",
        presentedBy:"ChoirCo",
        disponbilita: 0,
      },
      {
        id: 31,
        name: "GAIKA: Live + Signing",
        city: "London",
        price: "Gratis",
        age:"16",
        date: new Date("2023-11-16").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/gaika.jpeg"),
        at: "Rough Trade East",
        presentedBy:"Slott Nation",
        Description:
        "Live a superior Event, Live and signing, meet your favourite artist!",
        further_details:
        "This is a 16+ event",
        disponbilita: 1,
      },
      {
        id: 32,
        name: "elrow: Basel Week 2023",
        city: "Miami",
        price: 54.06,
        age:"16+",
        date: new Date("2023-12-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/elrow.jpeg"),
        at: "Factory Town",
        disponbilita: 2, 
        Description:
        "Apertura porte14:00 GMT",
        further_details:
        "This is a 16+ event",
        presentedBy:"The Warehouse Project",
      },
      {
        id: 33,
        name: "John Summit & Fatboy Slim",
        city: "Miami",
        price: 75,
        age:"16+",
        date: new Date("2023-12-06").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/summit.jpeg"),
        at: "Club Space Miami",
        disponbilita: 3,
        description:
        "John Summit’s fiery kicks, deep basslines and rapid BPMs have landed him coveted slots at Coachella, Lollapalooza, Tomorrowland and Parklife.",
        further_details:
        "16+ event",
        presentedBy:"Club Space Miami",
      },
      {
        id: 34,
        name: "4:20 Space Yoga",
        city: "Miami",
        price: "Gratis",
        age:"14+",
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "wellbeing",
        image: require("@/assets/media/yoga.jpeg"),
        at: "Club Space Miami",
        description:
        "Temporary event!",
        further_details:
        "Doors at 10pm. 21+ Valid ID required.",
        disponbilita: 4,
        presentedBy:"New Jolie",
      },
      {
        id: 35,
        name: "Mochakk & HAAi",
        city: "Miami",
        age:"21+",
        price: 28.66,
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/haai.jpeg"),
        description:
        "For table reservations please text: 915.229.5619 or visit: jandkpresent.com",
        further_details:
        "This is a 21+ event.",
        presentedBy:" J&K Present",
        at: "Club Space Miami",
        disponbilita: 5,
      },
      {
        id: 36,
        name: "Italian HIT Week",
        city: "Miami",
        price: "Gratis",
        age:"14+",
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/italian.jpeg"),
        at: "Miami Beach Bandshell",
        description:
        "For table reservations please text: 467.666.2102 or visit: tozzistudios.com",
        further_details:
        "This is a 14+ event.",
        disponbilita: 0,
        presentedBy:"TOZZI STUDIOS",
      },
      {
        id: 37,
        name: "ACTION BRONSON PRESENTS: DR. BACHLAVA AND HUMAN GROWTH HORMONE",
        city: "Miami",
        age:"17",
        price: 53.56,
        date: new Date("2023-12-08").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        description:
        "ACTION BRONSON PRESENTS: DR. BACHLAVA AND HUMAN GROWTH HORMONE - Presented by Murmrr x LPR - Live at Miami Beach Bandshell on Friday",
        further_details:
        "Catch a special performance from Action Bronson and his full live band",
        image: require("@/assets/media/bachlava.jpeg"),
        at: "Miami Beach Bandshell",
        presentedBy:"Murmrr x LPR",
        disponbilita: 1,
      },
      {
        id: 38,
        name: "Jam Cruise 20 Official Pre-Party ft. Karl Denson's Tiny Universe, Cool Cool Cool, DJ Logic & Electric Kif",
        city: "Miami",
        age:"18+",
        price: 48.41,
        date: new Date("2024-02-24").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/jam.jpeg"),
        at: "Miami Beach Bandshell",
        description:
        "Join us as we kick off the Jam Cruise 20 festivities with a Pre Party under the palm trees at the Miami Beach Bandshell, featuring longtime Jam Cruise favorites, Karl Denson's Tiny Univer",
        further_details:
        "Food & beverage are available for purchase at the show.",
        presentedBy:" GMP Live",
        disponbilita: 2,
      },
      {
        id: 39,
        name: "Sam Gellaitry",
        city: "Miami",
        price: 26.45,
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/sam.jpeg"),
        description:
        "Listen music, live the event!",
        further_details:
        "Food & beverage are available for purchase at the show.",
        at: "The Ground Miami",
        presentedBy:"Holland",
        disponbilita: 3,
      },
      {
        id: 40,
        name: "Kevin Kaarl",
        city: "Miami",
        age:"14+",
        price: 41.2,
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/kevin.jpeg"),
        at: "Miami Beach Bandshell",
        description:
        "Performer carismatico e talentuoso, capace di coinvolgere il pubblico con la sua presenza sul palco",
        further_details:
        "This is an 14+ event",
        presentedBy:"MaguireEvent",
        disponbilita: 4,
      },
      {
        id: 41,
        name: "Sundays are Lucky with Cocodrills & Friends",
        city: "Miami",
        age:"21+",
        price: "Gratis",
        date: new Date("2023-10-08").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/cocodrills.jpeg"),
        description:
        "Longest running Sunday house music party in Miami",
        further_details:
        "Nessuna documentazione Covid-19 richiesta all’ingresso",
        at: "1800-Lucky",
        presentedBy:"Humans Alike & AmpOne",
        disponbilita: 5,
      },

      {
        id: 42,
        name: "Friends & Disco: Day Gala",
        city: "San Diego",
        price: "Gratis",
        age:"16+",
        date: new Date("2023-10-21").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/friends.jpeg"),
        at: "JuneShine Ranch",
        description:
        "Welcome to Day Gala; Enjoy JuneShine beverages and house music all day long from the minds of Friends & Disco",
        further_details:
        "Follow @Friendsanddisco on Instagram for Updates",
        presentedBy:"Friends & Disco.",
        disponbilita: 0,
      },
      {
        id: 43,
        name: "Daisy Chain #14 w/ Lab Group",
        city: "San Diego",
        price: 42.75,
        age:"17+",
        date: new Date("2023-11-18").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/daisy.jpeg"),
        at: "WICKED WEST (open air)",
        description:
        " Daisy, beverages and house music all day long from the minds!",
        further_details:
        "this is a 17+ event",
        presentedBy:"Numa Studios",
        disponbilita: 1,
      },
      {
        id: 44,
        name: "Disclosure vs. Fred Again.. Tribute Dance Party",
        city: "San Diego",
        age:"21+",
        price: "Gratis",
        date: new Date("2023-12-30").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/disclosure.jpeg"),
        at: "Soda Bar",
        description:
        "Get ready to immerse yourself in the music of Disclosure and Fred Again.",
        further_details:
        "Song requests are welcome on Instagram",
        presentedBy:" Soda & Club Blush",
        disponbilita: 2,
      },
      {
        id: 45,
        name: "Soda’s 15 Year Anniversary: Weatherbox, Positioner, Future Crooks",
        city: "San Diego",
        age:"21+",
        price: 12,
        date: new Date("2023-11-11").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/soda.jpeg"),
        description:
        "Filming / livestream by Half Way Home.",
        further_details:
        "This is a 21+ event w/ valid ID at Soda Bar - San Diego",
        presentedBy:"Soda Bar",
        at: "Soda Bar",
        disponbilita: 3,
      },
      {
        id: 46,
        name: "Teenage Wrist, Spiritual Cramp, Heavenward, Slow Joy",
        city: "San Diego",
        age:"18+",
        price: 27.81,
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/teenage.jpeg"),
        at: "Soda Bar",
        description:
        "Teenage Wrist est un groupe difficile à définir. Au cours des huit dernières années, le groupe a continuellement fait évoluer son son, un processus qui culmine avec leur troisième album Still Love",
        further_details:
        "Nessuna documentazione Covid-19 richiesta all’ingresso",
        presentedBy:
        "Soda Bar",
        disponbilita: 4,
      },
      {
        id: 47,
        name: "Luna Luna & Michael Seyer w/ Pincey",
        city: "San Diego",
        age:"16+",
        price: 25.75,
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/luna.jpeg"),
        at: "Quartyard",
        presentedBy:"Quartyard",
        description:
        "Live the gigs with Luna Luna",
        further_details:
        "This is a 16+ event",
        disponbilita: 5,
      },
      {
        id: 48,
        name: "underscores w/ Jedwill",
        city: "San Diego",
        age:"18+",
        price: 22.15,
        date: new Date("2023-10-28").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/underscores.jpeg"),
        at: "Soda Bar",
        description:
        "Beverage and food, music and good vibes!",
        further_details:
        "this is a 18+ event",
        presentedBy:"Soda Bar",
        disponbilita: 0,
      },
      {
        id: 49,
        name: "Claud",
        city: "San Diego",
        price: "Gratis",
        age:"21+",
        date: new Date("2023-10-19").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/claud.jpeg"),
        at: "The Loft @ UC San Diego",
        description:
        "Freestyle programme of Diego Festival in partnership with VibesVultures.",
        further_details:
        "this is a 21+ event",
        presentedBy:"The Loft @ UC San Diego",
        disponbilita: 1,
      },
      {
        id: 50,
        name: "Frankie and the Witch Fingers w/ Monsterwatch",
        city: "San Diego",
        age: "18",
        price: 25.24,
        date: new Date("2023-10-27").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/frankie.jpeg"),
        at: "Quartyard",
        presentedBy:"Quartyard",
        description:
        "Magic night with Frankie and the Witch Fingers w/ Monsterwatch",
        further_details:
        "this is a 18+event",
        disponbilita: 2,
      },
      {
        id: 51,
        name: "Christopher",
        city: "San Diego",
        price: 26.78,
        age: "16+",
        date: new Date("2024-01-25").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/christopher.jpeg"),
        description:
        "Christopher gigs are not over!",
        further_details:
        "this is a 16+ event",
        at: "Soda Bar",
        presentedBy:"Soda Bar",
        disponbilita: 3,
      },
      {
        id: 52,
        name: "CircoLoco Ibiza - The Day After",
        city: "Ibiza",
        age:"17",
        price: 54,
        date: new Date("2023-10-10").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/circo.jpeg"),
        at: "DC-10",
        presentedBy:"DC-10",
        description:
        " It’s a profound new journey into sound and tripped-out visions: “from Ibiza, for Ibiza”",
        further_details: 
        "this is a 17+ event",
        disponbilita: 2,
      },
      {
        id: 53,
        name: "Pyramid Closing Party 8th October",
        city: "Ibiza",
        price: 65,
        age:"21+",
        date: new Date("2023-10-08").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/pyramid.jpeg"),
        description:
        "Stay tuned for more information!",
        further_details:
        "this is a 21+event",
        at: "Amnesia Ibiza",
        presentedBy:"Amnesia Ibiza",
        disponbilita: 4,
      },
      {
        id: 54,
        name: "Amnesia Closing Party",
        city: "Ibiza",
        price: 92,
        age:"17",
        date: new Date("2023-10-14").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/amnesia.jpeg"),
        description:
        "Ibiza's Closing Party Night Fever!",
        further_details:
        "Party Night ",
        at: "Amnesia Ibiza",
        presentedBy:"Amnesia Ibiza",
        disponbilita: 3,
      },
      {
        id: 55,
        name: "The Ritual with Anané and Louie Vega Closing",
        city: "Ibiza",
        age:"18",
        price: 30,
        date: new Date("2023-10-11").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/ritual.jpeg"),
        at: "Club ChinoisClub Space Miami",
        presentedBy:"Club ChinoisClub Space Miami",
        description:
        "Stay tuned for more information!",
        further_details:
        "this is a 18+ event",
        disponbilita: 5,
      },
      {
        id: 56,
        name: "Kisstory",
        city: "Ibiza",
        age:"16+",
        price: 30,
        date: new Date("2023-10-10").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/kisstory.jpeg"),
        description:
        "Stay tuned for more information!",
        further_details:
        "this is a 16 +event",
        at: "O Beach Ibiza",
        presentedBy:"Dedej Events",
        disponbilita: 4,
      },
      {
        id: 57,
        name: "Club Chinois Presents Groove Armada",
        city: "Ibiza",
        age: "16+",
        price: 35,
        date: new Date("2023-10-08").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/armada.jpeg"),
        description:
        "this event will take place on 10-08",
        further_details:
        "this is a 16+event",
        at: "Club Chinois",
        presentedBy:"Hornet",
        disponibilita: 2,
      },
      {
        id: 58,
        name: "Club Chinois presents UNA MÀS",
        city: "Ibiza",
        price: 30,
        age:"17+",
        date: new Date("2023-10-16").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/una.jpeg"),
        at: "Club Chinois",
        description:
        "Stay tuned for more information!",
        further_details:
        "this is a 17 +event",
        presentedBy:"Club Chinois",
        disponbilita: 3,
      },
      {
        id: 59,
        name: "TRIP & Yoyaku",
        city: "Ibiza",
        price: 30,
        age:"18+",
        date: new Date("2023-10-21").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        description:
        "Trip is back for its second season at Club Chinois after the success of its parties in October 2022.",
        further_details:
        "Surreal, psychedelic and trippy, together with a soundtrack provided by some of the best underground DJs in the world.",
        image: require("@/assets/media/trip.jpeg"),
        at: "Club Chinois",
        presentedBy: "Club Chinois",
        disponibilita: 4,
      },
      {
        id: 60,
        name: "Moon Harbour",
        city: "Ibiza",
        price: 30,
        age:"18",
        date: new Date("2023-10-10").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/moon.jpeg"),
        description:
        "HARBOUR, Arms Akimbo, Sylmar @ The Coast",
        further_details:
        "Under 18 Requires Guardian To Enter",
        presentedBy: "Club Chinois",
        at: "Club Chinois",
        disponibilita: 5,
      },
      {
        id: 61,
        name: "Beach Yoga",
        city: "Ibiza",
        age:"18+",
        price: 25.01,
        date: new Date("2023-10-09").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "wellbeing",
        image: require("@/assets/media/beach.jpeg"),
        description:
        "Stay tuned for more info!",
        further_details:
        "this is a 18+ event",
        at: "Beachouse Ibiza",
        presentedBy: "Beachouse Ibiza",
        disponbilita: 0,
      },
      {
        id: 62,
        name: "TX2",
        city: "Cleveland",
        price: 21.63,
        age:"16+",
        date: new Date("2023-11-05").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/tx2.jpeg"),
        description:
        "Rising out of the shadows of a small town known for music, Fort Collins; TX2 brings an unmatchable intensity in his music through the form of powerful raw lyrics and explosive performances",
        further_details:
        "This is a 16+ event, under 16 with legal guardian",
        at: "Mahall's",
        presentedBy:"Mahall's",
        disponibilita: 1,
      },
      {
        id: 63,
        name: "The Aces – I’ve Loved You For So Long World Tour",
        city: "Cleveland",
        price: 30.9,
        age:"21+",
        date: new Date("2023-10-08").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/aces.jpeg"),
        description:
        "Stay tuned for more informations",
        further_details:
        "this is a 21+ event",
        at: "The Roxy",
        presentedBy:"The Roxy",
        disponibilita: 3,
      },
      {
        id: 64,
        name: "SUICIDE SILENCE AND CHELSEA GRIN",
        city: "Cleveland",
        price: 31.93,
        age:"16+",
        date: new Date("2023-10-20").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/silence.jpeg"),
        description:
        "Stay tuned for more informations",
        further_details:
        "this is a 16+ event",
        at: "The Roxy",
        presentedBy:"The Roxy",
        disponibilita: 4,
      },
      {
        id: 65,
        name: "Superheaven",
        city: "Cleveland",
        age:"17",
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/superheaven.jpeg"),
        description:
        "Despite a name change in 2014, Pennsylvanian grunge-revivalist band Superheaven’s (previously Daylight) sound – sludgy, ’90s-inspired, grunge-twinged rock – has remained consistent since they formed in 2007.",
        further_details:
        "this is a 17+ event",
        at: "The Roxy",
        presentedBy:"The Roxy",
        disponbilita: 5,
      },
      {
        id: 66,
        name: "One Direction vs. 5 Seconds of Summer dance party",
        city: "Cleveland",
        age:"14",
        price: 26.78,
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/direction.jpeg"),
        description:"Dance party, music and drinks!",
        further_details:"this is a 14+ event",
        at: "Mahall's",
        presentedBy:"Mahall's",
        disponbilita: 0,
      },
      {
        id: 67,
        name: "Meet Me @ The Altar: Say It To My Face Tour",
        city: "Cleveland",
        price: 32.96,
        age:"16+",
        date: new Date("2023-11-01").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/meet.jpeg"),
        description:
        "Meet Me @ The Altar is an all women of colour rock trio that met on YouTube through their shared love of Paramore and Twenty One Pilots, and formed while spread across three states",
        further_details:
        "this is a 16+ event",
        at: "Mahall's",
        presentedBy: "Mahall's",
        disponibilita: 1,
      },
      {
        id: 68,
        name: "Night Rider",
        city: "Cleveland",
        price: 26.78,
        age:"All ages",
        date: new Date("2023-12-09").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/rider.jpeg"),
        description:
        "Night Rider album release show",
        further_details:
        "All ages event",
        at: "The Roxy",
        presentedBy: "The Roxy",
        disponibilita: 2,
      },
      {
        id: 69,
        name: "Citizen",
        city: "Cleveland",
        price: 33.99,
        age:"18",
        date: new Date("2023-11-24").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/citizen.jpeg"),
        at: "The Roxy",
        description:
        "Headliner 2nd Edition: SINPLUS (full line-up tba).",
        further_details:"this is a 18+ event",
        presentedBy: "The Roxy",
        disponbilita: 3,
      },
      {
        id: 70,
        name: "Scene Queen",
        city: "Cleveland",
        price: 28.84,
        age:"16+",
        date: new Date("2023-11-18").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/scene.jpeg"),
        description:
        "6:00 PM Doors",
        further_details:
        "The Roxy At Mahall's",
        at: "The Roxy",
        presentedBy: "The Roxy",
        disponibilita: 3,
      },
      {
        id: 71,
        name: "Belmont and Can't Swim",
        city: "Cleveland",
        age:"18",
        price: 26.78,
        date: new Date("2023-10-22").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/belmont.jpeg"),
        at: "Mahall's",
        presentedBy: "Mahall's",
        description:
        "With House Parties and Motives",
        further_details:
        "6:00 PM Doors",
        disponibilita: 4,
      },
      {
        id: 72,
        name: "Eliza Rose",
        city: "Dublin",
        price: 24.99,
        age:"16",
        date: new Date("2023-11-11").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/eliza.jpeg"),
        at: "Centre Point",
        presentedBy: "Centre Point",
        description:
        "Eliza Rose is an English DJ, music producer and singer.",
        further_details:
        "this is a 16+ event",
        disponibilita: 5,
      },
      {
        id: 73,
        name: "Ben Klock",
        city: "Dublin",
        price: 24.99,
        age:"18",
        date: new Date("2023-11-10").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/ben.jpeg"),
        description:
        "Techno maestro Ben Klock makes to Dublin this November, marking a highly-anticipated return that has been long overdue since his last appearance in 2019",
        further_details:
        "This is an 18+ event",
        at: "Centre Point",
        presentedBy: "Centre Point",
        disponibilita: 0,
      },
      {
        id: 74,
        name: "Danilo Plessow aka MCDE",
        city: "Dublin",
        age:"18",
        price: 20.5,
        date: new Date("2023-10-07").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/danilo.jpeg"),
        description:
        "stay tuned for more info!",
        further_details:
        "this is a 18+ event",
        at: "Centre Point",
        presentedBy: "Centre Point",
        disponibilita: 1,
      },
      {
        id: 75,
        name: "Gorgon City Salvation Tour",
        city: "Dublin",
        age:"17",
        price: 33.54,
        date: new Date("2023-12-08").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/gorgon.jpeg"),
        description:
        "Doors close at 1:00 AM: Avant Gardner reserves the right, without refund of any amount paid, to refuse admission to guests who arrive after cut off",
        further_details:
        "Cameras and equipment & audio/video recording devices are NOT permitted",
        presentedBy: "Centre Point",
        at: "Centre Point",
        disponibilita: 2,
      },
      {
        id: 76,
        name: "Dom Whiting",
        city: "Dublin",
        price: 23.6,
        age:"16",
        date: new Date("2023-10-21").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/dom.jpeg"),
        description:
        "Dom Whiting returns to Dublin to bring DNB back to Centre Point!",
        further_details:
        "this is a 16+ event",
        at: "Centre Point",
        presentedBy: "Centre Point",
        disponibilita: 3,
      },
      {
        id: 77,
        name: "Daniel Avery",
        city: "Dublin",
        price: 24.99,
        age:"18+",
        date: new Date("2023-11-24").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/avery.jpeg"),
        at: "Centre Point",
        presentedBy: "Centre Point",
        description:
        "Love + light",
        further_details:
        "this is a 18+ event",
        disponibilita: 4,
      },
      {
        id: 78,
        name: "The Love Ball #3 w/ Prymary Colours + more",
        city: "Dublin",
        price: 14,
        age:"14+",
        date: new Date("2023-11-18").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/love.jpeg"),
        description:
        "The LOVE BALL returns to Centre Point for it's third round of all out 80s New York inspired vogue & disco heaven",
        further_details:
        " Room 1: Ball Room",
        at: "Centre Point",
        presentedBy: "Centre Point",
        disponibilita: 5,
      },
      {
        id: 79,
        name: "Taylah Elaine 'In 2 Minds'",
        city: "Dublin",
        price: 11.5,
        age:"18",
        date: new Date("2023-10-14").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/taylah.jpeg"),
        description:
        "When hearing a Taylah Elaine set, you quickly realize you are on a sonic journey filled with high-vibrational music.",
        further_details:
        "this is a 18+ event",
        at: "Centre Point",
        presentedBy:"Centre Point",
        disponibilita: 0,
      },
      {
        id: 80,
        name: "Romare",
        city: "Dublin",
        price: 17,
        age:"18",
        date: new Date("2023-10-27").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/romare.jpeg"),
        description:
        "Beloved for his genre-defying, sample-based house music, Romare returns to Centre Point this October!",
        further_details:
        "This is an 18+ event",
        at: "Centre Point",
        disponibilita: 1,
      },
      {
        id: 81,
        name: "Mano Le Tough",
        city: "Dublin",
        price: 20.5,
        age:"18",
        date: new Date("2023-11-17").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/mano.jpeg"),
        description:
        "Mano Le Tough is an Irish DJ, producer and label owner known for his creative approach to combining techno, house and ambient sounds",
        further_details:"This is an 18+ event",
        at: "Centre Point",
        presentedBy: "Centre Point",
        disponibilita: 2,
      },

      {
        id: 82,
        name: "Making the pure Halloween",
        city: "Philadelphia",
        price: 26.28,
        at: "TRANSCENDENTAL Secret Location",
        date: new Date("2023-12-10").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        age: "18+",
        image: require("@/assets/media/pure_halloween.avif"),
        presentedBy: "TRANSCENDENTAL Secret Location",
        description:
        "Stay tuned for more!",
        further_details:
        "this a 18+ event",
        disponibilita: 2,
      },
      {
        id: 83,
        name: "Pegboy, Flag of Democracy",
        city: "Philadelphia",
        price: 26.28,
        at: "Ukie Club",
        date: new Date("2023-12-10").toLocaleDateString("it-IT", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        age: "17",
        image: require("@/assets/media/pegboy.avif"),
        description:
        "Pegboy is an American punk band from Chicago, Illinois with a relatively large cult following",
        further_details:
        "this is a 17+ event",
        presentedBy: "Ukie Club",
        disponibilita: 3,
      },
      {
        id: 84,
        name: "Ucyll & RYO",
        city: "Lyon",
        price: 15.5,
        date: new Date("2023-13-10").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        at: "La Marquise",
        age: "16",
        description:
        "Stay tuned for more info!",
        further_details:
        "this is a 16+ event",
        image: require("@/assets/media/ucyll.jpeg"),
        presentedBy: "La Marquise",
        disponibilita: 4,
      },
      {
        id: 85,
        name: "Mairo",
        city: "Lyon",
        price: 18.5,
        date: new Date("2023-19-10").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        at: "La Marquise",
        age: "15",
        presentedBy: "La Marquise",
        description:
        "Entouré par SWK, le maire de Genève se déplace avec la crème des rappeurs suisses, un univers de vainqueurs",
        further_details:
        "this is a 15+ event",
        image: require("@/assets/media/Mairo.jpeg"),
        disponibilita: 5,
      },
      {
        id: 86,
        name: "NNEKA",
        city: "Lyon",
        price: 28.5,
        date: new Date("2023-20-10").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        at: "Ninkasi Gerland",
        presentedBy: "Ninkasi Gerland",
        age: "18+",
        image: require("@/assets/media/nneka.jpeg"),
        description:
        "Singing in English, Igbo and Nigerian Pidgin, vocalist and songwriter Nneka has established herself as force in modern soul.",
        further_details:
        "this is a 18+ event",
        disponibilita: 0,
      },
      {
        id: 87,
        name: "Dub Echo",
        city: "Lyon",
        price: 25.02,
        date: new Date("2023-07-10").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        at: "Transbordeur",
        description:
        "La fin d'année s'annonce big avec la venue inédite du crew bressan Subtroopers, qui posera pour les première fois ses 6 scoops sur Dub Echo !",
        further_details:
        "this is a 17+ event",
        age: "17",
        presentedBy: "Transbordeur",
        image: require("@/assets/media/echo.jpeg"),
        disponibilita: 1,
      },
      {
        id: 88,
        name: "Warum Meine Liebe",
        city: "Lyon",
        price: 29,
        date: new Date("2023-11-11").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        at: "Transbordeur",
        description:
        "Stay tuned for more info",
        further_details:
        "this a 18+ event",
        age: "18+",
        presentedBy: "Transbordeur",
        image: require("@/assets/media/warum.jpeg"),
        disponibilita: 2,
      },
      {
        id: 89,
        name: "La Bringue PINK PARTY",
        city: "Lyon",
        price: 13,
        date: new Date("2023-12-10").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        at: "Les salons du NH",
        age: "16",
        description:
        "La Bringue GIRLS ONLY est de retour au Cavern ! Tu fais la fête et tu t'ambiances avec que des meufs (photographe meuf, vidéaste meuf, serveuse meuf, DJ meuf) toute la nuit !",
        further_details:
        "this is a 16+ event",
        image: require("@/assets/media/pink_party.jpeg"),
        presentedBy: "Les salons du NH",
        disponibilita: 3,
      },
      {
        id: 90,
        name: "EZ!",
        city: "Lyon",
        price: 13,
        date: new Date("2023-20-10").toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        at: "Transbordeur",
        age: "18+",
        image: require("@/assets/media/ez.jpeg"),
        description:
        "Soirée réservée aux personnes majeures, une pièce d'identité vous sera demandée à l'entrée de l'événement.",
        further_details:
        "this is a 18+ event",
        presentedBy: "Transbordeur",
        disponbilita: 4,
      },

      // Aggiungi altri eventi qui
    ],
    cart: [],
    contatore: 0,
  },

  mutations: {
    addToCart(state, event) {
      // Verifica se l'evento è già nel carrello
      const existingEvent = state.cart.find((item) => item.id === event.id);
      if (existingEvent) {
        // Se esiste, aumenta il contatore per quell'evento
        existingEvent.quantity++;
      } else {
        // Altrimenti, aggiungi l'evento al carrello con un contatore iniziale di 1
        state.cart.push({ ...event, quantity: 1 });
      }
    },
    removeOneFromCart(state, event) {
      const existingEvent = state.cart.find((item) => item.id === event.id);
      if (existingEvent) {
        if (existingEvent.quantity > 1) {
          existingEvent.quantity--;
        } else {
          state.cart = state.cart.filter((item) => item.id !== event.id);
        }
      }
    },
  },
});
