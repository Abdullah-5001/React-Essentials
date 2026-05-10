import { act, useState } from "react";
import CoreConcepts from "./components/CoreConcepts";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";
import Examples from "./components/Examples";
import { EXAMPLES } from "./data";
function App() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => {
              return (
                <CoreConcepts
                  key={concept.title}
                  title={concept.title}
                  description={concept.description}
                  image={concept.image}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={() => setActiveTab("components")}
              className={activeTab === "components" ? "active" : ""}
            >
              Components
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("props")}
              className={activeTab === "props" ? "active" : ""}
            >
              Props
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("jsx")}
              className={activeTab === "jsx" ? "active" : ""}
            >
              JSX
            </TabButton>
            <TabButton
              onClick={() => setActiveTab("state")}
              className={activeTab === "state" ? "active" : ""}
            >
              State
            </TabButton>
          </menu>
          <div id="tab-content">
            {!activeTab && <p>please select a tab</p>}
            {EXAMPLES[activeTab] && <Examples {...EXAMPLES[activeTab]} />}
          </div>
        </section>
      </main>
      {for ( const number of [1,2,3])
       return <p>{number}</p>
      }
    </div>
  );
}

export default App;
