import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Laura + Simón = LauMon Talk ❤️‍🔥</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          POR CADA CLICK ES UN TE QUIERO, EN TOTAL LLEVAS 👉🏻 {count} TE QUIEROS
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
        </p>
      </div>
      <p className="read-the-docs">
        {/* Click on the Vite and React logos to learn more */}
      </p>
    </>
  )
}

export default App
