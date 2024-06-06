import React, { useState, useEffect } from 'react'
import Topbar from './components/Topbar'
import MobilTopbar from './components/MobilTopbar'
import MobilNav from './components/MobilNav'
import Title from './components/Title'
import Breadcrumbs from './components/Breadcrumbs'
import data from './data'
import SingleAccordion from './components/Accordions'
import Footer from './components/Footer'

function App() {
  const [accordions, setAccordions] = useState(data)

  //Use useEffect to utilize setAccordions without rendering it
  useEffect(() => {
    console.log('Accordions data initialized', setAccordions)
    // If you need to use setAccordions, you can do it here, e.g.,:
    // setAccordions([...accordions, newAccordion])
  }, [])

  return (
    <div className="wrapper">
      <Topbar />
      <MobilTopbar />
      <MobilNav />
      <Title title="Ready Region Southeastern" />
      <Breadcrumbs />
      <div className="container">
        <h3>
          We are proud to have been selected as the lead organization for Ready
          Region Southeastern. As a Ready Region lead organization, we are part
          of a statewide network focused on:
        </h3>
        <section className="info">
          {accordions.map((accordion) => {
            return <SingleAccordion key={accordion.id} {...accordion} />
          })}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default App
