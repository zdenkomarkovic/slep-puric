import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import CardWithImage from "@/components/CardWithImage";
import Hero from "@/components/Hero";
import Cards1 from "@/components/Cards1";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { cards2Data, lineCardsData } from "@/constants/index";
import Cards2 from "@/components/Cards2";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PozoviteNasOdmah />
      <About />

      <Cards2 title={"Usluge"} data={cards2Data} text={""} />
      <BackgroundImage image={"/pozadina5.avif"} />
      <Cards1 title={"Šlep Purić Čačak"} data={lineCardsData} />
      <BackgroundImage image={"/pozadina6.jpg"} />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Testemonials />
    </div>
  );
}
