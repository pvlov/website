import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { HashRouter, Route, Routes } from "react-router";
import Landing from "./pages/Landing.tsx";
import Blog from "@/pages/Blog.tsx";
import Collection from "@/pages/Collection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
