import { Dispatch, FC, SetStateAction, useState } from "react";
import { Reorder } from "motion/react";
import { Components } from "./config.tsx";
import { Button } from "../components/ui/button.tsx";

interface SideBarProps {
  setActiveComponent: Dispatch<SetStateAction<string>>;
}

export const SideBar: FC<SideBarProps> = ({ setActiveComponent }) => {
  const titles: string[] = Components.map((component) => component.title);
  const [components, setComponents] = useState<string[]>(titles);

  return (
    <div className="bg-white p-4 flex items-center flex-col gap-y-4 h-full w-full">
      <Reorder.Group
        onReorder={setComponents}
        values={components}
        axis="y"
        className="w-full flex flex-col items-center gap-4"
      >
        {components.map((component) => (
          <Reorder.Item
            key={component}
            value={component}
            className="w-full flex justify-center"
          >
            <Button
              className="w-full max-w-[300px]"
              onClick={() => setActiveComponent(component)}
            >
              {component}
            </Button>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};
