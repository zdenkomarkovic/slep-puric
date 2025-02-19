"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Image from "@/node_modules/next/image";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-foreground text-muted pt-6">
      <div className="container px-2 md:px-4 mx-auto font-bold flex justify-center items-center gap-20">
        <Image
          src={"/slep puric.jpg"}
          width={250}
          height={200}
          alt="puric slep"
          className="rounded-t-xl"
        />
        <div className="flex flex-col  items-stretch">
          <div>
            <h2 className="text-4xl">
              Potrebna vam je transport i šlep vašeg vozila?
            </h2>
            <p className="text-primary">Šlep služba Purić Čačak</p>
          </div>
          <a href="tel:+381659480700">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" text-nowrap flex gap-3 text-3xl items-center text-primary bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
            >
              <PhoneIcon /> Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
