import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Import images
import bg1 from "../../images/bg1.png";
// import NoWork from "./NoWork";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  var current = new Date();
  var a = current.getHours();
  var greeting = "";
  if (a < 12) {
    greeting = "Good morning";
  } else if (a < 18) {
    greeting = "Good Noon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
      <header id="topHeader">
        <ul id="topInfo">
          <li>+91 7773015690</li>
          <li>bishalsarkar.ml@gmail.com</li>
        </ul>
        <nav>
          <span className="logo">Qr-Attendence</span>
          <div className="mainMenu">
            <Link to="/">
              <span>Home</span>
            </Link>
            <Link to="/student">
              <span>Student Section</span>
            </Link>
            <Link to="/collage">
              <span>Admin or Teacher Section</span>
            </Link>
            <Link to="/signup-signin">
              {currentUser ? (
                <spam>
                  {currentUser.firstname} = {currentUser.role}
                </spam>
              ) : (
                <span>Signup & Signin</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
      <section id="intro">
        <div id="intro-info">
          <div>
            <h1>Attendence Managment</h1>
            <div id="intro-tag-btn">
              <h2>QR-Based Attendence Giving</h2>
              <Link to="/signup-signin">
                {currentUser ? (
                  <span className="brand-btn">
                    {greeting}, {currentUser.firstname}
                  </span>
                ) : (
                  <span className="brand-btn">Signup & Signin</span>
                )}
              </Link>
            </div>
          </div>
        </div>
        <div id="development-img">
          <img src={bg1} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;