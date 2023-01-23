import { Link } from 'wouter'
import { currencyFormat } from './currencyFormat'

export default function PropertiesSliderCard ({ data }) {
  const { id, type, price, priceCurrency, title, description, bedrooms, bathrooms, mainImage, adress } = data

  return (
    <Link to={`/property/${id}`}>
      <article className='homeFeaturedSliderCard'>
        <picture>
          <img src={ mainImage } alt='Property'/>
          <span className={type === 'rent' ? 'rent' : 'sale'}>for {type}</span>
        </picture>
        <div className='homeFeaturedSliderCardBody'>
          <h6>{ currencyFormat.format(price) } { priceCurrency } { type === 'rent' ? 'per month' : '' }</h6>
          <h3>{ title }</h3>
          <h5>{ adress }</h5>
          <small>{ description }</small>
        </div>
        <footer>
          <div>
            <img src='./icons/bed.png' alt='Bedrooms'/>
            <small>Bedrooms { bedrooms }</small>
          </div>
          <div>
            <img src='./icons/bath.png' alt='Bathrooms'/>
            <small>Bathrooms { bathrooms }</small>
          </div>
        </footer>
      </article>
    </Link>
  )
}