
import movies from '../../data/movies.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Original = () => {
  SwiperCore.use([Navigation]);
  return (
    <div className='mt-4'><h3>Original</h3>
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
            movies.results.map((x) => <SwiperSlide><div className='preview-item col-lg-10 col-md-3 col-sm-7 col-xs-12 rounded-3 m-1'>
              <img style={{ maxWidth: "100%", height: "100%" }} src={'https://image.tmdb.org/t/p/w500' + x.poster_path} alt={x.title} />
            </div></SwiperSlide>)
          }
        </Swiper>
      </div></div>
  )
}

export default Original