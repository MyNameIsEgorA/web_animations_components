import { TextLoadingStatus } from "./animations/TextLoadingStatus.tsx";
import { OpeningCard } from "./components/OpeningCard.tsx";
import LampImage from "./assets/images/floorLamp.png";

function App() {
  return (
    <div className="text-xl mt-10 flex w-[100vw] h-[100vh] bg-gray-900 justify-center items-center">
      {/*<TextLoadingStatus*/}
      {/*  textColor={"#fff000"}*/}
      {/*  gradientColor={"#ff0000"}*/}
      {/*  textAnimationDuration={1.6}*/}
      {/*/>*/}
      <OpeningCard
        image={LampImage}
        title={"Simple lamp"}
        smallDescription={"This is a simple lamp"}
        fullDescription={
          "Little is known about the life of Édouard-Wilfrid Buquet. He was born in France in 1866, but the time and place of his death is unfortunately a mystery " +
          "Research conducted in the 1970s revealed that he’d designed the “EB 27” double-arm desk lamp in 1925, handcrafting it from nickel-plated brass, aluminium and varnished wood."
        }
      />
    </div>
  );
}

export default App;
