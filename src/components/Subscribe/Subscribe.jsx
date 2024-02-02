import './Subscribe.css'
import Button from './../Button/Button'
export default function Subscribe() {
  return (
    <div className='subscribe'>
        <div className='subscribeLeft'>
            <div className='knowUs'>
              <h1>Did you know us? </h1>
              <p>We are about books and our purpose is to show you the book who can chage your life or distract you from the real world în a better one. BWorld works with the must popular publishs just for your delight. 
              If you are about books, you must to subscribe to our newsletter. </p>
            </div>
            <form className='formDiv'>
              <input type='text' id='name' placeholder='Your name '/>
              <input type='email' id='email' placeholder='Your e-mail'/>
              <Button buttonClass={"lineButton"} buttonName={"Subscribe"} />
            </form>
        </div>
        <div className='subscribeRight'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.
            35619931643!2d36.20049333453622!3d33.50759136629076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2sDamascus%2C%20Syria!5e0!3m2!1sen!2s!4v1705786798619!5m2!1sen!2s"
             width="600" height="450" style={{order: "0"}} ></iframe>
        </div>
    </div>
  )
}
