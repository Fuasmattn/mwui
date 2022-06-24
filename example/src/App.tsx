import React from "react";
import { Card } from "@fuasmattn/mwui";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 360px)",
        gridGap: "32px",
      }}
    >
      <Card
        title="Hello"
        body="this is dog."
        imageAlt="a dog"
        imageSrc="https://placedog.net/720/338?r"
        confirmLabel="Confirm"
        onConfirm={() => {}}
      />
    </div>
  );
}

export default App;
