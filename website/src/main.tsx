import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.tsx";
import "@/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Blog from "@/sections/Blog.tsx";
import Collection from "./sections/Collection.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
