
import data from '../../data/profile.js'

function Picture() {

  return (
    data.map(x =>
      <div className='col-lg-2 text-light m-4'>
        <img style={{ maxWidth: "100%" }} src={process.env.PUBLIC_URL + x.image} alt="" />
        <p style={{ textAlign: "center", color: "gray", fontSize: 19 }} className="mt-3">{x.name}</p>
      </div>)
  )

}
export default Picture;