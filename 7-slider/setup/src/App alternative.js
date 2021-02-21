import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

// function App() {

  const [count, setCount] = useState(0);
  const people = data;
  const person = people[count];

  const {id, image, name, title, quote} = person;

  const checkNumber = (number) => {
    if(number >= people.length){return 0}
    if(number < 0){return people.length -1}
    return number;
  }

  function arrowRight (){
    setCount(checkNumber(count+1))
    console.log(count)
  }

  function arrowLeft (){
    setCount(checkNumber(count-1))
    console.log(count);
  }


  return (
  <section className="section">
    <div className="title">
      <h2>
        <span>/</span>
        Reviews
      </h2>
    </div>

    <section className="section-center">
      
      <article>
      <img className="person-img" src={image} alt={name}/>
        <h4>{name}</h4>
        <div className="title">{title}</div>
        <div className="text">{quote}</div>
        <div className="icon"><FaQuoteRight /></div> 
      </article>
      


      <button className="prev" onClick={() => arrowLeft()}><FiChevronLeft /></button>
      <button className="next" onClick={() => arrowRight()}><FiChevronRight /></button>

    </section>
  </section>
    )
}

export default App;
