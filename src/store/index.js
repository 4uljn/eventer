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
        age: "16+",
        presentedBy: "CULT",
<<<<<<< HEAD
        disponibilita: 0,
=======
       disponibilita: 0,
>>>>>>> refs/remotes/origin/main
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
        age: "Questo è un evento 18+",
        disponbilita: 3,
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
      },
      {
        id: 6,
        name: "Pierluca Mariti (Piuttosto_Che) presenta “Niente di che”",
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
          '24/10 - Prima Data di Milano del Tour di Presentazione di "Niente di che" il nuovo romanzo di Pierluca Mariti (PIUTTOSTO_CHE). \n 18.30 Apertura \n 19.30 Presentazione + Firmacopie',
        further_details:
          "Prima e dopo lo Spettacolo presso il Bar / Bistrot di Arca Milano sarà possibile mangiare e bere qualcosa nell'attesa oppure rilassarsi per quattro chiacchere dopo la presentazione.",
        age: "Tutte le età",
        disponibilita: 5,
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
        presentedBy: "east market Milano",
<<<<<<< HEAD
        disponibilita: 0,
=======
        disponibilita:0,
>>>>>>> refs/remotes/origin/main
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
        description:
<<<<<<< HEAD
          " questo ticket e' valido per il terzo giorno di evento: 19 ottobre dalle 10 alle 21",
        disponibilita: 1,
=======
        " questo ticket e' valido per il terzo giorno di evento: 19 ottobre dalle 10 alle 21",
        disponibilita:1,
>>>>>>> refs/remotes/origin/main
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
        disponbilita: 2,
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
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
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
        age: "17",
        category: "dj",
        image: require("@/assets/media/takeiteasy.avif"),
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
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
<<<<<<< HEAD
        age: "16",
        image: require("@/assets/media/arto.avif"),
        disponbilita: 0,
=======
        age:"16",
        image: require("@/assets/media/arto.avif"),
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },

      {
        id: 14,
        name: "BABYMETAL UK & EU Tour 2023 + WARGASM ",
        city: "Milano",
        price: 46,
        at: "Fabrique",
        date: new Date("2023-10-19").toLocaleDateString("en-EN", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        age: "17",
        image: require("@/assets/media/babymetal.avif"),
<<<<<<< HEAD
        disponibilita: 1,
=======
        disponibilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 15,
        name: "Adult Fireworks Entry Tickets only",
        city: "London",
        price: 17,
<<<<<<< HEAD
        date: new Date("2023-11-04").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-04").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/fireworks.jpeg"),
        at: "Alexandra Palace",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 16,
        name: "Los Campesinos!",
        city: "London",
        price: 9,
<<<<<<< HEAD
        date: new Date("2024-02-17").toLocaleDateString("it-IT", {
=======
        date: new Date("2024-02-17").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/campesinos.jpeg"),
        at: "Troxy",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 17,
        name: "Gauchoworld",
        city: "London",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-13").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-13").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/gauchoworld.jpeg"),
        at: "EartH",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 18,
        name: "MASIWEI 2023 WORLD TOUR - The Grand Finale",
        city: "London",
        price: 87.3,
<<<<<<< HEAD
        date: new Date("2023-10-22").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-22").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/masiwei.jpeg"),
        at: "Troxy",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 19,
        name: "ROAST",
        city: "London",
        price: 22,
<<<<<<< HEAD
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-14").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/roast.jpeg"),
        at: "Electrowerkz",
<<<<<<< HEAD
        disponbilita: 1,
=======
        disponbilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 20,
        name: "LICK HALLOWEEN LONDON",
        city: "London",
        price: 20,
<<<<<<< HEAD
        date: new Date("2023-10-27").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-27").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/halloween.jpeg"),
        at: "Fire & Lightbox",
<<<<<<< HEAD
        disponbilita: 2,
=======
        disponbilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 21,
        name: "YUGYEOM",
        city: "London",
        price: 56.5,
