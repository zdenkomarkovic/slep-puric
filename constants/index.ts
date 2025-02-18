import { IconType } from "react-icons";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import { PiRocketLaunchBold } from "react-icons/pi";
import { LuTimerReset } from "react-icons/lu";

export const navList = [
  {
    title: "Početna",
    link: "/",
  },
  {
    title: "Usluge",
    list: [
      {
        title: "Kuhinje",
        link: "",
      },
      {
        title: "Plakari",
        link: "",
      },
      {
        title: "TV Komode",
        link: "",
      },
      {
        title: "Projektovanje Enterijera",
        link: "",
      },
    ],
  },
  {
    title: "Proizvodi",
    link: "/proizvodi",
  },
  {
    title: "Kontakt",
    link: "/kontakt",
  },
];

export interface WorkList {
  id: number;
  title: string;
  text: string;
}

export const workList = [
  {
    id: 1,
    title: "Grupni treninzi",
    text: "Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i podršku tima. Pridruži se i zajedno postižemo ciljeve!",
    icon: IoIosPeople,
  },
  {
    id: 2,
    title: "Individualni treninzi",
    text: "Ostvari maksimalne rezultate uz personalizovane individualne treninge! Treniraj prema svom tempu, uz stručnu podršku i plan prilagođen tvojim ciljevima. Fokus je na tebi!",
    icon: IoIosPerson,
  },
  {
    id: 3,
    title: "Pilates",
    text: "Poboljšaj fleksibilnost, snagu i držanje uz pilates treninge! Uz kontrolisane pokrete i fokus na disanje, oblikuj telo i oslobodi se stresa. Idealno za sve nivoe kondicije!",
    icon: IoFitnessOutline,
  },
  {
    id: 4,
    title: "Body power",
    text: "Ojačaj mišiće i poboljšaj izdržljivost uz intenzivan trening snage! Kombinacija tegova i funkcionalnih vežbi pomoći će ti da postigneš vrhunsku formu.",
    icon: GiWeightLiftingUp,
  },
  {
    id: 5,
    title: "Mix-fit",
    text: " Dinamičan spoj kardio i snage za maksimalne rezultate! Raznovrsni pokreti, visoka energija i zabavna atmosfera čine svaki trening izazovnim i efektivnim.",
    icon: MdOutlineSportsGymnastics,
  },
  {
    id: 6,
    title: "Aeronix",
    text: "Spoj aerobnih vežbi i funkcionalnog treninga za bolju kondiciju i oblikovanje tela! Povećaj izdržljivost, sagori kalorije i uživaj u energičnom ritmu vežbanja.",
    icon: PiRocketLaunchBold,
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
    title: "Jelena R.",
    image: "/hero1.jpg",
    description:
      "Treninzi su odlični, atmosfera motivišuća, a instruktori puni znanja i energije! Već nakon nekoliko nedelja osećam ogromnu promenu u kondiciji i snazi. Preporučujem svima!",
  },
  {
    id: 2,
    title: "Ivana S.",
    image: "/hero1.jpg",
    description:
      "Fitnes klub je za mene više od mesta za vežbanje – ovde sam pronašla ekipu koja me inspiriše i podržava! Vežbamo zajedno, bodrimo se i družimo i van treninga. Ne bih ovo menjala ni za šta!",
  },
  {
    id: 3,
    title: "Ana M.",
    image: "/hero2.jpg",
    description:
      "Posle svakog treninga osećam se snažnije i zdravije! Programi su prilagođeni svim nivoima, a podrška trenera me stalno gura ka boljoj verziji sebe.",
  },
  {
    id: 4,
    title: "Katarina N.",
    image: "/hero3.jpg",
    description:
      "Od kada treniram ovde, imam više energije, manje stresa i bolju kondiciju! Ambijent je fantastičan, a treninzi su uvek dinamični i zanimljivi.",
  },
  {
    id: 5,
    title: "Milica P.",
    image: "/hero1.jpg",
    description:
      "Treniram ovde već nekoliko godina i mogu reći da mi je ovo druga porodica! Pored sjajnih treninga, upoznala sam divne ljude koji su mi postali bliski prijatelji. Motivacija i podrška su neverovatni!",
  },
];

export interface LineCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const lineCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "Dostupnost 24/7",
    text: "Bez obzira na vreme i lokaciju, stižemo što pre!",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "Brza reakcija",
    text: "Na terenu smo u najkraćem roku nakon vašeg poziva.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "Iskusni vozači i moderna oprema",
    text: "Siguran i profesionalan prevoz vašeg vozila.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "Povoljne cene",
    text: "Transparentne i konkurentne cene bez skrivenih troškova.",
  },
];

export interface SixCardsData {
  id: number;
  icon: IconType;
  title: string;
  text: string;
}

export const sixCardsData = [
  {
    id: 1,
    icon: LuTimerReset,
    title: "ŠLEP AUTOMOBILA",
    text: "Bavimo se šlepanjem svih vrsta i tipova automobila. Vršimo šlepanje havarisanih vozila, u poluvoznom ili voznom stanju.",
  },
  {
    id: 2,
    icon: GiWeight,
    title: "ŠLEP MOTORA",
    text: "Pružamo uslugu šlepanja raznih vrsta motora, skutera, četvorotočkaša, motornih sanki itd.",
  },
  {
    id: 3,
    icon: GiWeight,
    title: "ŠLEP KOMBIJA I KAMIONA",
    text: "Vršimo uslugu transporta kombi vozila, kamiona, radnih masina na teritoriji cele Srbije.",
  },
  {
    id: 4,
    icon: GiWeight,
    title: "ŠLEP VOZILA IZ INOSTRANSTVA",
    text: "Vršimo prevoz automobila iz inostranstva po najpovoljnijim cenama u Srbiji.",
  },
  {
    id: 5,
    icon: GiWeight,
    title: "POMOĆ NA PUTU 0-24h",
    text: "Svakom može zatrebati u nekom trenutku, naročito u hitnim slučajevima. Kada je potrebna šlep služba u Cacku i na teritoriji Zlatibora.",
  },
  {
    id: 6,
    icon: GiWeight,
    title: "ŠLEP LAKOG I TEŠKOG TERETA",
    text: "Za vas prevozimo i laki i teški teret, kako u Cacku, tako i u drugim gradovima Srbije.",
  },
  {
    id: 7,
    icon: GiWeight,
    title: "Šlep Havarisanog Vozila",
    text: "Kada se suočite s havarijom na putu, shvatate koliko je važno prepustiti šlepanje havarisanog vozila profesionalcima. Upravo iz tog razloga, tim stručnjaka iz Šlep Beograd je tu da vam pruži pouzdanu i proverenu šlep uslugu koja će bezbedno prevesti vaše havarisano vozilo do najbližeg servisa ili prema vašem izboru.",
  },
  {
    id: 8,
    icon: GiWeight,
    title: "Izvlacenje sajlom vozila van puta",
    text: "Kada se suočite s havarijom na putu, shvatate koliko je važno prepustiti šlepanje havarisanog vozila profesionalcima. Upravo iz tog razloga, tim stručnjaka iz Šlep Beograd je tu da vam pruži pouzdanu i proverenu šlep uslugu koja će bezbedno prevesti vaše havarisano vozilo do najbližeg servisa ili prema vašem izboru.",
  },
];
