import React from "react";
import "./Home.css";
import LandingPage from "../LandingPage/LandingPage";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <div className="home-page">
        <div className="Fitness">
          <p>Fitness</p>
          <img
            src="https://media.self.com/photos/6398b36c72eb56f726777d06/1:1/w_2400,h_2400,c_limit/weekly-workout-schedule.jpeg"
            alt="Fitness image"
          />
        </div>
        <div className="Food">
          <p>Food</p>
          <img
            src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
            alt="Food image"
          />
        </div>
        <div className="Rest">
          <p>Rest</p>
          <img
            src="https://santamaria.wa.edu.au/wp-content/uploads/2020/06/shutterstock_364469108-1024x683.jpeg"
            alt="Rest image"
          />
        </div>
        <div className="Planner">
          <p>Planner</p>
          <img
            src="https://s3-us-west-2.amazonaws.com/ec-cdn-content/ec-image-resources/449323026_mobile_cat2x.jpg"
            alt="Planner image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
