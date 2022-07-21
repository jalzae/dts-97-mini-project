
import movies from '../../data/movies.js'

const MyList = () => {
  return (
    <div className='mt-4'><h3>MyList</h3>
      <div id='popular' className='preview mt-2 mb-2'>
        {
          movies.results.map((x) => <div className='preview-item col-lg-2 col-md-3 col-sm-7 col-xs-12 rounded-3 m-1'>
            <img style={{ maxWidth: "100%", height: "100%" }} src={'https://image.tmdb.org/t/p/w500' + x.backdrop_path} alt={x.title} />
          </div>)
        }
      </div></div>
  )
}

export default MyList