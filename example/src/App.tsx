import React from "react";
import { Card } from "@fuasmattn/mwui";

function App() {
  return (
    <div className="p-1">
      <Card
        title="Hello"
        body="this is dog."
        imageAlt="a dog"
        imageSrc="https://placedog.net/720/338?r"
        confirmLabel="Confirm"
        onConfirm={() => {}}
        cancelLabel="Cancel"
        onCancel={() => {}}
      />
    </div>
  );
}

export default App;
