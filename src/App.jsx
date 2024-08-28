import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import './App.css';

function App() {


  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="logo"
        />

      </div>
    </div>
  )
}

export default App
