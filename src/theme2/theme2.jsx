import './theme2.css'
import image from "../assets/img.webp";
import cute from '../assets/cute2.webp'

const Theme2 = ({inp,selectedImage,saraldate}) => {

    return (
        <>
            <div className="box theme2" id="box">
                <header>
                    <h2>Doz Playz</h2>
                    <div>
                        <span className="large"> Certificate - </span>
                        <span>Streak Winner</span>
                    </div>
                    <img className="cute" src={cute} alt="" />
                </header>
                <div className="content">
                    <div className="written">
                        <p>
                            This is to certify that <br /> <span className="large yellow back">{inp.naam}</span><br />
                            has demonstrated exceptional skill and dedication by achieving a
                            remarkable <span className="large yellow back">{inp.streak}</span> streaks on Doz Playz
                            Channel on <span className="large yellow back">{saraldate(inp.date)}</span>. This accomplishment is a testament to your proficiency
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
                        <span className="large blue">{saraldate(inp.date)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Theme2;