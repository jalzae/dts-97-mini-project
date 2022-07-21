

import movies from '../../data/movies.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const OnGoing = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className='mt-4'><h3>OnGoing</h3>
      <div id='popular' className='preview mt-2 mb-2'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={4}
          navigation={true}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          onReachEnd={() => console.log("react end")}
        >
          {
            movies.results.map((x) => <SwiperSlide><div className='preview-item col-lg-11 rounded-3 m-1'>
              <img style={{ maxWidth: "100%", height: "100%" }} src={'https://image.tmdb.org/t/p/w500' + x.backdrop_path} alt={x.title} />
            </div>   </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default OnGoing