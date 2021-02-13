import React from 'react';

const List = ({props}) => {

  return (
    <>
      <div className="person">
        <img src={props.image} alt="no image"/>
        <article>
          <h4>{props.name}</h4>
          <p>{props.age}</p>
        </article>
      </div>
      
    </>
  );
};

export default List;

