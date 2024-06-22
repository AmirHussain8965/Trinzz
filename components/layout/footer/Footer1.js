import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img src="/assets/img/logo2.png" style={{height:"60px"}} alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p style={{fontSize:"16px"}}>
                                        Trinzz is at the forefront of researching the latest advancements in computer vision and visual processing technologies to redefine your computer vision experience. Unleash your possibilities, create compelling outcomes, and elevate your applications with Trinzz.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="https://twitter.com/TrinzzVideo" target="_blank"><i className="fab fa-twitter" /></Link>
                                            <Link href="https://www.linkedin.com/company/trinzz/" target="_blank"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="https://www.youtube.com/@Trinzz" target="_blank"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ps-lg-5 ms-lg-5 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                5501 DeMarcus Blvd, Apartment 242, Dublin, California 94568
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+16692520867">+16692520867</Link>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:hello@trinzz.com">hello@trinzz.com</Link>
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn hover-white mt-4">
                                            get A Quote
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                Trinzz About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Blogs
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                <i className="fa-solid fa-chevron-right" />
                                                FAQ’S
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <i className="fa-solid fa-chevron-right" />
                                                Contact Us
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                            {/* <div  className="col-xl-3 col-lg-4 col-md-6 col-sm-12 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                © All Copyright {new Date().getFullYear()} by <Link href="/">Trinzz</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                                <li>
                                    <Link href="/contact">
                                        Terms &amp; Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
            </footer>

        </>
    )
}
