'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import Enterimg from '../../public/assets/img/partner.webp'

export default function Team1() {
    const followImageCursor = (event, teamItem) => {
        const contentBox = teamItem.getBoundingClientRect()
        const dx = Math.min(Math.max(event.clientX - contentBox.x, 0), contentBox.width)
        const dy = Math.min(Math.max(event.clientY - contentBox.y, 0), contentBox.height)
        teamItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`
    }

    useEffect(() => {
        const teamItems = document.querySelectorAll(".team-items")

        const handleMouseMove = (event) => {
            teamItems.forEach((item) => {
                followImageCursor(event, item)
            })
        }

        document.addEventListener("mousemove", handleMouseMove)

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])
    return (
        <>
            <section className="team-section section-padding pt-0 section-bg-2" id="team" style={{ marginBottom: "160px" }}>
                <div className="line-shape">
                    <img src="/assets/img/team/line-shape.png" alt="shape-img" />
                </div>
                <div className="mask-shape">
                    <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title-area">
                        <h2 className='mytitle_tex'>Trinzz Is Enterprise-Ready</h2>
                    </div>
                    <div className="enterprize_top_main">
                        <div className="enterprize_text_div">
                            <div className='enterprize_text_inner'>
                                <i class="fa-sharp fa-solid fa-square-check" style={{ color: "rgb(116, 192, 252)" }}></i>
                                <p>Leverage Trinzz capabilities for accuracy, efficiency and speed, Securely and Scalably</p>
                            </div>
                            <div className='enterprize_text_inner'>
                                <i class="fa-sharp fa-solid fa-square-check" style={{ color: "rgb(116, 192, 252)" }}></i>
                                <p>Compliant with SOC2 Type 2 standards</p>
                            </div>
                            <div className='enterprize_text_inner'>
                                <i class="fa-sharp fa-solid fa-square-check" style={{ color: "rgb(116, 192, 252)" }}></i>
                                <p>Encryption of all data in transit and at rest ensuring end-to-end security,
                                 with SSL transport rated A+ by Qualys</p>
                            </div>
                            <div className='enterprize_text_inner'>
                                <i class="fa-sharp fa-solid fa-square-check" style={{ color: "rgb(116, 192, 252)" }}></i>
                                <p>Benefit from enterprise-grade infrastructure and regulatory compliance</p>
                            </div>
                            <div className='enterprize_text_inner'>
                                <i class="fa-sharp fa-solid fa-square-check" style={{ color: "rgb(116, 192, 252)" }}></i>
                                <p>Ready for scale through Google Cloud Platform and Amazon Web Services hosting</p>
                            </div>
                            <div className='enterprize_text_inner'>
                                <i class="fa-sharp fa-solid fa-square-check" style={{ color: "rgb(116, 192, 252)" }}></i>
                                <p>Infrastructure compliant with HIPAA, enabling Business Associate Agreements execution</p>
                            </div>
                        </div>
                        <div className="enterprize_img_div">
                        <img src="/assets/img/partner.webp" alt="shape-img" />
                        </div>
                    </div>
                </div>
                <div className='ni_chaheyay' style={{ display: "none" }}>
                    <div className="section-title">
                        <span className="text-white wow fadeInUp">EXPERT PEOPLE</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">Dedicated Team Members</h2>
                    </div>
                    <Link href="/team" className="theme-btn hover-white wow fadeInUp" data-wow-delay=".5s">
                        All Member
                        <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                    <div className="team-wrapper">
                        <div className="team-items bor-top bor-bottom wow fadeInUp" data-wow-delay=".3s">
                            <div className="team-title">
                                <span>Scrum Master</span>
                                <h4>
                                    <Link href="/team-details">Cameron Williamson</Link>
                                </h4>
                            </div>
                            <p>
                                Integer at sapien nec sapien <br />
                                sollicitudin ultrices in ut nisl.
                            </p>
                            <div className="team-hover d-none d-md-block bg-cover" style={{ backgroundImage: 'url("assets/img/team/hover-1.png")' }} />
                            <div className="social-profile">
                                <ul>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                                <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                            </div>
                        </div>
                        <div className="team-items bor-bottom pt-0 wow fadeInUp" data-wow-delay=".5s">
                            <div className="team-title">
                                <span>Engineering</span>
                                <h4>
                                    <Link href="/team-details">Leslie Alexander</Link>
                                </h4>
                            </div>
                            <p>
                                Integer at sapien nec sapien <br />
                                sollicitudin ultrices in ut nisl.
                            </p>
                            <div className="team-hover d-none d-md-block bg-cover" style={{ backgroundImage: 'url("assets/img/team/hover-1.png")' }} />
                            <div className="social-profile">
                                <ul>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                                <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                            </div>
                        </div>
                        <div className="team-items bor-bottom pt-0 wow fadeInUp" data-wow-delay=".7s">
                            <div className="team-title">
                                <span>UI/UX Designer</span>
                                <h4>
                                    <Link href="/team-details">Ronald Richards</Link>
                                </h4>
                            </div>
                            <p>
                                Integer at sapien nec sapien <br />
                                sollicitudin ultrices in ut nisl.
                            </p>
                            <div className="team-hover d-none d-md-block bg-cover" style={{ backgroundImage: 'url("assets/img/team/hover-1.png")' }} />
                            <div className="social-profile">
                                <ul>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                                <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                            </div>
                        </div>
                        <div className="team-items bor-bottom pt-0 wow fadeInUp" data-wow-delay=".9s">
                            <div className="team-title">
                                <span>Web Designer</span>
                                <h4>
                                    <Link href="/team-details">Darrell Steward</Link>
                                </h4>
                            </div>
                            <p>
                                Integer at sapien nec sapien <br />
                                sollicitudin ultrices in ut nisl.
                            </p>
                            <div className="team-hover d-none d-md-block bg-cover" style={{ backgroundImage: 'url("assets/img/team/hover-1.png")' }} />
                            <div className="social-profile">
                                <ul>
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                </ul>
                                <span className="plus-btn"><i className="fa-solid fa-plus" /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
