'use client'
import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
        reverseDirection: true,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
        reverseDirection: true,
    },
    navigation: {
        nextEl: ".array-prev",
        prevEl: ".array-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 4,
        },
        991: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
const Application = () => {
    return (
        <section className="application_section">
            <div className="appli_title">
                <h2>Trinzz Can Have Applications Across <br /> Many Industries</h2>
                <p>Trinzz is built to redefine automation by using computer vision tools across industries,<br /> giving your machines and applications the power to detect, segment, modify or track objects. Here are some of the sample use cases</p>
            </div>
            <div className="applicatio_swiper_main">
                <div className="application_swiper_one">
                    <div className="swiper service-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/1.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Agriculture</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/5.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Medicine</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/9.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Automotive</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/11.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Ecommerce</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/13.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Fashion</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/15.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Scurity & Surveillance</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/17.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Construction</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/19.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Construction</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/21.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Education</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/23.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Sports</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/25.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Sports</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/27.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Fitness</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/30.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Scurity & Surveillance</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="application_swiper_one" style={{paddingTop:'40px'}}>
                    <div className="swiper service-slider">
                        <Swiper {...swiperOptions2} className="swiper-wrapper">
                        <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/1.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Agriculture</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/2.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Agriculture</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/4.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Warehousing</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/6.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Retail</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/10.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Scurity & Surveillance</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/12.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Fashion</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/14.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Fashion</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/16.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Scurity & Surveillance</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/18.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Construction</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/20.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Education</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/22.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Agriculture</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/24.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Sports</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="application_swiper_img">
                                    <img src="/assets/img/30.jpg" alt="icon-img" />
                                    <div className="swiper_onimg_text">
                                        <h4>Scurity & Surveillance</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Application