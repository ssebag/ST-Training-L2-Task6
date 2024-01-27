import './Button.css'
export default function Button({buttonName,buttonClass}) {
  return (
    <button  className={buttonClass}>{buttonName}</button>
  )
}
