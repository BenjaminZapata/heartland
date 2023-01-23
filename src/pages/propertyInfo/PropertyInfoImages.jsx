export default function PropertyInfoImages ({ images }) {

  console.log(images)
  return (
    <article className="propertyInfoImagesCarousel">
      {
        images?.map( img => {
          return <img className="propertyInfoImagesCarouselItem" src={img} alt='' />
        })
      }
    </article>
  )
}