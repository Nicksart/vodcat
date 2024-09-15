import { Heading } from "../UI/Heading";
import { RoadmapItem, RoadmapItemProps } from "./RoadmapItem";

const RoadmapDetails: RoadmapItemProps[] = [
  {
    title: "Burn at 1M MC",
    description:
      "10% of total supply will be burnt at 1M market cap. $VODCAT doesn't care about jeeters.",
    img: "/roadmap/road1.png",
    rotation: -5.84,
    zIndex: 10
  },
  {
    title: "Burn at 5M MC",
    description:
      "$VODCAT is happy with HODLERS. Another 20% of total supply will be burnt at 5M market cap. Jeeters are starting to cry.",
    img: "/roadmap/road2.png",
    rotation: 2.77,
  },
  {
    title: "Burn at 10M MC",
    description:
      "$VODCAT decided it's time to fly to the moon. Another 20% of total supply will be burnt at 10M market cap. A secret rocket project is revealed to the jeeters.",
    img: "/roadmap/road3.png",
    rotation: -3.96,
  },
];

export const Roadmap = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:mt-[60px] z-20 container">
      <Heading  text="Roadmap" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-5 auto-rows-auto mt-8">
        {RoadmapDetails.map((item, index) => (
          <RoadmapItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
