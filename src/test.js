import { Component } from "react";
import "./test.css";
import Login from "./Login";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
class Test extends Component {
  state = {
    username: "",
    pwd: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="carousel-container">
            <Carousel>
              <div className="item1">
                <h1 className="heading">WE CAN MINE YOUR CUSTOMER DATA</h1>
                <p className="description">
                  Platform for Automated Decisions, Complex Signals, and Real
                  Time changes to Campaigns. We bridge the gap between Customers
                  and Clients and deliver superior performance
                </p>
              </div>
              <div className="item2">
                <h1 className="heading">INTELLIGENT DECISION MAKING</h1>
                <p className="description">
                  Data Driven Account Structure setup, Keyword Value prediction
                  using Statistical/Algorithmic approaches
                </p>
              </div>
              <div className="item3">
                <h1 className="heading">MOBILE MARKETING</h1>
                <p className="description">
                  Help with mobile ad setup, Heuristic rules to do complex
                  mobile bidding relative to desktop bids.
                </p>
              </div>
              <div className="item4">
                <h1 className="black">
                  WE CAN BE AN EXTENDED MEMBER OF YOUR TEAM. WANT TO KNOW MORE?
                </h1>
                <p className="black">
                  Free audit to help you understand what we can do to
                  streamline/improve performance
                </p>
              </div>
            </Carousel>
          </div>
          <Login />
        </div>
      </div>
    );
  }
}

export default Test;
