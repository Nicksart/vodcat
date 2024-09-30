import { cn } from "@/utils";
import { Heading } from "./UI/Heading";
import Image from "next/image";
import { Button } from "./UI";


const LocalHeading = ({ text, className }: { text: string, className?: string }) => {
    return (
        <h1 className={cn("text-[30px] lg:text-[40px] font-bold text-black", className)}>
        {text}
        </h1>
    );
}

const WhiteContainer = ({ children, className }: {children: React.ReactNode, className?: string}) => {

    return (
      <div
        className={cn(
          "bg-white py-6 lg:py-8 px-2 lg:px-5 flex flex-col items-start justify-center shadow-[0_8px_8px_rgba(0,0,0,0.32)] rounded-lg h-[88px]",
          className
        )}
      >
        {children}
      </div>
    );
}

export const NewRoadmap = () => {
  return (
    <section className="flex flex-col items-center justify-center  uppercase z-20 container text-[16px] lg:text-[20px] font-light text-black">
      <Heading text="Roadmap" />
      <div className="flex flex-col items-center w-full mt-[100px] lg:mt-[160px]">
        <Heading text="Q3 2024" />

        <div className="flex flex-col gap-y-6 sm:gap-y-0 sm:gap-x-5 lg:gap-x-10 w-full mt-10">
          <div className="w-full sm:w-[22%] min-w-[200px]">
            <WhiteContainer className="w-full items-center justify-center ">
              <LocalHeading text="14/09/24" />
            </WhiteContainer>

            <WhiteContainer className="w-full items-start justify-center mt-5 h-[110px]">
              <ul className="list-disc ml-[20px]">
                <li>REALISE OF WEBSITE</li>
              </ul>
            </WhiteContainer>
          </div>

          <div className="w-full sm:w-[22%] min-w-[200px]">
            <WhiteContainer className="w-full items-center justify-center ">
              <LocalHeading text="15/09/24" />
            </WhiteContainer>

            <WhiteContainer className="w-full items-start justify-center mt-5 h-[110px]">
              <ul className="list-disc ml-[20px]">
                <li>APPLY FOR DEXTOOLS</li>
                <li>APPLY FOR VERIFIED AT JUPITER</li>
              </ul>
            </WhiteContainer>
          </div>
          <div className="w-full sm:w-[56%] min-w-[350px]">
            <WhiteContainer className="w-full items-center justify-center ">
              <LocalHeading text="Till the end of September:" />
            </WhiteContainer>

            <WhiteContainer className="w-full items-start justify-center mt-5 h-[110px]">
              <ul className="list-disc ml-[20px]">
                <li>Mem contests with prizes and rewards</li>
                <li>Listing on CMC and coingeecko</li>
              </ul>
            </WhiteContainer>
          </div>
        </div>
        <div className="flex flex-col mt-[100px] lg:mt-[160px]">
          <Heading text="Q4 2024" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 sm:gap-y-0  gap-x-8 lg:gap-x-14 mt-10">
            <div className="flex flex-col gap-y-4">
              <WhiteContainer className="w-full items-center justify-center ">
                <LocalHeading text="October" />
              </WhiteContainer>

              <WhiteContainer className="w-full items-start justify-center mt-5 h-full">
                <ul className="list-disc ml-[20px]">
                  <li>Finish design for Leopold merch</li>
                  <li>Listing on Symbiosis</li>
                  <li>Listing on DropsTab</li>
                  <li>Listing on CoinStats</li>
                </ul>
                <LocalHeading text="End of October" />
                <ul className="list-disc ml-[20px]">
                  <li>Ship Leopold merch worldwide</li>
                  <li>Raising Reddit community over 1000+ people </li>
                  <li>Launch of contest with huge financial</li>
                  <li>rewards for digital artists</li>
                </ul>
              </WhiteContainer>
            </div>

            <div className="flex flex-col gap-y-4">
              <WhiteContainer className="w-full items-center justify-center ">
                <LocalHeading text="November" />
              </WhiteContainer>

              <WhiteContainer className="w-full items-start justify-center mt-5 h-full">
                <ul className="list-disc ml-[20px]">
                  <li>KOLs AND SHOUT OUTS FROM PARTNERS</li>
                  <li>MORE CONTEST WITH PRIZES AND REWARDS FOR MEM CREATION</li>
                </ul>
                <LocalHeading text="End of November" />
                <ul className="list-disc ml-[20px]">
                  <li> INCREASE TG MEMBERS TO 1000+</li>
                </ul>
                <LocalHeading text="End of December" />
                <ul className="list-disc ml-[20px]">
                  <li> Drink vodka</li>
                </ul>
              </WhiteContainer>
            </div>

            <div className="flex flex-col gap-y-4">
              <WhiteContainer className="w-full items-center justify-center ">
                <LocalHeading text="Q1-Q2 2025" />
              </WhiteContainer>

              <WhiteContainer className="w-full items-start justify-center mt-5 h-full">
                <ul className="list-disc ml-[20px]">
                  <li>LISTING ON T2 EXCHANGES</li>
                  <li>MORE KOLs AROUND THE WORLD</li>
                  <li>EXCLUSIVE NFT’s FOR LEOPOLD</li>
                  <li>UNLOADING YOUR HEAVY BAGS </li>
                  <li>WHALES INCOMING</li>
                  <li>MOVING ON A NEW LVL </li>
                </ul>
              </WhiteContainer>
            </div>
          </div>
        </div>

        <WhiteContainer className="w-full items-center justify-center flex-col sm:flex-row p-5 h-auto mt-[160px]">
          <Image
            src="/roadmap/whitepaper.png"
            width={1313}
            height={450}
            alt="roadmap"
            className="w-full sm:w-[60%] h-auto rounded-[11px] border-2 border-black"
          />
          <div className="w-full flex flex-col justify-center items-center gap-y-10">
            <p className="text-center mt-5 sm:mt-0 px-4 sm:px-10">
              Discover the full potential of our project by exploring the
              Whitepaper. $VODCAT isn&apos;t just another memecoin; it&apos;s a
              symbol of calm, wisdom, and peaceful existence.
            </p>
            <a href="/whitepaper.pdf" target="_blank" rel="noopener noreferrer">
              <Button
                text="Whitepaper"
                className="px-3 py-2 font-medium text-[32px]"
                type="yellow"
              />
            </a>
          </div>
        </WhiteContainer>
      </div>
    </section>
  );
};
