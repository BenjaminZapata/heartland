import Navbar from '../../components/navbar/Navbar';
import { propertiesData } from '../../components/propertiesSlider/propertiesData';
import PropertiesSlider from '../../components/propertiesSlider/PropertiesSlider';
import Testimonials from '../../components/testimonials/Testimonials';
import Footer from '../../components/footer/Footer';

export default function Home () {
  return(
    <section className='home'>
      <header className='homeLanding'>
        <Navbar />
        <form>
          <h2>Find your perfect place, fast and easy as it sounds</h2>
          <div className='inputSettings'>
            <div className='inputSettingsBox'>
              <label>Location <img src='/icons/location.png' alt='location'/></label>
              <input type='text'></input>
            </div>
            <div className='inputSettingsBox'>
              <label>Budget <img src='/icons/budget.png' alt='budget'/></label>
              <input type='number'></input>
            </div>
            <div className='inputSettingsBox'>
              <label>Type <img src='/icons/typehome.png' alt='type'/></label>
              <input type='text'></input>
            </div>
          <button><img src='/icons/search.png' alt='search'/></button>
          </div>
        </form>
      </header>

      <section className='homeFeatured'>
        <header className='homeFeaturedHeader'>
          <h2>Featured Properties</h2>
          <p>Find the best deal for your future property</p>
        </header>
        <PropertiesSlider data={ propertiesData }/>
      </section>

      <section className='homeBenefits'>
        <picture>
        </picture>
        <aside className='homeBenefitsAside'>
          <header className='homeBenefitsAsideHeader'>
            <h2>Special Advantage</h2>
            <p>Benefits you get when using our services</p>
          </header>
          <article className='homeBenefitsAsideContainer'>
            <div className='homeBenefitsAsideContainerCard'>
              <img src='/icons/coins.png' alt='Lowest Comission'/>
              <aside>
                <h3>Lowest Comission</h3>
                <p>We offer our customers the best offers and quality prices of our properties</p>
              </aside>
            </div>
            <div className='homeBenefitsAsideContainerCard'>
              <img src='/icons/lock.png' alt='Property Insurance'/>
              <aside>
                <h3>Property Insurance</h3>
                <p>We provide full property insurance to our clients in any kind of scenario</p>
              </aside>
            </div>
            <div className='homeBenefitsAsideContainerCard'>
              <img src='/icons/customerSupport.png' alt='Customer Support'/>
              <aside>
                <h3>24/7 Customer Support</h3>
                <p>Our support agents are always available in case of any situations</p>
              </aside>
            </div>
          </article>
        </aside>
      </section>

      <section className='homeTestimonials'>
        <header>
          <h2>Testimonials</h2>
          <p>What our clients have to say about us...</p>
        </header>
        <article>
          <Testimonials />
        </article>
      </section>

      <Footer/>
    </section>
  )
}