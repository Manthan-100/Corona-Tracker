import React, { Component } from "react";
import CountUp from "react-countup";

class Card extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="infected">
            <div className="content">
              <h2>Infected</h2>
              <h3>
                <CountUp
                  start={0}
                  end={this.props.confirmed}
                  duration={2.4}
                  separator=","
                ></CountUp>
              </h3>
              <h3>{this.props.lastUpdate}</h3>
              <h4>Number of Active cases of covid-19</h4>
            </div>
          </div>
          <div className="recovered">
            <div className="content">
              <h2>Recovered</h2>
              <h3>
                <CountUp
                  start={0}
                  end={this.props.recovered}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </h3>
              <h3>{this.props.lastUpdate}</h3>
              <h4>Number of Recovered cases of covid-19</h4>
            </div>
          </div>
          <div className="death">
            <div className="content">
              <h2>Deaths</h2>
              <h3>
                <CountUp
                  start={0}
                  end={this.props.deaths}
                  duration={2.5}
                  separator=","
                ></CountUp>
              </h3>
              <h3>{this.props.lastUpdate}</h3>
              <h4>Number of Death cases of covid-19</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
