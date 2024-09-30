

export const Heading = ({ text }: {text: string}) => {
  return (
    <h1 className="uppercase text-center font-medium text-[55px] md:text-[80px] text-stroke text-white">
      {text}
    </h1>
  );
};