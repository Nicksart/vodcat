import { cn } from "@/utils";
import { CardWrap } from "./CardWrap";
import Image from "next/image";

const buttonStyles = {
  red: "bg-customRed text-white",
  purple: "bg-customPurple text-white",
  yellow: "bg-customYellow text-black",
};

type ButtonType = keyof typeof buttonStyles;

type ButtonProps = {
  text: string;
  type: ButtonType;
  onClick?: () => void;
  className?: string;
  withIcon?: 'tools' | 'screener';
} 

export const Button = ({text, type, onClick, className, withIcon}: ButtonProps) => {
  return (
    <CardWrap className="">
      <button
        className={cn(
          "flex text-center cursor-pointer justify-center items-center rounded-md uppercase w-full hover:brightness-90",
          buttonStyles[type],
          className
        )}
      >
        {text}
        {withIcon === "tools" && (
          <Image
            alt="dextools"
            width={30}
            height={35}
            className="ml-2 xl:ml-4 h-[30px] xl:w-[30px] xl:h-[35px]"
            src="/icons/tools.svg"
          />
        )}
        {withIcon === "screener" && (
          <Image
            alt="dexscreener"
            width={30}
            height={35}
            className="ml-2 xl:ml-4 h-[30px] xl:w-[30px] xl:h-[35px]"
            src="/icons/screener.svg"
          />
        )}
      </button>
    </CardWrap>
  );
};
