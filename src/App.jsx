import { useEffect, useState } from "react";
import "./App.css";
import image from "./assets/img.webp";
import logo from "./assets/logo.jpeg";
import html2canvas from "html2canvas";

function App() {
  const [modal, setmodal] = useState(false);
  const [quality, setquality] = useState(2);
  const [passmodal, setpassmodal] = useState(false);
  const [pass, setpass] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const currentDate = new Date();
  const init = {
    naam: "DOZ乛SPARROW",
    streak: "09",
    date: `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getUTCDate().toString().padStart(2, '0')}`,
  };
  const [inp, setinp] = useState(init);
  useEffect(() => {
    // const cdd = formatDate();
  }, [])
  const url = "https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const handle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setinp({
      ...inp,
      [name]: value,
    });
  };
  const sub = (e) => {
    // Handle the image file input
    const photoInput = document.querySelector('input[type="file"]');
    const imageFile = photoInput.files[0];

    // Update the state with the selected image file
    setSelectedImage(imageFile);
    setmodal(false);
  }
  const hadlepass = (e) => {
    setpass(e.target.value)
  }
  const checkpass = () => {
    if (pass == "rukhi" || pass == "Rukhi" || pass == "RUKHI") {
      setpassmodal(false)
    } else {
      alert("Wrong Password");
    }
  }
  const imagedownload = () => {
    const timenow = new Date();
    const rand = timenow.getMinutes()
    console.log(quality);
    const boxElement = document.querySelector('#wrapper');
    html2canvas(boxElement, { scale: quality })
      .then((canvas) => {
        const dataUrl = canvas.toDataURL(); // Get the data URL of the canvas
        const anchor = document.createElement('a');
        anchor.href = dataUrl;
        anchor.download = `${inp.naam} certificate @${rand}.png`; // Change the filename as needed
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  }
  const saraldate = (input) => {
    const expenseDate = new Date(input);
    const formattedDate = `${expenseDate.getUTCDate().toString().padStart(2, '0')} ${expenseDate.toLocaleString('default', { month: 'short' })
      }, ${expenseDate.getFullYear().toString().substr(-2)}`;
    return formattedDate;
  }

  return (
    <>
      <div className="wrapper" id="wrapper">
        <div className="box theme2" id="box">
            <div className="image">
            {selectedImage ? (
                <img src={URL.createObjectURL(selectedImage)} alt={inp.naam} />
              ) : (
                <img src={image} alt={inp.naam} />
              )}
            </div>
            <div>
              <h2>{inp.naam}</h2>
              <h2>{inp.streak} Streaks</h2>
            </div>
            <div>
              <p> This is to certify that  <b>{inp.naam} </b>
                has demonstrated exceptional skill and dedication by achieving a
                remarkable <b>{inp.streak}</b> streaks on <b> Doz Playz </b>
                Channel on <b>{saraldate(inp.date)}</b>. This accomplishment is a testament to your proficiency
                and commitment to excellence in the gaming arena.</p>
               <p>
               Bestowing upon you this certificate, we extend our congratulations
                and sincere wishes for continued success in your gaming journey.
                May this achievement serve as a stepping stone to even greater
                accomplishments in your gaming future.
                </p>
            </div>
            <div className="logo">
              <img src={logo} alt="" />
              <h2>Doz Playz</h2>
            </div>
          
        </div>
      </div>
      <div className="btn">
        <button onClick={() => setmodal(true)}> New</button>
        <select name="" id="" value={quality} onChange={(e) => setquality(e.target.value)}>
          <option disabled>--Quality--</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
        <button onClick={imagedownload}>Download</button>
      </div>
      {modal ? <div className="modal">
        <div>
          <h2>Name :</h2>
          <input name="naam" value={inp.naam} onChange={handle} type="text" />
        </div>
        <div>
          <h2>streaks :</h2>
          <input name="streak" value={inp.streak} onChange={handle} type="tel" />
        </div>
        <div>
          <h2>Date :</h2>
          <input name="date" value={inp.date} onChange={handle} type="date" />
        </div>
        <div>
          <label htmlFor="photo">Upload Photo</label>
          <input style={{ display: "none" }} id="photo" type="file" accept="image/*" />
        </div>
        <button onClick={sub} >SUBMIT</button>
        <button onClick={() => setmodal(false)} >Cancel</button>
      </div> : null}

      {passmodal && <div className="pass">
        <h2>Password</h2>
        <div><input value={pass} onChange={hadlepass} type="text" /></div>
        <button onClick={checkpass}>Enter</button>
      </div>}
    </>
  );
}

export default App;
