import Image from "next/image";
import { Button, CardWrap } from "./UI";

export const Hero = () => {
  return (
    <>
      <section className="w-full z-10 flex flex-col items-start justify-start container">
        <div className="mt-2 lg:mt-10 xl:mt-20 w-full h-[200px] md:h-[300px] lg:h-[500px] relative z-10">
          <Image
            src="/hero/hero-text.png"
            alt="VODCAT"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between items-center mt-0 mf:mt-10 lg:mt-14 md:mb-[350px]">
          <div className="flex flex-col">
            <p className="text-white text-xl xl:text-2xl uppercase font-light max-w-[300px] lg:max-w-[350px] xl:max-w-[400px]">
              The chillest token in the crypto verse, inspired by Cat Leopold -
              because sometimes the best way to handle the chaos is to say,
              &rdquo;Guys, let&rsquo;s live in peace!&rdquo; Paws, relax, and
              hodl
            </p>
            <div className="mt-4 md:mt-[65px] ml-2 flex justify-center md:justify-start gap-x-10">
              <CardWrap>
                <a
                  href="https://x.com/Vodcatonsol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded-md p-3 xl:p-4">
                    <Image
                      src="/icons/twitter.svg"
                      alt="twitter"
                      width={40}
                      height={40}
                      className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"
                    />
                  </div>
                </a>
              </CardWrap>
              <CardWrap>
                <a
                  href="https://t.me/VodcatsonSol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded-md p-3 xl:p-4">
                    <Image
                      src="/icons/telegram.svg"
                      alt="telegram"
                      width={40}
                      height={40}
                      className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"
                    />
                  </div>
                </a>
              </CardWrap>
              {/* <CardWrap>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <div
                    className="bg-white rounded-md p-3 xl:p-4"
                  >
                    <Image
                      src="/icons/discord.svg"
                      alt="discord"
                      width={40}
                      height={40}
                      className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"
                    />
                  </div>
                </a>
              </CardWrap> */}
            </div>
          </div>
          <div className="mb-[50px] mt-6 md:mt-0 z-30">
            <a href="https://jupiter-terminal.dexscreener.com/?inputMint=HYJVpy2KRkF8L7W5cZmFQbs8HjsLvWQCPbUUSsbptaho&outputMint=So11111111111111111111111111111111111111112" target="_blank" rel="noopener noreferrer">
            <Button
              type="red"
              text="Buy $VODCAT"
              className="py-3 md:py-4 xl:py-5 px-10 md:px-14 xl:px-24 text-[24px] md:text-[30px] xl:text-[40px]"
            />
            </a>
          </div>
        </div>
        <Image
          src="/hero/hero.png"
          alt="cat"
          width={1000}
          height={1200}
          className="absolute z-20 hidden lg:flex w-[750px] h-[900px] xl:w-[1000px] xl:h-[1200px] top-[270px] left-1/2 transform -translate-x-1/2"
        />
      </section>

      <div className="absolute w-screen h-[1000px] overflow-hidden">
        <div className="relative w-full h-full ">
          <Image
            src="/hero/cloud.png"
            alt="Moving Cloud"
            width={450}
            height={225}
            className="absolute top-2 opacity-30 animate-cloud-move"
          />

          <Image
            src="/hero/cloud.png"
            alt="Moving Cloud"
            width={450}
            height={225}
            className="absolute top-2 animate-cloud-move delay-10000 transform translate-x-[100vw]"
          />

          <Image
            src="/hero/cloud.png"
            alt="Moving Cloud"
            width={450}
            height={225}
            className="absolute top-[420px] opacity-30 delay-3000 animate-cloud-move"
          />

          <Image
            src="/hero/cloud.png"
            alt="Moving Cloud"
            width={450}
            height={225}
            className="absolute top-[420px] animate-cloud-move delay-13000 transform translate-x-[100vw]"
          />

          <Image
            src="/hero/cloud.png"
            alt="Moving Cloud"
            width={450}
            height={225}
            className="absolute hidden md:flex top-[770px] opacity-30 delay-5000 animate-cloud-move transform translate-x-[100vw]"
          />

          <Image
            src="/hero/cloud.png"
            alt="Moving Cloud"
            width={450}
            height={225}
            className="absolute hidden md:flex top-[770px] animate-cloud-move delay-15000 transform translate-x-[100vw]"
          />
        </div>
      </div>
    </>
  );
};
