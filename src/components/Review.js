import React, { useState } from "react";
// import data as person
import person from "./data";
// React Icon
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // ************* state values *******************
  const [index, setIndex] = useState(0);
  const { name, job, image, info } = person[index];

  // ************* functionality *******************
  // Check index number
  const checkIndexNumber = (num) => {
    if (num > person.length - 1) {
      return 0;
    }
    if (num < 0) {
      return person.length - 1;
    }
    return num;
  };
  //  Next Person:

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexNumber(newIndex);
    });
  };

  //  Batter Way But not work
  /* const nextPerson = () => {setIndex((prevIndex) => prevIndex + 1); };*/

  //  Prev Person:
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndexNumber(newIndex);
    });
  };

  // Random person
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * person.length);
    // for not repeat same number
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndexNumber(randomNumber));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="name" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name} </h4>
      <p className="job">{job} </p>
      <p className="info">{info} </p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson} >random person</button>
    </article>
  );
};

export default Review;
