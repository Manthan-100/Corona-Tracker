import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const url = "https://covid19.mathdro.id/api/daily";

class Chart extends Component {
  state = {
    dailyData: [],
  };
  async componentDidMount() {
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ dailyData: data });
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={{
            labels: this.state.dailyData.map(
              (dailyData) => dailyData.reportDate
            ),
            datasets: [
              {
                data: this.state.dailyData.map(
                  (dailyData) => dailyData.totalConfirmed
                ),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: this.state.dailyData.map((data) => data.deaths.total),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
              },
            ],
          }}
        />
      </div>
    );
  }
}

export default Chart;
