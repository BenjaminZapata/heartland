import { useEffect, useState } from 'react'
import { propertiesData } from '../../components/propertiesSlider/propertiesData'
import { currencyFormat } from '../../components/propertiesSlider/currencyFormat'
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import PropertyInfoFeatures from './PropertyInfoFeatures'
import PropertyInfoImages from './PropertyInfoImages'

export default function PropertyInfo ({ params }) {
  const { id } = params
  const [ propertyData, setPropertyData] = useState({})

  const { type, buildingType, price, priceCurrency, title, description, bedrooms, bathrooms, mainImage, otherImages, adress, location, features } = propertyData

  useEffect(() => {
    setPropertyData(findProperty(id))
  }, [id])

  const findProperty = (id) => { //eslint-disable-next-line
    const data = propertiesData.find( el => el.id == id) 
    return data
  }

  return (
    <>
      <Navbar navbarStyle='color'/>
      <section className="propertyInfo">
        <aside className='propertyInfoImages'>
          <img className='propertyInfoImagesMain' src={ mainImage } alt='house main' />
          <PropertyInfoImages images={otherImages} />
        </aside>
        <main className='propertyInfoMain'>
          <p className='propertyInfoMainType'>{ buildingType } for { type }</p>
          <h1 className='propertyInfoMainTitle'>{ title }</h1>
          <h3 className='propertyInfoMainAdress'>{ adress }, { location }</h3>
          <h2 className='propertyInfoMainPrice'>{ currencyFormat.format(price) } { priceCurrency } { type === 'rent' ? 'per month' : '' }</h2>
          <p className='propertyInfoMainDescription'>{ description }</p>
          <article className='propertyInfoMainFeatures'>
            <h3>Features</h3>
            <div className='propertyInfoMainFeaturesList'>
              <PropertyInfoFeatures bedrooms={ bedrooms } bathrooms={ bathrooms } features={ features } />
            </div>
          </article>
        </main>
      </section>
      <Footer/>
    </>
  )
}