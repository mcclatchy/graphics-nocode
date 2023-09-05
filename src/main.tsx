import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root from "./routes/root.jsx";
import Enhance from "./routes/enhance.jsx";

const router = createHashRouter([
  {
    path: "/*",
    element: <Root />,
  },
  {
    path: "/enhance",
    element: <Enhance />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
