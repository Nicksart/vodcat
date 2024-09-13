"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useBreakpoint } from "@/utils/useBreakpoint";

export type RoadmapItemProps = {
  title: string;
  description: string;
  img: string;
  rotation: number;
  zIndex?: number;
};

export const RoadmapItem = ({
  title,
  description,
  img,
  rotation,
  zIndex,
}: RoadmapItemProps) => {
  const isMd = useBreakpoint("md");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        transform: isMd ? `rotate(${rotation}deg)` : ``,
        zIndex: zIndex,
      }}
      className="bg-white text-black shadow-2xl self-start rounded-lg p-3 xl:p-5 flex flex-col w-[350px] xl:w-[450px]"
    >
      <div
        className="relative border-[3px] border-black overflow-hidden transition-all duration-300 hover:bg-customBlue rounded-lg h-[340px] xl:w-[440px] xl:h-[440px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={img}
          alt={title}
          width={440}
          height={440}
          className="absolute top-0 z-20 w-full h-full"
        />

        <Image
          src="/hero/cloud.png"
          alt="Moving Cloud"
          width={225}
          height={112}
          className={`z-0 top-12 opacity-30 transition-transform duration-500 ease-in-out ${
            isHovered
              ? "translate-x-[200px] opacity-100"
              : "translate-x-[450px] opacity-0"
          }`}
        />

        <Image
          src="/hero/cloud.png"
          alt="Moving Cloud"
          width={225}
          height={112}
          className={`absolute top-[200px] left-0 transition-transform duration-500 ease-in-out ${
            isHovered
              ? "-translate-x-[100px] opacity-100 "
              : "-translate-x-[225px] opacity-0"
          }`}
        />
      </div>

      <h1 className="px-3 text-[30px] xl:text-[40px] my-[5px]">{title}</h1>
      <p className="px-3 font-light text-lg xl:text-xl mb-[10px]">
        {description}
      </p>
    </div>
  );
};
