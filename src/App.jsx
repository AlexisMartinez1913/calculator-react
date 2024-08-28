import freeCodeCampLogo from "./images/freecodecamp-logo.png";
import './App.css';
import Button from "./components/Button";

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
      <div className="calculator-container">
        <div className="row">
          <Button>1</Button>
          <Button>+</Button>
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        

      </div>
    </div>
  )
}

export default App;
