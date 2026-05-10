import { act, useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import Examples from "./components/Examples";
import { EXAMPLES } from "./data";
import CoreConceptSection from "./components/CoreConceptSection";
import ExampleSection from "./components/ExampleSection";
function App() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div>
      <Header />
      <main>
        <CoreConceptSection />
        <ExampleSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
    </div>
  );
}

export default App;
