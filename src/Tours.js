import React from 'react';
import Tour from './Tour';
const Tours = ({data, removeTour}) => {
  
  return(
  <>
  
   {
     
     data.map((item)=>(
      <Tour data={item} removeTour={removeTour} key={item.id}/>
     ))
   }
  </>
  )
};

export default Tours;
