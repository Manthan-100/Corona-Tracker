import { FormControl, NativeSelect } from "@material-ui/core";
import React, { Component } from "react";

const url = "https://covid19.mathdro.id/api/countries";

class CountryPicker extends Component {
  state = {
    countries: [],
    laoding: true,
  };

  async componentDidMount() {
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ countries: data.countries });
  }

  render() {
    if (this.state.loading) return <div>Loading....</div>;
    return (
      <>
        <div className="country-picker">
          <FormControl className="picker">
            <NativeSelect
              onChange={(e) => this.props.handleCountry(e.target.value)}
            >
              <option value="global">Global</option>
              {this.state.countries.map((country, i) => (
                <option key={i} value={country.name}>
                  {country.name}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>
      </>
    );
  }
}

export default CountryPicker;
