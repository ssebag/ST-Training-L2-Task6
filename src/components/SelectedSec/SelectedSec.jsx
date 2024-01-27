import './SelectedSec.css'
import Card from './../SelectedCard/SelectedCard'
import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function SelectedSec() {  
  const [Data, setData] = useState([]);
   useEffect(() => {
  /*   fetch('https://example-data.draftbit.com/books?_limit=8')
    .then(response => response.json())
    .then(json => setData(json)) */
    axios.get("https://example-data.draftbit.com/books?_limit=8").then(res => setData(res.data))
  }, []) 
  
  return (
    <div className='selectedSec'>
        <h1>Selected for you</h1>
        <div className='selectedSecCards'>
           {
            Data?.map((ele,index)=>{
              return(
                  <Card key={index} details={ele} />
                )
            })
           }
        </div>
    </div>
  )
}
