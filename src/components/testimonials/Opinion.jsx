import { opinionComments } from "./opinionComments"

export default function Opinion ({ data }) {
  const { name, dob, picture } = data || {}

  const selectRandomComment = (opinionComments) => {
    const comment = Math.floor(Math.random() * opinionComments.length);
    return opinionComments[comment]
  }
  
  return (
    <div className="opinion">
      <img src={data ? picture.large : ''} alt=''/>
      <p>{selectRandomComment(opinionComments)}</p>
      <strong>{data ? name.first + ' ' + name.last + ', ' + dob.age : ''}</strong>
    </div>
  )
}