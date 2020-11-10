
import React, { Component } from 'react';
import Card from "./components/cards/Card"
import Chart from "./components/chart/Chart"
import CountryPicker from "./components/countrypicker/CountryPicker"
import CountryBar from "./Bar/Bar";
import Image from './images/image.png'


const url = "https://covid19.mathdro.id/api"
let country = "global"
class App extends Component {
  state = {
    loading : true,
    confirmed : "",
    recovered : "",
    deaths : ""

    }

  async componentDidMount() {
    if (country === "global") {
      let response = await fetch(url);
      let data = await response.json();
      this.setState({
        confirmed : data.confirmed.value,
        recovered : data.recovered.value,
        deaths : data.deaths.value,
        lastUpdate : new Date(data.lastUpdate).toDateString(),
        loading : false
      })
    }
    if (country !== "global") {
    let changeableUrl = `${url}/countries/${country}`
    let response = await fetch(changeableUrl);
    let data = await response.json();
    this.setState({
      confirmed : data.confirmed.value,
      recovered : data.recovered.value,
      deaths : data.deaths.value,
      lastUpdate : new Date(data.lastUpdate).toDateString()
    })
    }
  }   
  
   handleCountry = async (count) => {
    country = count;
    this.componentDidMount() 
  }
  

  render() {
    if (this.state.loading)
    return <div className = "loading"></div>
    return (

      <>
        <img className = "corona-image" src = {Image} alt = "COVID-19"/>
        <Card confirmed = {this.state.confirmed}
              recovered = {this.state.recovered}
              deaths = {this.state.deaths}
              lastUpdate = {this.state.lastUpdate}
              
        />
        <CountryPicker handleCountry = {this.handleCountry}/>
        {country === "global" ? <Chart country = {country} /> : <CountryBar country = {country}/>}
      </>
    )
  }
}

export default App;