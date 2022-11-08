// importing the needed dependencies into the project
import { configureStore } from "@reduxjs/toolkit";
import potentialCountriesReducer from "../redux/slices/potentialCountriesSlice";
import displayedCountryReducer from "../redux/slices/displayCountrySlice";
// exporting the global state I think?
export default configureStore({
  reducer: {
    potentialCountries: potentialCountriesReducer,
    displayedCountry: displayedCountryReducer,
  },
});
