import PropertiesSliderCard from "./PropertiesSliderCard";

export default function PropertiesSlider ({ data }) {
  return (
    <section className='homeFeaturedSlider'>
      {data?.map( el => {
        return <PropertiesSliderCard key={ el.id } data={ el } />
      })}
    </section>
  )
}