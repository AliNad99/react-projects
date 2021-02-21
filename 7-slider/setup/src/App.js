import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);

  // const checkCount = (number)=> {
  //   if(number < 0){return people.length -1}
  //   if(number > people.length -1){return number = 0}
  //   return number;
  // }

  // const arrowLeft = () => {
  //   setCount( count => checkCount(count-1))
  // }

  // const arrowRight = () => {
  //   setCount( count => checkCount(count+1))
  // }



  useEffect(() => {
    const lastIndex = people.length -1;
    if(count < 0)           { setCount(lastIndex)}
    if(count > lastIndex)   { setCount(0)}
  }, [count, people]);

  useEffect(() => {
   let slider = setInterval(() => {setCount(count+1)}, 2000)
   return () => clearInterval(slider)
  }, [count])

  const checkActive = (number) => {
    if(number === count){ return "activeSlide"}
    if(count === 0 & number === people.length -1){ return "lastSlide"}
    if(number === count-1 & number >= 0){ return "lastSlide"}
    else{ return "nextSlide"}
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
      
      {people.map ( (person, personIndex) => {
        const {id, image, name, title, quote} = person;

        return (
          <article key={id} className={checkActive(personIndex)} >
            <img className="person-img" src={image} alt={name}/>
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <div className="text">{quote}</div>
            <div className="icon"><FaQuoteRight /></div> 
          </article>
      
        )
      })}

      <button className="prev" onClick={() => setCount(count-1)}><FiChevronLeft /></button>
      <button className="next" onClick={() => setCount(count+1)}><FiChevronRight /></button>

    </section>
  </section>
    )
}

export default App;
