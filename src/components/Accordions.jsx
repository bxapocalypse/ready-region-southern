import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Accordions = ({ title, secondTitle, info }) => {
  const [showInfo, setShowInfo] = useState(false)

  // Create a function to sanitize the info
  const createMarkup = (htmlString) => {
    //Optionally sanitize the htmlstring if needed to prevent XSS attacks
    return { __html: htmlString.replace(/"/g, '') }
  }
  return (
    <article className="accordion">
      <header>
        <h4>
          <span className="title">{title}</span> -{' '}
          <span className="secondTitle">{secondTitle}</span>
        </h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p dangerouslySetInnerHTML={createMarkup(info)}></p>}
    </article>
  )
}
export default Accordions
