import Image from "@/node_modules/next/image";
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const CardWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center py-20 ">
      <h2 className="text-5xl text-primary font-bold">
        POVOLJNA CENA I BRZA USLUGA ŠLEPANJA VOZILA U ZEMLJI I INOSTRANSTVU
      </h2>
      <div className="flex gap-20  items-stretch ">
        <div>
          <Image
            src={"/puric slep.jpg"}
            width={700}
            height={700}
            alt="slep cacak"
            className="rounded-r-full"
          />
        </div>
        <div className="flex flex-col py-20 justify-between text-left text-3xl">
          <p className="flex gap-5 items-center">
            {" "}
            <span className="text-primary text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>{" "}
            Treba vam pomoć na putu?
          </p>
          <p className="flex gap-5 items-center">
            {" "}
            <span className="text-primary text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            U svakom trenutku spremni 24h dnevno
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Povoljne cene
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Profesionalna usluga
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Dugogodisnje iskustvo
          </p>
          <p className="flex gap-5 items-center">
            <span className="text-primary text-5xl bg-muted-foreground rounded-full">
              <FaRegCircleCheck />
            </span>
            Poštujemo vaše vreme
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardWithImage;
