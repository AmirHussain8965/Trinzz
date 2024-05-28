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
        disableOnInteraction: false,
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

export default function Service1() {
    return (
        <>
            <section className="service-section fix section-padding bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }} id="service">
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">CV Solutions</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Incorporate any foundational model into your workflow or let us select the best model for your training use case
                            </h2>
                            <p>Trinzz selects models from esteemed sources such as OpenAI, Meta AI, and other renowned open source repositories, tailoring the best-fit model for your needs. With built-in automated dataset curation, customizable training, and reinforcement feedback loops, Trinzz guarantees 60% enhanced accuracy and 75% faster fine-tuning while reducing costs significantly.</p>
                        </div>
                        <div className="array-button">
                            <button className="array-prev"><i className="fal fa-arrow-right" /></button>
                            <button className="array-next"><i className="fal fa-arrow-left" /></button>
                        </div>
                    </div>
                    <div className="service-wrapper">
                        <div className="swiper service-slider">
                            <Swiper {...swiperOptions} className="swiper-wrapper">

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Customize Models
                                                </Link>
                                            </h4>
                                            <p>
                                                Tailor models to specific requirements and goals
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Train with your dataset
                                                </Link>
                                            </h4>
                                            <p>
                                                Personalize training model and fine-tune with your unique data
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Build Custom data set
                                                </Link>
                                            </h4>
                                            <p>
                                                Automate Building or Curating datasets to match your exact needs
                                            </p>
                                            {/* <Link href="/service-details" className="theme-btn-2 mt-3">
                                                Read More
                                                <i className="fa-solid fa-arrow-right-long" />
                                            </Link> */}
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Remove hallucinations
                                                </Link>
                                            </h4>
                                            <p>
                                                Eliminate false positives and other model errors by automating feedback loops
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-1.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Customize Models
                                                </Link>
                                            </h4>
                                            <p>
                                                Tailor models to specific requirements and goals
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-2.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Train with your dataset
                                                </Link>
                                            </h4>
                                            <p>
                                                Personalize training model and fine-tune with your unique data
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-3.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Build Custom data set
                                                </Link>
                                            </h4>
                                            <p>
                                                Automate Building or Curating datasets to match your exact needs
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="service-box-items">
                                        <div className="icon">
                                            <img src="/assets/img/service/icon/s-icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link href="/service-details">
                                                    Remove hallucinations
                                                </Link>
                                            </h4>
                                            <p>
                                                Eliminate false positives and other model errors by automating feedback loops
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="service-text wow fadeInUp" data-wow-delay=".4s">
                            <h6>
                            Need Any Kind Of Computer Vision Solution For Your Business.  <Link href="/contact">Contact Us</Link>
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


