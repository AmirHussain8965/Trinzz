import Accordion1 from "../elements/Accordion1"


export default function Faq1() {
    return (
        <>
            <section className="faq-section fix section-padding">
                <div className="right-shape">
                    <img src="/assets/img/faq/right-shape.png" alt="shape-img" />
                </div>
                <div className="faq-shape-box">
                    <div className="faq-shape">
                        <img src="/assets/img/faq/shape.png" alt="shape-img" />
                    </div>
                </div>
                <div className="container">
                    <div className="faq-wrapper">
                        <div className="row g-4 d-flex align-items-center">
                            <div className="col-lg-6 wow fadeInUp pt-4" data-wow-delay=".4s">
                                <div className="faq-image">
                                    <img src="/assets/img/faq/ezgif-2-a4a64b9504.gif" className="rounded-5" alt="faq-img" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="faq-content">
                                    <div className="section-title">
                                        {/* <span className="wow fadeInUp">See Our Faqs</span> */}
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            FAQs
                                        </h2>
                                    </div>
                                    <div className="faq-accordion mt-4 mt-md-0">
                                        <Accordion1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
