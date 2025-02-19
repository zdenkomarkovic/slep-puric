import Image from "@/node_modules/next/image";
import React from "react";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center py-20 ">
      <h2 className="text-5xl">
        POVOLJNA CENA I BRZA USLUGA ŠLEPANJA VOZILA U ZEMLJI I INOSTRANSTVU
      </h2>
      <Image
        src={"/puric slep.jpg"}
        width={700}
        height={700}
        alt="slep cacak"
        className="rounded-r-full"
      />
    </div>
  );
};

export default CardWithImage;
