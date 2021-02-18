import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info, d}) => {

  const [visible, setVisible] = useState(false)

  function toggleVisible(){
    if(visible){
      setVisible(false)
    } else {
      setVisible(true)
    }
  }

  return (
    <div className="question">

      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => toggleVisible()}>
          {
            visible
              ?<AiOutlineMinus />
              :<AiOutlinePlus />
          }
        </button>
      </header>

      <p>
        {visible
        ?info
        :info.substr(0, 0)
        }
      </p>

    </div>
    )
};

export default Question;
