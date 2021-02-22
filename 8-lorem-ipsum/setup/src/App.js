import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);

    setText(data.substr(0, amount));


    
  }

  console.log(data.length)

 
  function checkLoremSize(){
    if(count > data.length){
        return (
          <div>
            <p>max. amount of letters: {data.length}</p>
            {text}
          </div>
        )
    } else {
      return (
        <div>
          {text}
        </div>
      )
    }
  } 
  
  return (
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form action="" onSubmit={handleSubmit} className="lorem-form">
      <label htmlFor="amount">Letters:</label>
      <input style={{width: "auto"}} type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)}/>
      <button type="submit" className="btn">generate</button>
    </form>
    <article className="lorem-text">
      {checkLoremSize()}
    </article>
  </section>
    )
}

export default App;
