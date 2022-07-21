

import movies from '../../data/movies.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const TopMovie = () => {
  SwiperCore.use([Navigation]);

  const n = (num, len = 2) => {
    return `${num}`.padStart(len, '0');
  }

  return (
    <div className='mt-4'><h3>Top Indonesian Movie</h3>
      <div id='popular' className='preview mt-2 mb-2'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={4}
          navigation={true}
          loop={true}
          onSlideChange={() => { }}
          onSwiper={(swiper) => { }}
          onReachEnd={() => { }}
        >
          {
            movies.results.map((x, index) => <SwiperSlide>
              {index++}
              <div className='preview-item col-lg-11 rounded-3 m-1 d-flex'>
                <div className='col-lg-6'>
                  <img style={{ maxWidth: "100%", height: "100%" }} src={process.env.PUBLIC_URL + '/assets/img/rank/Rank - ' + n(index) + '.png'} alt={x.title} />
                </div>
                <div className='col-lg-6'>
                  <img style={{ maxWidth: "100%", height: "100%" }} src={'https://image.tmdb.org/t/p/w500' + x.poster_path} alt={x.title} />
                </div>

              </div>   </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default TopMovie