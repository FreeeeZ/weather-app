import React, { useState, type ReactElement, type FC } from 'react'

import reactLogo from '@/assets/images/react.svg'
import typeScriptLogo from '@/assets/images/typescript.svg'

import './App.scss'

export const App: FC = (): ReactElement => {
  const [count, setCount] = useState(0)

  const incrementCount = (): void => {
    setCount((count) => count + 1)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer">
          <img src={typeScriptLogo} className="logo typescript" alt="TypeScript logo" />
        </a>
      </div>
      <h1 className="title">
        Vite + React + TypeScript
      </h1>
      <div className="card">
        <button onClick={incrementCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite or React or TypeScript logos to learn more
      </p>
    </div>
  )
}
