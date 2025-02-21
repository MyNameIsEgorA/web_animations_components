import { useState } from "react";
import { TextLoadingStatus } from "./animations/TextLoadingStatus.tsx";
import { OpeningCard } from "./components/OpeningCard.tsx";
import LampImage from "./assets/images/floorLamp.png";
import { FlippingCard } from "./components/FlippingCard.tsx";
import { ResizeableNavbar } from "./components/ResizeableNavbar.tsx";
import { SideBar } from "./core/SideBar.tsx";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./components/ui/resizable.tsx";
import { ComponentsList } from "./core/ComponentsList.tsx";

function App() {
  const [activeComponent, setActiveComponent] = useState("OpeningCard");

  return (
    <div className="flex w-[100vw] h-[100vh] bg-gray-900">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <SideBar setActiveComponent={setActiveComponent} />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ComponentsList activeComponent={activeComponent} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
