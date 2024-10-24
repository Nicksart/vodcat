"use client";
import Image from "next/image";
import { Footer } from "./UI";
import { cn } from "@/utils";
import { Heading } from "./UI/Heading";

interface MemeCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MemeCard = ({ src, alt, width, height }: MemeCardProps) => {

  return (
    <div
      className="bg-white hover:bg-customYellow p-5 rounded-lg flex items-center justify-center"
      style={{ maxHeight: height + 40 }}
    >
      <div className="overflow-hidden w-full h-full flex items-center justify-center">
        <Image
          className={cn(
            "border border-black rounded-lg overflow-hidden",
          )}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

const MemeColumn = ({ memes }: { memes: MemeCardProps[] }) => {
  return (
    <div className="flex flex-col space-y-14">
      {memes.map((meme, index) => (
        <MemeCard key={index} {...meme} />
      ))}
    </div>
  );
};

export const Memes = () => {
  const memeDataLeft = [
    { src: "/memes/meme1.png", alt: "Image 1", width: 268, height: 339 },
    { src: "/memes/meme2.png", alt: "Image 2", width: 268, height: 305 },
  ];

  const memeDataRight = [
    { src: "/memes/meme4.png", alt: "Image 4", width: 476, height: 381 },
    { src: "/memes/meme5.png", alt: "Image 5", width: 476, height: 263 },
  ];

  return (
    <section className="flex flex-col -mt-[660px] items-center w-full container z-20">
      <Heading text="Memes" />

      <div className="flex flex-col md:flex-row gap-14 mt-12">
        <MemeColumn memes={memeDataLeft} />

        <MemeCard
          src="/memes/meme3.png"
          alt="Image 3"
          width={407}
          height={734}
  
        />

        <MemeColumn memes={memeDataRight} />
      </div>

      <Footer />
    </section>
  );
};
