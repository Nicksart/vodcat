import Image from "next/image";
import { CardWrap } from "./UI";
import { Heading } from "./UI/Heading";

interface TokenomicsCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const TokenomicsCard = ({
  imgSrc,
  imgAlt,
  title,
  description,
}: TokenomicsCardProps) => {
  return (
    <CardWrap>
      <div className="bg-white hover:bg-customBlue flex px-2 md:px-3 xl:px-5 py-5 xl:py-10 rounded-lg text-black w-full md:w-[400px] xl:w-[540px]">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={120}
          height={120}
          className="w-[80px] h-[80px] xl:w-[120px] xl:h-[120px]"
        />
        <div className="ml-5 xl:ml-10 flex flex-col justify-between uppercase">
          <h1 className="text-[30px] xl:text-[40px] -mt-[15px]">{title}</h1>
          <p className="text-lg xl:text-xl text-left -mb-[8px]">
            {description}
          </p>
        </div>
      </div>
    </CardWrap>
  );
};

export const Tokenomics = () => {
  return (
    <section className="flex relative flex-col items-center w-full h-[900px] xl:h-[1400px] container mt-[300px]" id="tokenomics">

        <Image
          src="/gifs/3.gif"
          alt="Moving Cloud"
          width={200}
          height={200}
          className="absolute animate-cloud-move-reverse  -mt-[100px]"
        />

        <Image
          src="/gifs/4.gif"
          alt="Moving Cloud"
          width={200}
          height={200}
          className="absolute animate-cloud-move mt-[820px]"
        />

        <Image
          src="/gifs/2.gif"
          alt="Moving Cloud"
          width={200}
          height={200}
          className="absolute animate-cloud-move mt-[1520px]"
        />

      <Heading text="Tokenomics" />
      <div className="flex justify-center lg:justify-between items-center w-full mt-10">
        <div className="flex flex-col gap-y-[20px] md:gap-y-[50px]">
          <TokenomicsCard
            imgSrc="/tokenomics/supply.png"
            imgAlt="supply"
            title="Total supply"
            description="1bil"
          />
          <TokenomicsCard
            imgSrc="/tokenomics/liquidity.png"
            imgAlt="liquidity"
            title="Liquidity"
            description="Burned"
          />
          <TokenomicsCard
            imgSrc="/tokenomics/tax.png"
            imgAlt="tax"
            title="Tax"
            description="0%, open and unchangeable source code, minting off"
          />
        </div>

        <Image
          src="/tokenomics/coin.gif"
          alt="token"
          width={700}
          height={700}
          className="hidden lg:flex w-[450px] h-[450px] xl:w-[700px] xl:h-[700px]"
        />
      </div>
    </section>
  );
};
