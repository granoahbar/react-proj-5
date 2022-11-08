// importing all dependencies
import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
// creating a component called app
function App() {
  // creating a variable called potentials and assigning it to the useSelector function and passing in the selectPotentials function from redux
  let potentials = useSelector(selectPotentials);
  // logging those results to the concsole
  console.log(potentials);
  // creating a variable called currentDisplay and assigning it to the useSelector and passing in selectDisplay
  let currentDisplay = useSelector(selectDisplay);
  // sending what is being Display to the console
  console.log("DISPLAY", currentDisplay);
  return (
    // header is put into app
    // putting the possible displays in that
    <div className="App font-link">
      <Header />
      {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
    </div>
  );
}

export default App;
