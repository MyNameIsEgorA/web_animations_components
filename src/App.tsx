import { useState } from "react";
import { TextLoadingStatus } from "./animations/TextLoadingStatus.tsx";
import { OpeningCard } from "./components/OpeningCard.tsx";
import LampImage from "./assets/images/floorLamp.png";

function App() {
  const [activeComponent, setActiveComponent] = useState("OpeningCard");

  return (
    <div className="flex w-[100vw] h-[100vh] bg-gray-900">
      {/* Сайдбар */}
      <div className="w-64 bg-gray-800 p-4 flex flex-col gap-y-4">
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
      </div>

      <div className="flex-1 flex justify-center items-center">
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
      </div>
    </div>
  );
}

export default App;
