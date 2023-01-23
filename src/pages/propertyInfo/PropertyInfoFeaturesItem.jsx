export default function PropertyInfoFeaturesItem ({ data, type }) {
  if (type !== 'list'){
    return (
      <div className="propertyInfoMainFeaturesListItem">
        <img className="propertyInfoMainFeaturesItemIcon" src={type === 'bathrooms' ? '/icons/bath.png' : '/icons/bed.png'} alt={type}/>
        <small>{ data } { type }</small>
      </div>
    )
  }

  if (type === 'list'){
    let content = []
    data?.forEach(arr =>{
      content.push(<div className="propertyInfoMainFeaturesListItem" key={arr[0]}>
      <img className="propertyInfoMainFeaturesItemIcon" src={`/icons/${arr[0]}.png`} alt={arr[0]}/>
      <small>{ arr[1] }</small>
    </div>)
    })
    return content
  }

}