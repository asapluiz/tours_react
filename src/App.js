import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios';

function App() {
  const [data, setData] = useState(null)
  // const [toggle, setToggle] = useState({value:true})

  useEffect(() => {
    axios.get('https://course-api.com/react-tours-project')
      .then((response) => {
        setData(response.data)
        
      })
  }, [])

  const removeTour = (event)=>{
      setData((prev)=>(
      prev.filter(e=>{
        return e.id !== event
      })
      ))
  }

  const refresh = ()=>{
    axios.get('https://course-api.com/react-tours-project')
    .then((response) => {
      setData(response.data)
      
    })
  }


  return (
    
      <>
      {
        data == null ? 
        <Loading/> :
        data.length !== 0?
        <div className='container'>
          <h1 className='heading-text'>Our Tours</h1>
          <Tours data={data} removeTour={removeTour}/>         
        </div>
        :
        <div className='container'>
          <h1 className='heading-empty'>No Tours Left</h1>
          <button className='refresh-btn' onClick={refresh}>Refresh</button>

        </div>
        }
      </>
    
       

  )
}

export default App
