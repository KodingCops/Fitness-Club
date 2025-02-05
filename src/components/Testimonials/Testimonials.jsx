import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="Testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">what they </span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ exit: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {" "}
            {testimonialsData[selected].name}{" "}
          </span>
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ exit: 0, x: -100 }}
          transition={transition}
        />
        <div className="arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1);
            }}
          />
          {/* checks if the selected is last then display the 1st */}
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === tlength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
