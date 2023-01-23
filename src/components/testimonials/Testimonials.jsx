import React, { useEffect, useState } from 'react'
import Opinion from './Opinion'

export default function Testimonials () {
  const [ testimonialIndex, setTestimonialIndex ] = useState(0)
  const [ data, setData ] = useState([])
  function getData () {
    return fetch('https://randomuser.me/api/')
      .then(res => res.json())
      .then(res => {
        const result = res.results[0]
        return result
      })
  }

  const handleTestimonialDisplay = ( action ) => {
    const dataLength = data.length
    if ( action === '+'){
      if(testimonialIndex === dataLength - 1){
        setTestimonialIndex(0)
      } else {
        let aux = testimonialIndex + 1
        setTestimonialIndex(aux)
      }
    } else if ( action === '-'){
      if(testimonialIndex === 0){
        let aux = dataLength - 1
        setTestimonialIndex(aux)
      } else {
        let aux = testimonialIndex - 1
        setTestimonialIndex(aux)
      }
    }
  }

  useEffect(() => {
    let array = []
    for (let i = 0; i < 5; i++){
      getData()
        .then( res => {
          array.push(res)
          setData(array)
        })
    }
  }, [])
  

  return(
    <>
      <button onClick={() => handleTestimonialDisplay('-')} className='arrow'><img src='./icons/arrowLeft.png' alt='Arrow Left'/></button>
      <Opinion data={data[testimonialIndex]} />
      <button onClick={() => handleTestimonialDisplay('+')} className='arrow'><img src='./icons/arrowRight.png' alt='Arrow Right'/></button>
    </>
  )
}