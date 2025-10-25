import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import BlogPage from "./pages/Blog";
import CollectionPage from "./pages/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/blog",
    Component: BlogPage,
  },
  {
    path: "/collection",
    Component: CollectionPage,
  },
]);

export default router;
