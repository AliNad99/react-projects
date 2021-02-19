import React, { useState } from 'react';
import data from './data.js';
import SingleQuestion from './Question';

function App() {

  const [questions, setQuestion] = useState(data);


  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section>
            {questions.map(question => 
               <SingleQuestion key={question.id} {...question}/>
            )}
        </section>
      </div>
    </main>
  )
}

export default App;
