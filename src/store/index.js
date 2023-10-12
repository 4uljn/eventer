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
        lineup: [
          {
            artistName: "La Sape",
            image: require("@/assets/media/artists_img/thayder.jpeg"),
          },
          {
            artistName: "Giorgio Thayder",
            image: require("@/assets/media/artists_img/thayder.jpeg"),
          },
          {
            artistName: "Aznamir",
            setTime: "21:45 - 23:15",
          },
          // Aggiungi altri artisti e orari secondo necessità
        ],
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
        category: "dj",
        image: require("@/assets/media/takeiteasy.avif"),
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
      },

      {
        id: 30,
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
        image: require("@/assets/media/arto.avif"),
      },

      {
        id: 31,
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
        image: require("@/assets/media/babymetal.avif"),
      },

      {
        id: 20,
        name: "Making the pure Halloween",
        city: "Philadelphia",
        price: 26.28,
        at: "TRANSCENDENTAL Secret Location",
        date: "2023-12-10",
        category: "party",
        image: require("@/assets/media/pure_halloween.avif"),
      },
      {
        id: 21,
        name: "Pegboy, Flag of Democracy",
        city: "Philadelphia",
        price: 26.28,
        at: "Ukie Club",
        date: "2023-12-10",
        category: "gigs",
        image: require("@/assets/media/pegboy.avif"),
      },
      {
        id: 40,
        name: "Ucyll & RYO",
        city: "Lyon",
        price: 15.5,
        date: "2023-13-10",
        category: "gigs",
        at: "La Marquise",
        image: require("@/assets/media/ucyll.jpeg"),
      },
      {
        id: 41,
        name: "Mairo",
        city: "Lyon",
        price: 18.5,
        date: "2023-19-10",
        category: "gigs",
        at: "La Marquise",
        image: require("@/assets/media/Mairo.jpeg"),
      },
      {
        id: 42,
        name: "NNEKA",
        city: "Lyon",
        price: 28.5,
        date: "2023-20-10",
        category: "gigs",
        at: "Ninkasi Gerland",
        image: require("@/assets/media/nneka.jpeg"),
      },
      {
        id: 43,
        name: "Dub Echo",
        city: "Lyon",
        price: 25.02,
        date: "2023-07-10",
        category: "dj",
        at: "Transbordeur",
        image: require("@/assets/media/echo.jpeg"),
      },
      {
        id: 44,
        name: "Warum Meine Liebe",
        city: "Lyon",
        price: 29,
        date: "2023-11-11",
        category: "dj",
        at: "Transbordeur",
        image: require("@/assets/media/warum.jpeg"),
      },
      {
        id: 45,
        name: "La Bringue PINK PARTY",
        city: "Lyon",
        price: 13,
        date: "2023-12-10",
        category: "party",
        at: "Les salons du NH",
        image: require("@/assets/media/pink_party.jpeg"),
      },
      {
        id: 46,
        name: "EZ!",
        city: "Lyon",
        price: 13,
        date: "2023-20-10",
        category: "party",
        at: "Transbordeur",
        image: require("@/assets/media/ez.jpeg"),
      },

      // Aggiungi altri eventi qui
    ],
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
});