<<<<<<< HEAD
        date: new Date("2023-11-02").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-02").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/yugyeom.jpeg"),
        at: "Troxy",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 22,
        name: "Stone Island Presents London",
        city: "London",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-12").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/stone.jpeg"),
        at: "Roundhouse",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 23,
        name: "Gruff Rhys: Live + Signing",
        city: "London",
        price: 14.44,
<<<<<<< HEAD
        date: new Date("2024-01-29").toLocaleDateString("it-IT", {
=======
        date: new Date("2024-01-29").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/gruff.jpeg"),
        at: "Rough Trade East",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 24,
        name: "The Vaccines: Live + Signing (3pm Doors)",
        city: "London",
        price: 15.54,
<<<<<<< HEAD
        date: new Date("2024-01-14").toLocaleDateString("it-IT", {
=======
        date: new Date("2024-01-14").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/vaccines.jpeg"),
        at: "Rough Trade East",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 25,
        name: "The Last Dinner Party",
        city: "London",
        price: 30.09,
<<<<<<< HEAD
        date: new Date("2024-02-01").toLocaleDateString("it-IT", {
=======
        date: new Date("2024-02-01").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/dinner.jpeg"),
        at: "Roundhouse",
<<<<<<< HEAD
        disponbilita: 1,
=======
        disponbilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 26,
        name: "House Of Trash - Ft. Luke Solomon",
        city: "London",
        price: 22,
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/trash.jpeg"),
        at: "Electrowerkz",
<<<<<<< HEAD
        disponbilita: 2,
=======
        disponbilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 27,
        name: "Swing & Bass: The Final Curtain",
        city: "London",
        price: 11.64,
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/curtain.jpeg"),
        at: "Hootananny Brixton",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 28,
        name: "Club Renaissance: The Visuals Edition",
        city: "London",
        price: 11.64,
<<<<<<< HEAD
        date: new Date("2023-11-11").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-11").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/renaissance.jpeg"),
        at: "Venue MOT Unit 18",
<<<<<<< HEAD
        disponbilita: 4,
      },
=======
        disponbilita:4,
      }, 
>>>>>>> refs/remotes/origin/main
      {
        id: 29,
        name: "King Krule",
        city: "London",
        price: 27.75,
<<<<<<< HEAD
        date: new Date("2023-10-09").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-09").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/krule.jpeg"),
        at: "Eventim Apollo",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 30,
        name: "ChoirCo",
        city: "London",
        price: 17.85,
<<<<<<< HEAD
        date: new Date("2023-12-09").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-09").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/choirco.jpeg"),
        at: "EartH",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 31,
        name: "GAIKA: Live + Signing",
        city: "London",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-11-16").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-16").toLocaleDateString("en-EN", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/gaika.jpeg"),
        at: "Rough Trade East",
<<<<<<< HEAD
        disponbilita: 1,
=======
        disponbilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 32,
        name: "elrow: Basel Week 2023",
        city: "Miami",
        price: 54.06,
<<<<<<< HEAD
        date: new Date("2023-12-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-07").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/elrow.jpeg"),
        at: "Factory Town",
<<<<<<< HEAD
        disponbilita: 2,
=======
        disponbilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 33,
        name: "John Summit & Fatboy Slim",
        city: "Miami",
        price: 75,
<<<<<<< HEAD
        date: new Date("2023-12-06").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-06").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/summit.jpeg"),
        at: "Club Space Miami",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 34,
        name: "4:20 Space Yoga",
        city: "Miami",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "wellbeing",
        image: require("@/assets/media/yoga.jpeg"),
        at: "Club Space Miami",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 35,
        name: "Mochakk & HAAi",
        city: "Miami",
        price: 28.66,
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/haai.jpeg"),
        at: "Club Space Miami",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 36,
        name: "Italian HIT Week",
        city: "Miami",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-14").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/italian.jpeg"),
        at: "Miami Beach Bandshell",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 37,
        name: "ACTION BRONSON PRESENTS: DR. BACHLAVA AND HUMAN GROWTH HORMONE",
        city: "Miami",
        price: 53.56,
