import { useState } from "react";
import "./App.css";
import image from "./assets/img.jpeg";

function App() {
  const [count, setCount] = useState(0);
  const init = {
    naam: "",
    streak: "",
  };
  const url =
    "https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const [inp, setinp] = useState(init);
  const handle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinp({
      ...inp,
      [name]: value,
    });
  };
  const sub=()=>{
    console.log(inp);
  }
  
  return (
    <>
      <div className="box">
        <header>
          <h2>Doz Playz</h2>
          <div>
            <span className="large"> Certificate - </span>
            <span>Streak Winner</span>
          </div>
        </header>
        <div className="content">
          <div className="written">
            <p>
              This is to certify that <span className="large">SHOCK WAVE</span>{" "}
              has demonstrated exceptional skill and dedication by achieving a
              remarkable <span className="large">22</span>-streak on Doz Playz
              Channel. This accomplishment is a testament to your proficiency
              and commitment to excellence in the gaming arena.
            </p>
            <br />
            <p>
              Bestowing upon you this certificate, we extend our congratulations
              and sincere wishes for continued success in your gaming journey.
              May this achievement serve as a stepping stone to even greater
              accomplishments in your gaming future.
            </p>
          </div>
          <div className="image">
            <img src={image} alt="" />
            <h2>SHOCK WAVE</h2>
            <div>
              {" "}
              <span className="large">22</span> Matches Streak
            </div>
          </div>
        </div>
      </div>
      <div className="btn">
        <button> New</button>
        <button>Download</button>
      </div>
      <div className="modal">
        <div>
          <h2>Name</h2>
          <input name="naam" value={inp.naam} onChange={handle} type="text" />
        </div>
        <div>
          <h2>streaks</h2>
          <input name="streak" value={inp.streak} onChange={handle}  type="tel" />
        </div>
        <div>
          <h2>Photo</h2>
          <input type="file" />
        </div>
        <button onClick={sub} >SUBMIT</button>
      </div>
    </>
  );
}

export default App;
