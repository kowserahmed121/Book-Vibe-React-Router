import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./assets/Components/Root";
import Home from "./assets/Components/Home";
import BookDetails from "./assets/Components/BookDetails";
import ListBook from "./assets/Components/ListBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:booksId",
        element: <BookDetails></BookDetails>,
        loader: ()=> fetch("books.json")
      },
      {
        path: "/listbook",
        element: <ListBook></ListBook>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