<<<<<<< HEAD
        date: new Date("2023-12-08").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-08").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/bachlava.jpeg"),
        at: "Miami Beach Bandshell",
        disponbilita: 1,
      },
      {
        id: 38,
        name: "Jam Cruise 20 Official Pre-Party ft. Karl Denson's Tiny Universe, Cool Cool Cool, DJ Logic & Electric Kif",
        city: "Miami",
        price: 48.41,
<<<<<<< HEAD
        date: new Date("2024-02-24").toLocaleDateString("it-IT", {
=======
        date: new Date("2024-02-24").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/jam.jpeg"),
        at: "Miami Beach Bandshell",
<<<<<<< HEAD
        disponbilita: 2,
=======
        disponbilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 39,
        name: "Sam Gellaitry",
        city: "Miami",
        price: 26.45,
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/sam.jpeg"),
        at: "The Ground Miami",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 40,
        name: "Kevin Kaarl",
        city: "Miami",
        price: 41.2,
<<<<<<< HEAD
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-12").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/kevin.jpeg"),
        at: "Miami Beach Bandshell",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 41,
        name: "Sundays are Lucky with Cocodrills & Friends",
        city: "Miami",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-08").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-08").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/cocodrills.jpeg"),
        at: "1800-Lucky",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },

      {
        id: 42,
        name: "Friends & Disco: Day Gala",
        city: "San Diego",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-21").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-21").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/friends.jpeg"),
        at: "JuneShine Ranch",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 43,
        name: "Daisy Chain #14 w/ Lab Group",
        city: "San Diego",
        price: 42.75,
<<<<<<< HEAD
        date: new Date("2023-11-18").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-18").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/daisy.jpeg"),
        at: "WICKED WEST (open air)",
<<<<<<< HEAD
        disponbilita: 1,
=======
        disponbilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 44,
        name: "Disclosure vs. Fred Again.. Tribute Dance Party",
        city: "San Diego",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-12-30").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-30").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/disclosure.jpeg"),
        at: "Soda Bar",
        disponbilita: 2,
      },
      {
        id: 45,
        name: "Soda’s 15 Year Anniversary: Weatherbox, Positioner, Future Crooks",
        city: "San Diego",
        price: 12,
<<<<<<< HEAD
        date: new Date("2023-11-11").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-11").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/soda.jpeg"),
        at: "Soda Bar",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 46,
        name: "Teenage Wrist, Spiritual Cramp, Heavenward, Slow Joy",
        city: "San Diego",
        price: 27.81,
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/teenage.jpeg"),
        at: "Soda Bar",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 47,
        name: "Luna Luna & Michael Seyer w/ Pincey",
        city: "San Diego",
        price: 25.75,
<<<<<<< HEAD
        date: new Date("2023-10-12").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-12").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/luna.jpeg"),
        at: "Quartyard",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 48,
        name: "underscores w/ Jedwill",
        city: "San Diego",
        price: 22.15,
<<<<<<< HEAD
        date: new Date("2023-10-28").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-28").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/underscores.jpeg"),
        at: "Soda Bar",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 49,
        name: "Claud",
        city: "San Diego",
        price: "Gratis",
