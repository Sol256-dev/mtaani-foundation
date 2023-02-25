import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import News from "./routes/News";
import About from "./routes/About";
import GetInvolved from "./routes/GetInvolved";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />
      <Route path="/get-involved" element={<GetInvolved />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
