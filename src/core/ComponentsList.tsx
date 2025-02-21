import { FC } from "react";
import { Components } from "./config.tsx";

interface ComponentsListProps {
  activeComponent: string;
}

export const ComponentsList: FC<ComponentsListProps> = ({
  activeComponent,
}) => {
  return (
    <div className="flex-1 h-full flex justify-center items-center">
      {Components.map((component) => {
        return activeComponent === component.title && component.component;
      })}
    </div>
  );
};
