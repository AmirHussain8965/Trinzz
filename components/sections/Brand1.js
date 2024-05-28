import BrandSlider1 from "../slider/BrandSlider1"


export default function Brand1() {
    return (
        <>
            <div className="brand-section fix section-padding pt-0" style={{marginTop: "100px"}}>
                <div className="container">
                    <div className="brand-wrapper">
                        <h6 className="text-center wow fadeInUp" data-wow-delay=".3s" style={{marginBottom: "20px"}}>Fits Seamlessly Within Your Tech Stack</h6>
                        <p className="my_brand_des">Enhance your workflow with our extensive array of open APIs, SDKs, developer tools, and comprehensive documentation. Effortlessly tailor, automate, and broaden your pipeline to seamlessly integrate with other applications.</p>
                        <div style={{marginTop: "50px"}}>
                        <BrandSlider1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
