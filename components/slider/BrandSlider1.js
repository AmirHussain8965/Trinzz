
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    // slidesPerView: 5,
    spaceBetween: 30,
    speed: 1300,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1199: {
            slidesPerView: 5,
        },
        991: {
            slidesPerView: 4,
        },
        767: {
            slidesPerView: 3,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function BrandSlider1() {
    return (
        <>
            <div className="swiper brand-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand1.webp" className="brand_xbig" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand2.png" className="brand_small" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand3.png" className="brand_big" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand4.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand5.svg" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand6.png" className="brand_big" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand7.jpg" className="brand_big" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand8.jpg" className="brand_xsmall" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand9.png" className="brand_big" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand10.webp" className="brand_big" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand11.png" className="brand_small" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand12.png" className="brand_big" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand13.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand14.png" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="brand-image">
                            <img src="/assets/img/brand15.png" className="brand_small" alt="brand-img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
