"use client";
import { GlareCard } from "./ui/glare-card";
import Image from "next/image";

import React from "react";

const Card = () => {
  return (
    <div className="m-2">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <Image
          src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRxrqcQoeHoURO7_NtQeCJcXDwHSesjOlmc5rUnDyxM66Az1ZM4eNIT2oB2n_rM67sMNNrD_qEGY37VcTCeKsUtGMGdzQA75YaEoTSxVOIszG3VQd9YhX_LQw"
          alt="Sample Image"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <p className="font-bold text-white text-lg">The greatest trick</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          The greatest trick the devil ever pulled was to convince the world
          that he didn&apos;t exist.
        </p>
      </GlareCard>
    </div>
  );
};

export default Card;
