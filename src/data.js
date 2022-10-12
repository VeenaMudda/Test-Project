import React from "react";
import { useNavigate } from "react-router-dom";
import "./data.css";

class Data extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> {items.chartName} </h1> <p>{items.time.updated}</p>
        <p>
          <span className="disclaimer">!!!</span>&nbsp;
          {items.disclaimer}&nbsp;<span className="disclaimer">!!!</span>
        </p>
        <h1>
          {items.bpi.USD.description}: {items.bpi.USD.rate}
          {items.bpi.USD.code}
        </h1>
        <h1>
          {items.bpi.GBP.description}: {items.bpi.GBP.rate}
          {items.bpi.GBP.code}
        </h1>
        <h1>
          {items.bpi.EUR.description}: {items.bpi.EUR.rate}
          {items.bpi.EUR.code}
        </h1>
      </div>
    );
  }
}

export default Data;
