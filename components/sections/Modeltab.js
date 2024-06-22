import React from 'react'

const Modeltab = () => {
    return (
        <section className="tab1_section">
            <div className="tab1_content1_main_div">
                <div className="tab1_left_content">
                    <div className="tab1_left_video wow fadeInUp" data-wow-delay=".3s">
                        {/* <video playsInline preload="none" muted autoPlay controls={false}>
                            <source src="/assets/img/video2.mp4" type="video/mp4" />
                        </video> */}
                        <img src="/assets/img/tabs/tab-modal.jpg" alt="" />

                    </div>
                </div>
                <div className="tab1_right_content wow fadeInUp" data-wow-delay=".3s">
                    <div className="tab1_right_content_text_div">
                        <ul>
                            <li>Swift browser-based labeling</li>
                            <li>Automate batch labeling with Auto-annotate API</li>
                            <li>Speed up workflows with AI-assisted labeling</li>
                            <li>Apply labels instantly with pre-trained models and SAM</li>
                            <li>Track image changes with detailed history logs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modeltab