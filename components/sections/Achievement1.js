import CounterUp from "../elements/CounterUp"


export default function Achievement1() {
    return (
        <>
            <section className="achievement-section fix section-padding pt-0">
                <div className="container">
                    <div className="achievement-wrapper">
                        <div className="section-title mb-0">
                            <span className="text-white wow fadeInUp">achievement</span>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                We Are Increasing <br /> Fine-tuning Success
                                
                            </h2>
                        </div>
                        <div className="counter-area">
                            <div className="counter-items wow fadeInUp" data-wow-delay=".3s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/01.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={40}/>%</h2>
                                    <p>Faster Training</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".5s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/02.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={28}/>%</h2>
                                    <p>Reduced Manual Work</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".7s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/03.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={30}/>%</h2>
                                    <p>Lesser Costs</p>
                                </div>
                            </div>
                            <div className="counter-items wow fadeInUp" data-wow-delay=".9s">
                                <div className="icon">
                                    <img src="/assets/img/achievement-icon/04.svg" alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h2><CounterUp count={60}/>%</h2>
                                    <p>Higher Accuracy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
