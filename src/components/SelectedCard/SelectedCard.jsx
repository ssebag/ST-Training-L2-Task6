import './SelectedCard.css'
import Book from './../../assets/img/icons/book.png'
import Star from './../../assets/img/icons/star.png'
import {Link} from "react-router-dom"

export default function Card({details}) { 
  return (
    <div className='selectedCard'>
        <div className='selectedCardImg'>
            <img src={details?.image_url} />
        </div>
        <div className='selectedCardSection2'>
            <div className='selectedCardAuthor'><p>{details?.authors}</p></div>
            <div className='selectedCardIcons'>
               <div className='pages'>
                    <img src={Book} />
                    <p>{details?.num_pages}</p>
               </div>
               <div className='stars'>
                    <img src={Star} />
                    <p>{details?.rating}</p>
               </div>
            </div>
            <div className='selectedCardDetails'>
              <Link to={`/${details?.id}`}>Show Details</Link>
            </div>
        </div>
    </div>
  )
}
