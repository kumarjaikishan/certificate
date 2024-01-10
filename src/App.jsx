import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const init = {
    name: "jai kishan",
    streaks: "15"
  }
  const url = "https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const [inp, setinp] = useState(init)
  return (
    <>
      <div className="box">
        <header>
          <h2>Doz Playz</h2>
          <div>
            <bold>Certificate - </bold><span>Streak Winner</span>
          </div>
        </header>
        <div className="content">
          <div className="written">
            <p>
              This is to certify that Jai Kishan has demonstrated exceptional skill and dedication by achieving a remarkable 15-streak on Doz Playz Channel.
              This accomplishment is a testament to your proficiency and commitment to excellence in the gaming arena.
            </p>
   <br />
            <p>
              Bestowing upon you this certificate, we extend our congratulations and sincere wishes for continued success in your gaming journey.
              May this achievement serve as a stepping stone to even greater accomplishments in your gaming future.
            </p>

          </div>
          <div className="image">
            <img src={url} alt="" />
            <h2>Hitesh Choudhary</h2>
            <div>53 Streaks</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
