import { TextLoadingStatus } from "./animations/TextLoadingStatus.tsx";

function App() {
  return (
    <div className="text-xl mt-10 flex w-[100vw] h-[100vh] bg-gray-900 justify-center items-center">
      <TextLoadingStatus
        textColor={"#fff000"}
        gradientColor={"#ff0000"}
        textAnimationDuration={1.6}
      />
    </div>
  );
}

export default App;
