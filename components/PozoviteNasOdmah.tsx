"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";

const PozoviteNasOdmah = () => {
  return (
    <div className="bg-foreground text-primary py-20">
      <div className="container px-2 md:px-4 mx-auto font-bold flex items-center gap-20">
        <h2 className="text-4xl">
          Mi smo brza, bezbedna i povoljna šlep služba koja Vam je na usluzi 24
          h, 365 dana u godini.
        </h2>
        <a href="tel:+381659480700">
          <motion.button
            whileHover={{ translateY: "-5px" }}
            whileTap={{ scale: 0.95 }}
            className=" text-nowrap flex gap-3 text-3xl items-center text-muted-foreground bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
          >
            <PhoneIcon /> Pozovite odmah
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default PozoviteNasOdmah;
