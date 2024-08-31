import freeCodeCampLogo from "../images/freecodecamp-logo.png";
import '../App.css';

function Logo() {
    return (
        <div className="freecodecamp-logo-container">
            <img
                src={freeCodeCampLogo}
                className="freecodecamp-logo"
                alt="logo freecodecamp"
            />

        </div>
    )
}

export default Logo;
