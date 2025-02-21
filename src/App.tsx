import { useState } from "react";
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
        <ResizablePanel defaultSize={10}>
          <SideBar setActiveComponent={setActiveComponent} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={90}>
          <ComponentsList activeComponent={activeComponent} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default App;
