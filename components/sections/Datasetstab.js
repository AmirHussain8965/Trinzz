import React from 'react';

const Datasetstab = () => {
    return (
        <section className="tab1_section">
            <div className="tab1_content1_main_div">
                <div className="tab1_left_content">
                    <div className="tab1_left_video wow fadeInUp" data-wow-delay=".3s">
                        {/* <video playsInline preload="none" muted autoPlay controls={false}>
                            <source src="/assets/img/video2.mp4" type="video/mp4" />
                        </video> */}
                        <img src="/assets/img/new20.png" alt="Dataset-img" />
                    </div>
                </div>
                <div className="tab1_right_content wow fadeInUp" data-wow-delay=".3s">
                    <div className="tab1_right_content_text_div">
                        <ul>
                            <li>Effortlessly manage visual data from diverse sources</li>
                            <li>Track multiple dataset versions for experimentation</li>
                            <li>Refine data using metadata, segmentation, and preprocessing</li>
                            <li>Access images and videos via API in over 40 formats</li>
                            <li>Utilize semantic search and CLIP vectors for insights</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Datasetstab;
