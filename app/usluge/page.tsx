"use client";
import { cards2Data } from "@/constants/index";
import Image from "@/node_modules/next/image";
import { usePathname } from "@/node_modules/next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Uklanja #
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [pathname]); // Pokreni kad se promeni putanja
  return (
    <div className="py-24">
      <div className="container px-2 md:px-4 mx-auto">
        <h1 className="py-20 text-primary text-6xl text-center">
          Šlep Purić - pouzdana i Brza Pomoć na Putu – 24/7 Dostupnost
        </h1>
        <p className="text-3xl py-10 px-20">
          Naša slep služba pruža{" "}
          <span className="font-bold">siguran i brz prevoz vozila</span> u svim
          situacijama – kvarovi, nezgode ili potreba za transportom. Bez obzira
          na vreme ili lokaciju,{" "}
          <span className="font-bold">uvek smo dostupni</span> , jer imamo{" "}
          <span className="font-bold">više vozila u voznom parku</span> koja su
          spremna za hitne intervencije.
        </p>
        {cards2Data.map((data, i) => {
          return (
            <div key={data.id} id={data.divName}>
              <h2 className="text-primary text-6xl py-10 text-center">
                {data.title}
              </h2>
              <div
                className={`px-20 flex ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-20 items-center justify-between border-b py-10`}
              >
                <p className="text-2xl">{data.text}</p>
                <Image
                  src={data.image}
                  width={250}
                  height={250}
                  alt="slep puric"
                  className="rounded-2xl"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
