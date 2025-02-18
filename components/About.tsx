import Image from "@/node_modules/next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex gap-20 items-center">
        <div className=" w-2/3 space-y-8">
          <h2 className="text-6xl text-primary flex flex-col  text-center">
            Šlep služba Čačak - Purić{" "}
            <span className="text-3xl  text-muted-foreground">
              Do 10 tona nosivosti
            </span>
          </h2>
          <p className=" first-letter:pl-6 text-3xl">
            Tražite{" "}
            <span className="font-bold">pouzdanu šlep službu u Čačku</span> i
            okolini? Naša profesionalna ekipa je dostupna 24/7 i spremna da vam
            pomogne u bilo kojoj situaciji – bilo da je u pitanju{" "}
            <span className="font-bold">
              kvar, saobraćajna nezgoda, probušena guma
            </span>{" "}
            ili bilo koji drugi problem na putu.
          </p>
          <p className=" first-letter:pl-6 text-3xl">
            Naša šlep služba pruža siguran i brz transport vozila na teritoriji
            <span className="font-bold">
              Čačka, Gornjeg Milanovca, Kraljeva, Užica i cele Srbije
            </span>
            . Bez obzira na to da li vam je potreban{" "}
            <span className="font-bold">
              prevoz automobila, kombija, motocikla ili lakših teretnih vozila
            </span>
            , posedujemo specijalizovana vozila i opremu za bezbedan transport.
          </p>
          <p className=" first-letter:pl-6 text-3xl">
            Kontaktirajte nas 24/7 i obezbedite siguran prevoz vašeg vozila.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden w-1/3">
          <Image
            src={"/logo.jpg"}
            width={500}
            height={800}
            alt="slep puric cacak "
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
