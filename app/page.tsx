import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";
import CardWithImage from "@/components/CardWithImage";

import Hero from "@/components/Hero";
import LineCards from "@/components/LineCards";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <PozoviteNasOdmah />
      <About />
      <BackgroundImage />
      <LineCards />
      <CardWithImage />
      <PozoviteNasOdmahImage />
      <Testemonials />
    </div>
  );
}
