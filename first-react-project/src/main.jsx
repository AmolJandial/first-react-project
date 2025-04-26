import { createRoot } from "react-dom/client";
import Page from "./list_component";

const root = createRoot(document.querySelector("#root"));

root.render(<Page />);
