import React, { useState, useEffect, Fragment } from "react";
import SearchLayout from "../../component/SearchLayout/SearchLayout"
import { makeStyles } from "@material-ui/core/styles";
import { getCountries, getState, getCity } from "../../common/services/api"
import { searchValues } from "../../common/utils/fun-utils"
// styles
export const styles = () => ({
  title: {
  margin: "auto",
  },
  container: {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    "@media (max-width: 767px)": {
     flexDirection:"column"
   },
  },
});
const useStyles = makeStyles(styles);
const WorldSearch = () => {
  const classes = useStyles();
  const [countries, setCountries]=useState([]);
  const [selectedCountry, setSelectedCountry]=useState("");
  const [states, setStates]=useState([]);
  const [selectedState, setSelectedState]=useState("");
  const [cities, setCities]=useState([]);
  const [countryLoading, setCountryLoading]=useState(false);
  const [stateLoading, setStateLoading]=useState(false);
  const [cityLoading, setCityLoading]=useState(false);
  const [searchCountry,setSearchCountry]=useState("")
  const [searchState,setSearchState]=useState("")
  const [searchCity,setSearchCity]=useState("")

// Get all countries first
  useEffect(() => {
   setCountryLoading(true)
   getCountries().then(res => {
     let searchCountries=searchValues(searchCountry, res)
     setCountries(searchCountries);
     setCountryLoading(false)
   });
 }, [searchCountry]);
 // Get state if country is being selecte
 useEffect(() => {
  if(selectedCountry){
    setStateLoading(true)
    getState().then(res => {
       let filteredStates = res.filter(item =>item.country_id===selectedCountry);
       let searchStates=searchValues(searchState, filteredStates)
       setStates(searchStates || filteredStates);
       setStateLoading(false)
      });
 }
}, [selectedCountry,searchState]);
// Get City if state has been selected
useEffect(() => {
  if(selectedState){
     setCityLoading(true)
     getCity().then(res => {
      let filteredCities = res.filter(item =>item.state_id===selectedState);
      let searchCities=searchValues(searchCity, filteredCities)
      setCities(searchCities || filteredCities);
      setCityLoading(false)
     });
  }
}, [selectedState,searchCity]);
  return(
      <Fragment>
        <div className={classes.container}>
          <SearchLayout
            subtitle="Countries"
            placeholder="Search Cointries..."
            id="countries" data={countries}
            displayText="fetching countries ..."
            arrowBtn={true}
            setSelected={setSelectedCountry}
            loading={countryLoading}
            setSearchData={setSearchCountry}
          />
          <SearchLayout
            subtitle="States"
            placeholder="Search State..."
            id="state" data={states}
            displayText="Select a country"
            arrowBtn={true}
            setSelected={setSelectedState}
            loading={stateLoading}
            setSearchData={setSearchState}
          />
          <SearchLayout
            subtitle="Cities"
            placeholder="Search City..."
            id="city" data={cities}
            displayText="Select a state"
            arrowBtn={false}
            loading={cityLoading}
            setSearchData={setSearchCity}
          />
        </div>
      </Fragment>
);
}

export default WorldSearch;
