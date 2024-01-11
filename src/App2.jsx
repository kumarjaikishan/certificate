import { useEffect, useState } from "react";
import "./App copy.css";
import image from "./assets/img.png";
import html2canvas from "html2canvas";


function App() {
  const [modal, setmodal] = useState(false);
  const [passmodal, setpassmodal] = useState(true);
  const [pass, setpass] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const init = {
    naam: "Jai kishan kumar",
    streak: "09",
    date: "11 nov,2023"
  };
  const [inp, setinp] = useState(init);
  useEffect(() => {
    const cdd = formatDate();
   
  }, [])
  const url =
    "https://images.unsplash.com/photo-1700909591006-a78674596074?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
  function formatDate() {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const formattedDate = `${day} ${month}, ${year}`;
    return formattedDate;
  }
  const hadlepass = (e) => {
    setpass(e.target.value)
  }
  const checkpass = () => {
    if(pass == "rukhi" || pass == "Rukhi" || pass == "RUKHI"){
      setpassmodal(false)
    }else{
      alert("Wrong Password");
    }
  }
  const imagedownload = () => {
    const timenow = new Date();
    const rand =timenow.getHours() + "."+ timenow.getMinutes()
    // console.log(rand);
    const boxElement = document.querySelector('#box');
    html2canvas(boxElement)
      .then((canvas) => {
        const dataUrl = canvas.toDataURL(); // Get the data URL of the canvas
        const anchor = document.createElement('a');
        anchor.href = dataUrl;
        anchor.download = `certificate ${rand}.png`; // Change the filename as needed
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
      })
      .catch((error) => {
        console.error('Error generating image:', error);
      });
  }

  return (
    <>
      <div className="box" id="box">
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
              This is to certify that <br /> <span className="large yellow back">{inp.naam}</span><br />
              has demonstrated exceptional skill and dedication by achieving a
              remarkable <span className="large yellow back">{inp.streak}</span> streaks on Doz Playz
              Channel on <span className="large yellow back">{inp.date}</span>. This accomplishment is a testament to your proficiency
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
            {selectedImage ? (
              <img src={URL.createObjectURL(selectedImage)} alt={inp.naam} />
            ) : (
              <img src={image} alt={inp.naam} />
            )}
            <h2>{inp.naam}</h2>
            <div>
              <span className="large yellow">{inp.streak}</span> Matches Streak
            </div>
            <span className="large blue">{inp.date}</span>
          </div>
        </div>
      </div>
      <div className="btn">
        <button onClick={() => setmodal(true)}> New</button>
        <button onClick={imagedownload}>Download</button>
      </div>
      {modal ? <div className="modal">
        <div>
          <h2>Name</h2>
          <input name="naam" value={inp.naam} onChange={handle} type="text" />
        </div>
        <div>
          <h2>streaks</h2>
          <input name="streak" value={inp.streak} onChange={handle} type="tel" />
        </div>
        <div>
          <h2>Photo</h2>
          <input type="file" accept="image/*" />
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
