import React from "react";
import { EXAMPLES } from "../data";
import Examples from "./Examples";
import TabButton from "./TabButton";

function ExampleSection({ activeTab, setActiveTab }) {
  return (
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
  );
}

export default ExampleSection;
