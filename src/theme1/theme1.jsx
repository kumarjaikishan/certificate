import './theme1.css'
import image from "../assets/img.webp";
import logo from "../assets/logo.jpeg";

const Theme1 = ({inp,selectedImage,saraldate}) => {

    return (
        <>
            <div className="box theme1" id="box">
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
                    <span>𝒟𝑜𝓏 𝓅𝓁𝒶𝓎𝓏</span>
                </div>

            </div>
        </>
    )
}
export default Theme1;