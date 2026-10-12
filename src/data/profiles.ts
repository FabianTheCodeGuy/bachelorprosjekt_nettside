import type { Profile } from "../interfaces/profile";

export const profiles: Profile[] = [
  {
    fullName: "Kenneth Nygård",
    name: "Kenneth",
    age: "32",
    description:
      "Kenneth er en nysgjerrig fyr som liker å finne ut hvordan ting henger sammen. Han har fagbrev i IT, men brukte mange år på å designe og bygge snowparker rundt om i Norge, og har til og med drevet sitt eget firma. Nå har han kastet seg over koding og liker å jobbe med både frontend og backend. For tiden bygger han sin egen nettside med en scraper som henter innhold fra andre nettsider og gjør det om til JSON, så han kan bruke dataene til sine egne prosjekter. Han er også glad i å teste ut KI-verktøy, og trives best når han får bryne seg på et konkret problem.",
    image: "/images/kenneth.jpg",
    study: "Informasjonsteknologi - Frontend- og mobilutvikling",
  },
  {
    fullName: "Fabian Christopher Birkedal",
    name: "Fabian",
    age: "27",
    description:
      "Fabian er en kreativ og energisk fyr med fagutdanning i grafisk design, og et godt øye for typografi, komposisjon og visuell helhet. Etter hvert ble han nysgjerrig på hvordan ting faktisk bygges, og nå driver han med utvikling for web og mobil. Han liker både frontend og backend, fra å forme brukergrensesnittet til å få logikken og dataene bak til å fungere. Målet hans er løsninger som ser bra ut og er enkle å bruke.",
    image: "/images/fabian.jpg",
    study: "Informasjonsteknologi - Frontend- og mobilutvikling",
  },
  {
    fullName: "Kristoffer Fernholt",
    name: "Kristoffer",
    age: "25",
    description:
      "Kristoffer er en backend-glad utvikler som liker å forstå hvordan ting fungerer under panseret. Han trives best med Java, Spring Boot og databaser, men tar gjerne turen innom frontend også for å se helheten. Han har jobbet mye med Docker, er i gang med AWS, og bruker Python til å grave i sine egne treningsdata. Som studentassistent har han fått mye trening i å lese andres kode og forklare ting enkelt, og mange år på Jernia har gjort ham god på folk. Han har også vært grensejeger i Sør-Varanger, så litt press er han vant til.",
    image: "/images/kristoffer.jpg",
    study: "Informasjonsteknologi - Programmering",
  },
];
