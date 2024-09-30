import { Button, CardWrap } from "../";
import Image from "next/image";

const btnSize = "py-3 px-4 xl:py-4 xl:px-5";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full xl:px-[20px] mt-[50px]">
      <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-between items-center w-full">
        <div className="flex gap-x-2 lg:gap-x-5 xl:gap-x-10 text-lg lg:text-2xl xl:text-[32px]">
          <a
            href="https://dexscreener.com/solana/479ekzizdwb756kbtw3jemaq8p6ozkix6xxksihdyfrv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="purple"
              text="Dexscreener"
              withIcon="screener"
              className={btnSize}
            />
          </a>
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/479ekZizdwB756KbtW3jeMAQ8p6ozKiX6XXKsihDYFRv?t=1726117532509"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              type="purple"
              text="Dextools"
              withIcon="tools"
              className={btnSize}
            />
          </a>
        </div>

        <div className="flex gap-x-2 lg:gap-x-5 xl:gap-x-10">
          <CardWrap className="transition-all duration-500 hover:scale-105">
            <a
              href="https://x.com/Vodcatonsol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                onClick={() =>
                  window.open("https://x.com/Vodcatonsol", "_blank")
                }
                className="bg-white hover:bg-customYellow transition-all duration-500 rounded-md p-3 xl:p-4"
              >
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
          <CardWrap className="transition-all duration-500 hover:scale-105">
            <a
              href="https://t.me/VodcatsonSol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white hover:bg-customYellow transition-all duration-500 rounded-md p-3 xl:p-4">
                <Image
                  onClick={() =>
                    window.open("https://t.me/VodcatsonSol", "_blank")
                  }
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
            <div className="bg-white rounded-md p-3 xl:p-4">
              <Image
                src="/icons/discord.svg"
                alt="discord"
                width={40}
                height={40}
                className="w-[30px] h-[30px] xl:w-[40px] xl:h-[40px]"
              />
            </div>
          </CardWrap> */}
        </div>

        <a
          href="https://jupiter-terminal.dexscreener.com/?inputMint=HYJVpy2KRkF8L7W5cZmFQbs8HjsLvWQCPbUUSsbptaho&outputMint=So11111111111111111111111111111111111111112"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            type="red"
            text="Buy $VODCAT"
            className="py-4 xl:py-5 px-14 xl:px-24 text-[24px] lg:text-[30px] xl:text-[40px]"
          />
        </a>
      </div>
      <div className="flex py-5 lg:py-20 gap-x-10 uppercase text-base sm:text-2xl">
        <h3>Need help?</h3>
        <a href="mailto:info@vodcat.io">info@vodcat.io</a>
        <a href="https://solscan.io/account/HnRQjsxEnxHUhe9wZrfPf5jNNaAjjndXLwDte8Wcsbgh">
          Marketing wallet
        </a>
      </div>
    </footer>
  );
};
