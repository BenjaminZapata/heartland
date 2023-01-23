import { Link } from 'wouter';

export default function Navbar ({ navbarStyle }) {
  return(
    <nav className={`navbar ${ navbarStyle === 'color' ? 'filled' : ''}`}>
      <div className="navbarLogo">
        <Link to={'/'} >
          <img src='/icons/houseLogo.png' alt='house logo'/>
          <h2>Heartland</h2>
        </Link>
      </div>
      <div className="navbarLinks">
        <ol>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>On Sale</Link>
          <Link to={'/'}>For Rent</Link>
          <Link to={'/'}>About Us</Link>
        </ol>
        <button>Log In</button>
      </div>
    </nav>
  )
}