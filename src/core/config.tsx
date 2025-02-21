import { ReactNode } from "react";
import LampImage from "../assets/images/floorLamp.png";
import { OpeningCard } from "../components/OpeningCard.tsx";
import { TextLoadingStatus } from "../animations/TextLoadingStatus.tsx";
import { FlippingCard } from "../components/FlippingCard.tsx";

export type Component = {
  title: string;
  component: ReactNode;
};

export const Components: Component[] = [
  {
    title: "OpeningCard",
    component: (
      <OpeningCard
        image={LampImage}
        title={"Simple lamp"}
        smallDescription={"This is a simple lamp"}
        fullDescription={
          "Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery " +
          "Research conducted in the 1970s revealed that he’d designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium and varnished wood."
        }
      />
    ),
  },
  {
    title: "TextLoadingStatus",
    component: <TextLoadingStatus textAnimationDuration={1.6} />,
  },
  { title: "FlippingCard", component: <FlippingCard /> },
];
