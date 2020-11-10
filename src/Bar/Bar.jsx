import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

let url = "https://covid19.mathdro.id/api/countries/";
let country = "";

class CountryBar extends Component {
  state = {
    confirmed: "",
    recovered: "",
    deaths: "",
  };

  async componentDidMount() {
    let response = await fetch(`${url}${this.props.country}`);
    let data = await response.json();
    this.setState({
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
    });
    country = this.props.country;
  }

  check = () => {
    if (this.props.country !== country) {
      this.componentDidMount();
    }
  };

  render() {
    this.check();
    return (
      <>
        <div className="bar">
          <Bar
            data={{
              labels: ["Infected", "Recovered", "Deaths"],
              datasets: [
                {
                  label: "People",
                  backgroundColor: [
                    "rgba(0, 0, 255, 0.5)",
                    "rgba(0, 255, 0, 0.5)",
                    "rgba(255, 0, 0, 0.5)",
                  ],
                  data: [
                    this.state.confirmed,
                    this.state.recovered,
                    this.state.deaths,
                  ],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country}` },
            }}
          />
        </div>
      </>
    );
  }
}

export default CountryBar;
