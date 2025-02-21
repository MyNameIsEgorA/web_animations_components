import { Dispatch, FC, SetStateAction } from "react";

interface SideBarProps {
  setActiveComponent: Dispatch<SetStateAction<string>>;
}

export const SideBar: FC<SideBarProps> = ({ setActiveComponent }) => {
  return (
    <div className="bg-gray-800 p-4 flex flex-col gap-y-4 h-full w-full">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={() => setActiveComponent("OpeningCard")}
      >
        Opening Card
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        onClick={() => setActiveComponent("TextLoadingStatus")}
      >
        Text Loading Status
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-green-600 transition-colors"
        onClick={() => setActiveComponent("FlippingCard")}
      >
        Flipping Card
      </button>
    </div>
  );
};