<<<<<<< HEAD
        date: new Date("2023-10-19").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-19").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/claud.jpeg"),
        at: "The Loft @ UC San Diego",
        disponbilita: 1,
      },
      {
        id: 50,
        name: "Frankie and the Witch Fingers w/ Monsterwatch",
        city: "San Diego",
        price: 25.24,
<<<<<<< HEAD
        date: new Date("2023-10-27").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-27").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
<<<<<<< HEAD
        image: require("@/assets/media/frankie.jpeg"),
=======
        image: require("@/assets/media/frrankie.jpeg"),
>>>>>>> refs/remotes/origin/main
        at: "Quartyard",
        disponbilita: 2,
      },
      {
        id: 51,
        name: "Christopher",
        city: "San Diego",
        price: 26.78,
<<<<<<< HEAD
        date: new Date("2024-01-25").toLocaleDateString("it-IT", {
=======
        date: new Date("2024-01-25").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
<<<<<<< HEAD
        image: require("@/assets/media/christopher.jpeg"),
=======
        image: require("@/assets/media/christtopher.jpeg"),
>>>>>>> refs/remotes/origin/main
        at: "Soda Bar",
        disponbilita: 3,
      },
      {
        id: 52,
        name: "CircoLoco Ibiza - The Day After",
        city: "Ibiza",
        price: 54,
        date: new Date("2023-10-10").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/circo.jpeg"),
        at: "DC-10",
        disponbilita: 2,
      },
      {
        id: 53,
        name: "Pyramid Closing Party 8th October",
        city: "Ibiza",
        price: 65,
        date: new Date("2023-10-08").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/pyramid.jpeg"),
        at: "Amnesia Ibiza",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 54,
        name: "Amnesia Closing Party",
        city: "Ibiza",
        price: 92,
        date: new Date("2023-10-14").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/amnesia.jpeg"),
        at: "Amnesia Ibiza",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 55,
        name: "The Ritual with Anané and Louie Vega Closing",
        city: "Ibiza",
        price: 30,
        date: new Date("2023-10-11").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/ritual.jpeg"),
        at: "Club ChinoisClub Space Miami",
        disponbilita: 5,
      },
      {
        id: 56,
        name: "Kisstory",
        city: "Ibiza",
        price: 30,
        date: new Date("2023-10-10").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/kisstory.jpeg"),
        at: "O Beach Ibiza",
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 57,
        name: "Club Chinois Presents Groove Armada",
        city: "Ibiza",
        price: 35,
        date: new Date("2023-10-08").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/armada.jpeg"),
        at: "Club Chinois",
        disponibilita: 2,
      },
      {
        id: 58,
        name: "Club Chinois presents UNA MÀS",
        city: "Ibiza",
        price: 30,
        date: new Date("2023-10-16").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/una.jpeg"),
        at: "Club Chinois",
        disponbilita: 3,
      },
      {
        id: 59,
        name: "TRIP & Yoyaku",
        city: "Ibiza",
        price: 30,
        date: new Date("2023-10-21").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/trip.jpeg"),
        at: "Club Chinois",
        disponibilita: 4,
      },
      {
        id: 60,
        name: "Moon Harbour",
        city: "Ibiza",
        price: 30,
        date: new Date("2023-10-10").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/moon.jpeg"),
        at: "Club Chinois",
        disponibilita: 5,
      },
      {
        id: 61,
        name: "Beach Yoga",
        city: "Ibiza",
        price: 25.01,
        date: new Date("2023-10-09").toLocaleDateString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "wellbeing",
        image: require("@/assets/media/beach.jpeg"),
        at: "Beachouse Ibiza",
        disponbilita: 0,
      },
      {
        id: 62,
        name: "TX2",
        city: "Cleveland",
        price: 21.63,
<<<<<<< HEAD
        date: new Date("2023-11-05").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-05").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/tx2.jpeg"),
        at: "Mahall's",
        disponibilita: 1,
      },
      {
        id: 63,
        name: "The Aces – I’ve Loved You For So Long World Tour",
        city: "Cleveland",
        price: 30.9,
<<<<<<< HEAD
        date: new Date("2023-10-08").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-08").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/aces.jpeg"),
        at: "The Roxy",
        disponibilita: 3,
      },
      {
        id: 64,
        name: "SUICIDE SILENCE AND CHELSEA GRIN",
        city: "Cleveland",
        price: 31.93,
<<<<<<< HEAD
        date: new Date("2023-10-20").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-20").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/silence.jpeg"),
        at: "The Roxy",
<<<<<<< HEAD
        disponibilita: 4,
=======
        disponibilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 65,
        name: "Superheaven",
        city: "Cleveland",
<<<<<<< HEAD
        date: new Date("2023-10-14").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-14").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/superheaven.jpeg"),
        at: "The Roxy",
<<<<<<< HEAD
        disponbilita: 5,
=======
        disponbilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 66,
        name: "One Direction vs. 5 Seconds of Summer dance party",
        city: "Cleveland",
        price: 26.78,
<<<<<<< HEAD
        date: new Date("2023-10-07").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-07").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        image: require("@/assets/media/direction.jpeg"),
        at: "Mahall's",
