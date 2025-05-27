import React from "react";
import SubContent from "./SubContent";

export default function Content() {
  console.log(" > Content Rendered");
  return (
    <div>
      Content <SubContent />
    </div>
  );
}
