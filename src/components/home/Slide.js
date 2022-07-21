

import movies from '../../data/movies.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
const Slider = () => {
  let navigate = useNavigate();
  SwiperCore.use([Navigation]);

  const goDetail = (x) => {

    navigate(`/detail/${x}`, { state: {} }, { replace: true });

  }

  return (
    <div className='m-4'>
      <div id='slider' className='preview m-2 mb-2'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={1}
          navigation={true}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          onReachEnd={() => { }}
        >
          {
            movies.results.map((x) => <SwiperSlide>
              <div onClick={() => goDetail(x.id)} className='preview-slide col-lg-12 rounded-0 m-4 d-flex'>
                <div className='slider-left col-4'>
                  <p className='title'>{x.title}</p>
                  <p className='desc'>{x.overview}</p>
                </div>

                <div className='slider-right col-8 d-flex'>
                  <div className='col-lg-2 slider-center'>

                  </div>
                  <img style={{ maxWidth: "100%", height: "100%", minHeight: "562px" }} src={'https://image.tmdb.org/t/p/w500' + x.backdrop_path} alt={x.title} />
                </div>
              </div>   </SwiperSlide>)
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Slider