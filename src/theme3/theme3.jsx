import './theme3.css'
import image from "../assets/img.webp";
import logo from "../assets/logo.jpeg";

const Theme3 = ({inp,selectedImage,saraldate}) => {

    return (
        <>
            <div className="box theme3" id="box">
                <div className="image">
                    {selectedImage ? (
                        <img src={URL.createObjectURL(selectedImage)} alt={inp.naam} />
                    ) : (
                        <img src={image} alt={inp.naam} />
                    )}
                </div>
        
                    <h2  className='naam'>{inp.naam}</h2>
            
                <div>
                <p>
Congratulations to <b>SangaTDM</b> for emerging victorious in the TDM SEASON 1 tournament (ANDROID) result declared on 12/02/2024! Your remarkable performance, strategic prowess, and unwavering determination have led you to this impressive achievement. Here's to more triumphs in the future!</p>
                    {/* <p>
                        Bestowing upon you this certificate, we extend our congratulations
                        and sincere wishes for continued success in your gaming journey.
                        May this achievement serve as a stepping stone to even greater
                        accomplishments in your gaming future.
                    </p> */}
                </div>
               <b><span className='datee'>{saraldate(inp.date)}</span></b> 
                    <span className='sign'>𝒟𝑜𝓏 𝓅𝓁𝒶𝓎𝓏</span>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

            </div>
        </>
    )
}
export default Theme3;