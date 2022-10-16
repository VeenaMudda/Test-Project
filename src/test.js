import "./test.css";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
function Test() {
  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required("Username is mandatory")
      .min(5, "Username must be greater than 5 characters"),
    password: Yup.string()
      .required("Password is mandatory")
      .min(8, "Passoword must be greater than 8 characters"),
    confirmPwd: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match")
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const navigate = useNavigate();
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 6));
    navigate("/data");
    return false;
  }

  return (
    <div className="container">
      <div className="card-container">
        <div className="carousel-container">
          <Carousel>
            <div className="item1">
              <h1 className="heading">WE CAN MINE YOUR CUSTOMER DATA</h1>
              <p className="description">
                Platform for Automated Decisions, Complex Signals, and Real Time
                changes to Campaigns. We bridge the gap between Customers and
                Clients and deliver superior performance
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
                Help with mobile ad setup, Heuristic rules to do complex mobile
                bidding relative to desktop bids.
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
        <div className="login-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_yWgBblJmCtzKKH-r84z4l3QJv5GhajsKsjdN_giYcw&s"
            alt="logo"
            className="logo"
          />
          <br />
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="username"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              {...register("username")}
              placeholder="Username"
            />
            <br />
            <div className="invalid-feedback">{errors.username?.message}</div>
            <br />
            <input
              type="password"
              name="password"
              {...register("password")}
              placeholder="Password"
              className={`form-control ${errors.password ? "is-valid" : ""}`}
            />
            <br />
            <div className="invalid-feedback">{errors.password?.message}</div>
            <br />
            <input
              type="password"
              name="confirmPwd"
              {...register("confirmPwd")}
              placeholder="Confirm Password"
              className={`form-control ${errors.confirmPwd ? "is-valid" : ""}`}
            />
            <br />
            <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
            <button className="button" onSubmit={handleSubmit(onSubmit)}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Test;
