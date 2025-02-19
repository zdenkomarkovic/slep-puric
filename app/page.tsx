import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import CardWithImage from "@/components/CardWithImage";
import Hero from "@/components/Hero";
import Cards1 from "@/components/Cards1";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { lineCardsData, servisCardsData } from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PozoviteNasOdmah />
      <About />
      <Cards1 title={"Usluge"} data={servisCardsData} />
      <BackgroundImage />
      <Cards1 title={"Šlep Purić Čačak"} data={lineCardsData} />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Testemonials />
    </div>
  );
}
