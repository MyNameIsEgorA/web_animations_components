import { OpeningCard } from "../components/OpeningCard.tsx";
import LampImage from "../assets/images/floorLamp.png";
import { TextLoadingStatus } from "../animations/TextLoadingStatus.tsx";
import { FlippingCard } from "../components/FlippingCard.tsx";
import { FC } from "react";

interface ComponentsListProps {
  activeComponent: string;
}

export const ComponentsList: FC<ComponentsListProps> = ({
  activeComponent,
}) => {
  return (
    <div className="flex-1 h-full flex justify-center items-center">
      {activeComponent === "OpeningCard" && (
        <OpeningCard
          image={LampImage}
          title={"Simple lamp"}
          smallDescription={"This is a simple lamp"}
          fullDescription={
            "Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery " +
            "Research conducted in the 1970s revealed that he’d designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium and varnished wood."
          }
        />
      )}

      {activeComponent === "TextLoadingStatus" && (
        <TextLoadingStatus
          textColor={"#fff000"}
          gradientColor={"#ff0000"}
          textAnimationDuration={1.6}
        />
      )}

      {activeComponent === "FlippingCard" && <FlippingCard />}
    </div>
  );
};
