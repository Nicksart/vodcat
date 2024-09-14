"use client"
import Image from "next/image";
import { Footer } from "./UI";
import { useBreakpoint } from "@/utils/useBreakpoint";
import { cn } from "@/utils";
import { Heading } from "./UI/Heading";

interface MemeCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const MemeCard = ({ src, alt, width, height }: MemeCardProps) => {
  const isMd = useBreakpoint("md");

  return (
    <div 
     className={"bg-white hover:bg-customYellow p-5 rounded-lg"}>
      <Image
        className={cn("border border-black rounded-lg", !isMd && "w-full")}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
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
    const isSm = useBreakpoint("sm");


  const memeDataLeft = [
    { src: "/memes/meme1.png", alt: "Image 1", width: 268, height: 339 },
    { src: "/memes/meme2.png", alt: "Image 2", width: 268, height: 305 },
  ];

  return (
    <section className="flex flex-col items-center w-full container z-20">
      <Heading text="Memes" />

      <div className="flex flex-col items-center lg:flex-row gap-14 mt-12">
        {isSm && <MemeColumn memes={memeDataLeft} />}

        <div className="bg-white relative hover:bg-customYellow p-5 rounded-lg w-[360px] h-[400px] md:w-[407px] md:h-[624px]">
          <div className="absolute top-0 left-0 w-full h-full p-5 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              preload="none"
              width={isSm ? 360 : 407}
              height={624}
              className=" top-0 left-0 w-full h-full object-cover rounded-lg border-[3px] border-black"
            >
              <source src="/memes/video3.mp4" type="video/mp4" className="" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="flex flex-col space-y-14">
          <div className="bg-white relative hover:bg-customYellow p-5 rounded-lg w-[360px] h-[400px] md:w-[476px] md:h-[281px]">
            <div className="absolute top-0 left-0 w-full h-full p-5 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                preload="none"
                width={isSm ? 360 : 476}
                height={281}
                className=" top-0 left-0 w-full h-full object-cover rounded-lg border-[3px] border-black"
              >
                <source src="/memes/video4.mp4" type="video/mp4" className="" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <MemeCard
            src="/memes/meme5.png"
            alt="Image 3"
            width={476}
            height={163}
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};
