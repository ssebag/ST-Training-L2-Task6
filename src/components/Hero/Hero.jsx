import './Hero.css'
import Button from './../Button/Button'
import HeroImg from './../../assets/img/hero/hero.png'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='heroSection1'>
          <Button buttonName={"Author of august"} buttonClass={"outlineButton"} />
          <h1>Eric-Emanuel Schmitt </h1>
          <p>Eric-Emmanuel Schmitt has been awarded more than 20 literary prizes and distinctions, and in 2001 he received the title of Chevalier des Arts et des Lettres. His books have been translated into over 40 languages.</p>
          <Button buttonName={"View his boooks"} buttonClass={"lineButton"} />
        </div>
        <div className='heroSection2'>
            <img src={HeroImg} />
        </div>   
    </div>
  )
}
