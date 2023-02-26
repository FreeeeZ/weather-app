import {RouterProvider} from "react-router-dom"
import React, { type ReactElement, type FC } from 'react'

import {router} from "@/router"

export const App: FC = (): ReactElement => {
  return (
    <div className="weather-app">
      <RouterProvider router={router} />
    </div>
  )
}
