import { dataSwiper } from "../data/index";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SliderCompo = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={400}
    slidesPerView={1}
    autoplay= {true}
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
>
{dataSwiper.map((list) => {
  return(
    <SwiperSlide key={list.id}>
      <div className="mybg">
        <img  src={list.image} alt="" />
      </div>  
    </SwiperSlide>
  )
})}
</Swiper>

)
}
