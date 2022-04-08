import React, { useState } from 'react';

const Tour = ({data, removeTour}) => {
  const [readMore, setReadMore] = useState(false)
  const toggleReadmore = ()=>{
    setReadMore(prev=>!prev)
  }

  return(
    
    <figure  className="figure">


        <img src={data.image} alt="country view" className='figure-image'/>

        <figure className='figure-content'>
          <figcaption className='figure-caption'>
            <h3 className='figure-name'>{data.name}</h3>
            <h3 className='figure-price'>${data.price}</h3>
          </figcaption>

          <blockquote className='figure-text'>
            {
            readMore? data.info: data.info.slice(0, 200)
            } 

            {
              readMore? <span className='toggle-readmore' onClick={toggleReadmore}> Show Less</span>
              : <span className='toggle-readmore' onClick={toggleReadmore}> Read More</span>
            }
             
            
          </blockquote>
          <button className="figure-btn" onClick={()=>removeTour(data.id)}>Not Interested</button>
        </figure>
        
      </figure>
  );
};

export default Tour;
