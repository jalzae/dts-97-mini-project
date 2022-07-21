import movies from '../../data/movies.js'

const DetailHeader = ({ id }) => {

  let x = movies.results.find((e) => e.id == id)
  return (<div className="col-lg-12 d-block">
    <div className='detail-film'>
      <div className='content-detail col-lg-4'>
        <h2 className='text-light'>{x.title}</h2>
        <p className='text-light'>{x.overview}</p>
        <div className='buttonrow col-lg-12 row d-flex'>
          <button className='col-lg-5 rounded-3  play-button'>Play</button>
          <button className='col-lg-5 rounded-3  more-button'>More Information</button>
        </div>
      </div>
      <img style={{ minWidth: "100%", height: "100%", }} src={'https://image.tmdb.org/t/p/w500' + x.backdrop_path} alt={x.title} />
    </div>
    <div className='col-lg-12 p-5 m-1'>
      <h3>Description</h3>
      <p className='text-light'>{x.overview}</p>
    </div>

  </div>)

}
export default DetailHeader