<<<<<<< HEAD
        disponbilita: 0,
=======
        disponbilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 67,
        name: "Meet Me @ The Altar: Say It To My Face Tour",
        city: "Cleveland",
        price: 32.96,
<<<<<<< HEAD
        date: new Date("2023-11-01").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-01").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/meet.jpeg"),
        at: "Mahall's",
<<<<<<< HEAD
        disponibilita: 1,
=======
        disponibilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 68,
        name: "Night Rider",
        city: "Cleveland",
        price: 26.78,
<<<<<<< HEAD
        date: new Date("2023-12-09").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-09").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/rider.jpeg"),
        at: "The Roxy",
<<<<<<< HEAD
        disponibilita: 2,
=======
        disponibilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 69,
        name: "Citizen",
        city: "Cleveland",
        price: 33.99,
<<<<<<< HEAD
        date: new Date("2023-11-24").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-24").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/citizen.jpeg"),
        at: "The Roxy",
<<<<<<< HEAD
        disponbilita: 3,
=======
        disponbilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 70,
        name: "Scene Queen",
        city: "Cleveland",
        price: 28.84,
<<<<<<< HEAD
        date: new Date("2023-11-18").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-11-18").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/scene.jpeg"),
        at: "The Roxy",
<<<<<<< HEAD
        disponibilita: 3,
=======
        disponibilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 71,
        name: "Belmont and Can't Swim",
        city: "Cleveland",
        price: 26.78,
<<<<<<< HEAD
        date: new Date("2023-10-22").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-10-22").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/belmont.jpeg"),
        at: "Mahall's",
<<<<<<< HEAD
        disponibilita: 4,
=======
        disponibilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 72,
        name: "Eliza Rose",
        city: "Dublin",
        price: 24.99,
        date: new Date("2023-11-11").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/eliza.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 5,
=======
        disponibilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 73,
        name: "Ben Klock",
        city: "Dublin",
        price: 24.99,
        date: new Date("2023-11-10").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/ben.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 0,
=======
        disponibilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 74,
        name: "Danilo Plessow aka MCDE",
        city: "Dublin",
        price: 20.5,
        date: new Date("2023-10-07").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/danilo.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 1,
=======
        disponibilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 75,
        name: "Gorgon City Salvation Tour",
        city: "Dublin",
        price: 33.54,
        date: new Date("2023-12-08").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/gorgon.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 2,
=======
        disponibilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 76,
        name: "Dom Whiting",
        city: "Dublin",
        price: 23.6,
        date: new Date("2023-10-21").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/dom.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 3,
=======
        disponibilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 77,
        name: "Daniel Avery",
        city: "Dublin",
        price: 24.99,
        date: new Date("2023-11-24").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/avery.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 4,
=======
        disponibilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 78,
        name: "The Love Ball #3 w/ Prymary Colours + more",
        city: "Dublin",
        price: 14,
        date: new Date("2023-11-18").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/love.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 5,
=======
        disponibilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 79,
        name: "Taylah Elaine 'In 2 Minds'",
        city: "Dublin",
        price: 11.5,
        date: new Date("2023-10-14").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/taylah.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 0,
