import React from 'react';

function SimpsonsQuotes({ employee }) {
  return (
    employee && (
      <figure className='SimpsonsQuotes'>        
        <blockquote> {employee.quote}</blockquote>
         <div> {employee.character}</div>           
         <img src={employee.image} alt={employee.image}/> 
         <cite>{employee.characterDirection}</cite>
      </figure>
    )
  );
}

export default SimpsonsQuotes;