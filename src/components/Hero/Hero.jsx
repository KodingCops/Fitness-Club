import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* The best add */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "180px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween", duration: 2 }}
          ></motion.div>
          <span>The best fitness club in the town</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter start={100} end={140} preFix="+" delay="4" />
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span><NumberCounter start={800} end={978} preFix="+" delay="4" /></span>
            <span>Members Joined</span>
          </div>
          <div>
            <span><NumberCounter start={0} end={50} preFix="+" delay="2" /></span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-2rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* calories */}
        <div className="calories">
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