=======
        disponibilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 80,
        name: "Romare",
        city: "Dublin",
        price: 17,
        date: new Date("2023-10-27").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        image: require("@/assets/media/romare.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 1,
=======
        disponibilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 81,
        name: "Mano Le Tough",
        city: "Dublin",
        price: 20.5,
        date: new Date("2023-11-17").toLocaleDateString("ie-IE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        image: require("@/assets/media/mano.jpeg"),
        at: "Centre Point",
<<<<<<< HEAD
        disponibilita: 2,
=======
        disponibilita:2,
>>>>>>> refs/remotes/origin/main
      },

      {
        id: 82,
        name: "Making the pure Halloween",
        city: "Philadelphia",
        price: 26.28,
        at: "TRANSCENDENTAL Secret Location",
<<<<<<< HEAD
        date: new Date("2023-12-10").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-10").toLocaleDateString("usa-USA", {
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
<<<<<<< HEAD
        age: "18+",
        image: require("@/assets/media/pure_halloween.avif"),
        disponibilita: 2,
=======
        age:"18+",
        image: require("@/assets/media/pure_halloween.avif"),
        disponibilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 83,
        name: "Pegboy, Flag of Democracy",
        city: "Philadelphia",
        price: 26.28,
        at: "Ukie Club",
<<<<<<< HEAD
        date: new Date("2023-12-10").toLocaleDateString("it-IT", {
=======
        date: new Date("2023-12-10").toLocaleDateString("usa-USA",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        age: "17",
        image: require("@/assets/media/pegboy.avif"),
<<<<<<< HEAD
        disponibilita: 3,
=======
        disponibilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 84,
        name: "Ucyll & RYO",
        city: "Lyon",
        price: 15.5,
<<<<<<< HEAD
        date: new Date("2023-13-10").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-13-10").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        at: "La Marquise",
        age: "16",
        image: require("@/assets/media/ucyll.jpeg"),
<<<<<<< HEAD
        disponibilita: 4,
=======
        disponibilita:4,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 85,
        name: "Mairo",
        city: "Lyon",
        price: 18.5,
<<<<<<< HEAD
        date: new Date("2023-19-10").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-19-10").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        at: "La Marquise",
        age: "15",
        image: require("@/assets/media/Mairo.jpeg"),
<<<<<<< HEAD
        disponibilita: 5,
=======
        disponibilita:5,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 86,
        name: "NNEKA",
        city: "Lyon",
        price: 28.5,
<<<<<<< HEAD
        date: new Date("2023-20-10").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-20-10").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "gigs",
        at: "Ninkasi Gerland",
        age: "18+",
        image: require("@/assets/media/nneka.jpeg"),
<<<<<<< HEAD
        disponibilita: 0,
=======
        disponibilita:0,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 87,
        name: "Dub Echo",
        city: "Lyon",
        price: 25.02,
<<<<<<< HEAD
        date: new Date("2023-07-10").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-07-10").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        at: "Transbordeur",
        age: "17",
        image: require("@/assets/media/echo.jpeg"),
<<<<<<< HEAD
        disponibilita: 1,
=======
        disponibilita:1,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 88,
        name: "Warum Meine Liebe",
        city: "Lyon",
        price: 29,
<<<<<<< HEAD
        date: new Date("2023-11-11").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-11-11").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "dj",
        at: "Transbordeur",
        age: "18+",
        image: require("@/assets/media/warum.jpeg"),
<<<<<<< HEAD
        disponibilita: 2,
=======
        disponibilita:2,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 89,
        name: "La Bringue PINK PARTY",
        city: "Lyon",
        price: 13,
<<<<<<< HEAD
        date: new Date("2023-12-10").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-12-10").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        at: "Les salons du NH",
        age: "16",
        image: require("@/assets/media/pink_party.jpeg"),
<<<<<<< HEAD
        disponibilita: 3,
=======
        disponibilita:3,
>>>>>>> refs/remotes/origin/main
      },
      {
        id: 90,
        name: "EZ!",
        city: "Lyon",
        price: 13,
<<<<<<< HEAD
        date: new Date("2023-20-10").toLocaleDateString("fr-FR", {
=======
        date: new Date("2023-20-10").toLocaleDateString("fr-FR",{
>>>>>>> refs/remotes/origin/main
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        category: "party",
        at: "Transbordeur",
        age: "18+",
        image: require("@/assets/media/ez.jpeg"),
<<<<<<< HEAD
        disponbilita: 4,
=======
        disponbilita:4,
>>>>>>> refs/remotes/origin/main
      },

      // Aggiungi altri eventi qui
    ],
<<<<<<< HEAD
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
=======
    // Carrello
    contatore: 0,
  },
  // Mutations, actions e getters qui, se necessario
  mutations: {
    AGGIUNGI: function (state) {
      if (state.contatore < 3) {
        state.contatore += 1;
      }
    },
    TOGLI: function (state) {
      if (state.contatore > 0) {
        state.contatore -= 1;
      }
    },
  },
>>>>>>> refs/remotes/origin/main
});
