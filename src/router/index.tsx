import React from 'react'
import {createBrowserRouter} from "react-router-dom"

import {HomePage} from "@/pages/home/HomePage"
import {NotFound} from "@/pages/not-found/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
