import { Heading } from "../UI/Heading";
import { RoadmapItem, RoadmapItemProps } from "./RoadmapItem";

const RoadmapDetails: RoadmapItemProps[] = [
  {
    title: "Ecosystem",
    description: "Strong Community , artists , memes , contest and prizes.",
    img: "/roadmap/road1.png",
    rotation: -5.84,
    zIndex: 10,
  },
  {
    title: "Narrative",
    description:
      "Leopold is truly based character, knows as icon of Friendship and unity.",
    img: "/roadmap/road2.png",
    rotation: 2.77,
  },
  {
    title: "$VODCAT Power",
    description: "Guys, let's live in peace! Paws, relax, and HODL!",
    img: "/roadmap/road3.png",
    rotation: -3.96,
  },
];

export const Roadmap = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:mt-[60px] z-20 container">
      <Heading text="Why $Vodcat" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-0 lg:gap-x-5 auto-rows-auto mt-8">
        {RoadmapDetails.map((item, index) => (
          <RoadmapItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
