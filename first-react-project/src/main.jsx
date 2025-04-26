import { createRoot } from "react-dom/client";
import MainContent from "./main_content";

createRoot(document.querySelector("#root")).render(
  <div>
    <MainContent />
  </div>
);
