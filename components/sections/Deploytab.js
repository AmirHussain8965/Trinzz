import React from 'react'

const Deploytab = () => {
    return (
        <section className="tab1_section">
            <div className="tab1_content1_main_div">
                <div className="tab1_left_content">
                    <div className="tab1_left_video wow fadeInUp" data-wow-delay=".3s">
                        <video playsInline preload="none" muted autoPlay controls={false}>
                            <source src="/assets/img/video2.mp4" type="video/mp4" />
                        </video>

                    </div>
                </div>
                <div className="tab1_right_content wow fadeInUp" data-wow-delay=".3s">
                    <div className="tab1_right_content_text_div">
                        <ul>
                            <li>Streamline model development and management</li>
                            <li>Optimize models for specific data and latency needs</li>
                            <li>Train custom models efficiently on hosted GPUs</li>
                            <li>Leverage pre-trained models or your own</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deploytab