import {
  Chart,
  Header,
  Hero,
  Memes,
  Roadmap,
  Tokenomics,
} from "@/components";
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white font-londrina min-h-screen justify-start w-screen h-full">
      <article className="flex relative flex-col items-center pt-5 md:pt-10 w-full bg-customBlue">
        <Header />
        <Hero />
        <Image
          src="/bg/bg1-2.png"
          className="absolute bottom-0 w-screen"
          alt="grass"
          width={2000}
          height={600}
        />
      </article>
      <article
        className="flex items-center -mt-[80px] flex-col pt-10 w-full md:h-[1000px] bg-customBrown bg-no-repeat"
        style={{
          backgroundImage: "url('/bg/bg3.png'), url('/bg/bg3b.png')",
          backgroundSize: "cover",
          backgroundPosition: "top, top right",
        }}
      >
        <Chart />
      </article>

      <article className="flex items-center flex-col pt-4 md:pt-10 pb-[100px] w-full bg-customBrown bg-no-repeat">
        <Roadmap />
      </article>

      <article
        className="flex items-center z-10 -mt-[350px] md:-mt-[300px] flex-col md:pt-10 w-full bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/bg/bg4.png')" }}
      >
        <Tokenomics />
      </article>

      <article
        className="flex items-center -mt-[360px] md:-mt-[230px] flex-col pt-10 w-full bg-customBrown bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent, black), url('/bg/bg5.png')",
        }}
      >
        <Memes />
      
      </article>
    </main>
  );
}
