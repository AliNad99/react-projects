import React, { useState } from 'react';
import people from './data';
import {FaAngleRight, FaAngleLeft, FaQuoteRight} from "react-icons/fa"

const Review = () => {


  const [count, setCount] = useState(0);
  const person = people[count];


  const checkNumber = (number) => {
    if(number >= people.length){return 0}
    if(number < 0){return people.length -1}
    return number;
  }

  function arrowRight (){
    setCount( (count) => {
      let newCount = count + 1;
      return checkNumber(newCount);
    })
    console.log(count);
  }

  function arrowLeft (){
    setCount( (count) => {
      let newCount = count - 1;
      return checkNumber(newCount);
    })
    console.log(count);
  }

  function randomPerson(count){
    let number = Math.floor(Math.random()*people.length)
    if(number === count){
      number = Math.floor(Math.random()*people.length);
    }
    setCount(number)
  }
 

  return (
        <article className="review">

          <div className="img-container">
            <img src={person.image} alt={person.name} className="person-img"/>
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
          </div>

          <h4 className="author">{person.name}</h4>
          <div className="job">{person.job}</div>
       
          <div className="info">{person.text}</div>

          <div className="button-container">
            <button onClick={() => arrowLeft()} className="prev-btn"><FaAngleLeft /></button>
            <button onClick={() => arrowRight()} className="next-btn"><FaAngleRight /></button>
          </div>

          <button onClick={() => randomPerson(count)} className="random-btn">Support Me</button>
        </article>
    )
};

export default Review;