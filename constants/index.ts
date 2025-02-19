import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset, LuClock } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },

  {
    title: "Usluge",
    link: "/usluge",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface TestimonialData {
  id: number;
  title: string;
  image: string;
  description: string;
}

export const testimonialData: TestimonialData[] = [
  {
    id: 1,
    title: "Marko J.",
    image: "/hero1.jpg",
    description:
      "Brza i profesionalna usluga! Pozvao sam Šlep službu Purić nakon havarije, i za nekoliko minuta su bili tu. Vozilo su pažljivo odvezli do servisa bez ikakvih dodatnih oštećenja. Preporučujem ih svakome!“",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Izuzetno ljubazni i efikasni! Šlep služba Purić je brzo reagovala i bezbedno prevezla moj automobil nakon nesreće. Hvala na pomoći!",
  },
  {
    id: 3,
    title: "Luka M.",
    image: "/hero2.jpg",
    description:
      "Nisam očekivao da će usluga biti ovako brza i efikasna! Šlep služba Purić je brzo došla po moje vozilo i sigurno ga odvezla do servisa. Topla preporuka!",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Nakon nezgode, Šlep služba Purić je bila jedini kontakt koji mi je trebao. Profesionalni su i zaista vode računa o svakom detalju. Prezadovoljan sam!",
  },
  {
    id: 5,
    title: "Jovan K.",
    image: "/hero1.jpg",
    description:
      "Pouzdana usluga i brzo rešenje u hitnim situacijama. Šlep služba Purić je odradila fantastičan posao sa mojim vozilom. Preporučujem svim prijateljima!",
  },
];

export interface LineCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const lineCardsData: LineCardsData[] = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Dostupnost 24/7",
    text: "Bez obzira na vreme i lokaciju, stižemo što pre!",
  },
  {
    id: 2,
    icon: LuTimerReset,
    title: "Brza reakcija",
    text: "Na terenu smo u najkraćem roku nakon vašeg poziva.",
  },
  {
    id: 3,
    icon: LuTimerReset,
    title: "Iskusni vozači i moderna oprema",
    text: "Siguran i profesionalan prevoz vašeg vozila.",
  },
  {
    id: 4,
    icon: LuTimerReset,
    title: "Povoljne cene",
    text: "Transparentne i konkurentne cene bez skrivenih troškova.",
  },
];

export interface ServisCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const servisCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Šlep automobila",
    text: "Vršimo šlep svih vrsta automobila, bez obzira na stanje vozila – havarisana, poluvozna ili ispravna.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Šlep motora",
    text: "Šlepamo motore, skutere, četvorotočkaše, motorne sanke i druga vozila brzo i sigurno.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Šlep kombija i kamiona",
    text: "Pružamo uslugu transporta kombija, kamiona i radnih mašina širom Srbije, uz sigurnost i brzinu.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Šlep vozila iz inostranstva",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "Pomoc na putu 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Čačku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "Šlep lakog i teškog tereta",
    text: "Za vas prevozimo i laki i teški teret, kako u Čačku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep havarisanog vozila",
    text: "Ukoliko ste imali havariju na putu, tu smo da pokupimo vaše vozilo i bezbedno ga odšlepamo do servisa.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Izvlačenje sajlom vozila van puta",
    text: "Izvlačenje vozila sa puta sajlom, pažljivo izvedeno kako bi se izbegla dodatna oštećenja vozila.",
  },
];
