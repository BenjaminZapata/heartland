import PropertyInfoFeaturesItem from "./PropertyInfoFeaturesItem"

export default function PropertyInfoFeatures ({ bathrooms, bedrooms, features }) {
  return (
    <>
      <PropertyInfoFeaturesItem data={ bathrooms } type='bathrooms' />
      <PropertyInfoFeaturesItem data={ bedrooms } type='bedrooms' />
      <PropertyInfoFeaturesItem data={ features } type='list' />
    </>
  )
}