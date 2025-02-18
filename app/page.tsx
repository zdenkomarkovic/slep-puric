import About from "@/components/About";
import BackgroundImage from "@/components/BackgroundImage";

import Hero from "@/components/Hero";
import LineCards from "@/components/LineCards";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import Testemonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <BackgroundImage />
      <LineCards />
      <PozoviteNasOdmah />
      <Testemonials />
    </div>
  );
}
