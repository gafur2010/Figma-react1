import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import HeaderR from "./Header";
import Home from "./Home";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
import Hero4 from "./Hero4";

createRoot(document.getElementById("root")!).render(
  <div>
    <HeaderR />
    <Home />
    <Hero2 />
    <Hero3 />
    <Hero4 />
  </div>
);
