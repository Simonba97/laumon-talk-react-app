import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Laura + Simón = LauMon Talk ❤️‍🔥</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          POR CADA CLICK ES UN TE QUIERO, EN TOTAL LLEVAS 👉🏻 {count} TE QUIEROS
        </button>
        <p>
          {/* Edit <code>src/App.tsx</code> and save to test HMR */}
        </p>
      </div>
    </>
  )
}

export default App
