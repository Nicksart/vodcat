"use client"

import { useBreakpoint } from "@/utils/useBreakpoint";
import { Heading } from "./UI/Heading";

export const Chart = () => {
  const isMd = useBreakpoint("md");

    return (
      <section className="flex flex-col items-center justify-center mt-[60px] container">
        <Heading text="Vodcat live chart" />
        <div className="rounded-lg w-full mt-4 md:mt-0">
          <div className="h-auto w-full bg-white p-2 md:p-5 mb-12 md:mb-0 rounded-lg overflow-hidden">
            <iframe
              id="dextools-widget"
              title="DEXTools Trading Chart"
              width="100%"
              height="auto"
              style={{
                borderRadius: "10px",
                border: "3px solid black",
                minHeight: isMd ? "700px" : "400px",
              }}
              src="https://www.dextools.io/widget-chart/en/solana/pe-light/479ekZizdwB756KbtW3jeMAQ8p6ozKiX6XXKsihDYFRv?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
            ></iframe>
          </div>
        </div>
      </section>
    );
}