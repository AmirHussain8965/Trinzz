'use client'
import { useState } from 'react';

export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(null);
    const handleClick = (index) => {
        setActiveItem(index);
    };
    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={activeItem === 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false" aria-controls="faq1">
                            How does Trinzz assist with dataset management?
                        </button>
                    </h5>
                    <div id="faq1" className={activeItem === 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Trinzz streamlines dataset curation and automation, ensuring that your data is organized and optimized for your computer vision projects.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={activeItem === 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                            How does Trinzz simplify the data annotation process?
                        </button>
                    </h5>
                    <div id="faq2" className={activeItem === 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Trinzz's platform automates data annotation, significantly reducing manual steps and accelerating the annotation process. This automation makes data annotation easy and fast, enhancing efficiency and productivity.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={activeItem === 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                            Can Trinzz help deploy computer vision projects across different devices?
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem === 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Absolutely. Trinzz seamlessly deploys computer vision projects across various devices, ensuring smooth integration and compatibility with your technology stack.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(4)}>
                        <button className={activeItem === 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq4" aria-expanded="false" aria-controls="faq4">
                            Does Trinzz integrate with different tech stacks?
                        </button>
                    </h5>
                    <div id="faq4" className={activeItem === 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Yes, Trinzz integrates seamlessly with any tech stack, offering flexibility and adaptability to your existing infrastructure.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(5)}>
                        <button className={activeItem === 5 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">
                            How customizable is Trinzz according to specific use cases?
                        </button>
                    </h5>
                    <div id="faq5" className={activeItem === 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Trinzz is highly customizable to suit your unique use case requirements. Our platform can be tailored to meet your specific needs, ensuring optimal performance and results.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(6)}>
                        <button className={activeItem === 6 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">
                            Will I receive personalized support for my project development?
                        </button>
                    </h5>
                    <div id="faq6" className={activeItem === 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                            Yes, with Trinzz, you'll have access to a dedicated developer who will work closely with you to develop turn-key training models, build custom computer vision algorithms, and fine-tune solutions to meet your project objectives.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
