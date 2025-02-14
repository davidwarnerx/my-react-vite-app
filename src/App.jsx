import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/attabad.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://attabad.com" target="_blank">
          <img src={viteLogo} className="logo" alt="Attabad logo" />
        </a>
        <a href="https://attabad.com" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Weclome to Attabad + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        <p>
          Working on it 😣 Will be Live Soon❤️
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Attabad and React logos to Watch More
      </p>
    </>
  )
}

export default App
