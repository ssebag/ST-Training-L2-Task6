import './MoreInfo.css'
import Button from './../Button/Button'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import{useParams} from 'react-router-dom'

export default function MoreInfo() {
 let {id}=useParams();
 const [number, setnumber] = useState(1)
 const increase=()=>{   
        setnumber(prev=>prev+1);
 }
 const minus=()=>{
    if(number > 1){
        setnumber(prev=>prev-1);
    }
 }
const [Data, setData] = useState([]);
useEffect(() => {
 axios.get(`https://example-data.draftbit.com/books/${id}`).then(res => setData(res.data))
}, []) 
  return (
    <div className='moreInfo'>
        <div className='infoImg'>
            <img src={Data?.image_url} />
        </div>
        <div className='infoDescription'>
         <div className='infoDescriptionRow1'>
            <div className='infoTitle'>
                <h1>{Data?.title}</h1>
                <span>{Data?.authors}</span>
            </div>
            <div className='infoAboutBook'>
                <p className='aboutBook'>About Book:</p>
                <p className='des'>{Data?.description}</p>
            </div>
            <div className='infoNumber'>
                <span className='min' onClick={minus}>-</span>
                <p className='num'>{number}</p>
                <span className='plus' onClick={increase}>+</span>
            </div>
            <div className='infoButtons'>
                <Button buttonClass={"lineButton"} buttonName={"Add to cart"}/>
                <Button buttonClass={"outlineButton"} buttonName={"Favorite"}/>
            </div>
         </div>
         <div className='infoDescriptionRow2'>
            <p><span>Pages Number :</span>    {Data?.num_pages} Pages</p>
            <p><span>Rating Count :</span>    {Data?.rating_count}</p>
            <p><span>Reviews:</span>    {Data?.review_count}</p>
         </div>            
        </div>
    </div>
  )
}
