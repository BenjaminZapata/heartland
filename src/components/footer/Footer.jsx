import { Link } from 'wouter'

export default function Footer () {
  return (
    <footer className="footer">
      <picture>
        <div className="footerLogo">
          <Link to={'/'} >
            <img src='/icons/houseLogo.png' alt='house logo'/>
            <h2>Heartland</h2>
          </Link>
        </div>
        <h5>
          We make real state really fun and easy
        </h5>
      </picture>
      <section>
        <section className="footerColumn">
          <h3>Properties</h3>
          <div className='footerColumnLinks'>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>On Sale</Link>
            <Link to={'/'}>For Rent</Link>
          </div>
        </section>
        <section className="footerColumn">
          <h3>Other</h3>
          <div className='footerColumnLinks'>
            <Link to={'/'}>About Us</Link>
            <Link to={'/'}>Privacy Polities</Link>
          </div>
        </section>
      </section>
      <p>©2023 <a href='https://github.com/BenjaminZapata'>Benjamin Zapata</a> | All rights reserved</p>
    </footer>
  )
}