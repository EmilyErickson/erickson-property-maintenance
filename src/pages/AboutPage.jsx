import "./homePage.css"

function AboutPage() {
    return (
        <div className="home-page about-page">
            <div className="about-background">
                <h2>About Us</h2>
                <p>
                Established in Shelbyville, our family-owned and operated business takes pride in delivering efficient and high-quality services.
                    With a dedicated team boasting years of experience, we ensure every project is handled with expertise and precision.
                </p>
                <p>
                At our company, customer satisfaction is paramount. We strive to exceed expectations by offering personalized service and attention to detail.
                    From the initial consultation to the final touches, we work closely with our clients to ensure their vision becomes a reality.
                </p>
                <p>
                <a href="/contact"><strong>Contact us</strong></a> today to schedule a complimentary quote and experience the difference our dedicated team can make for your project.
                </p>
            </div>
        </div>
    )
}

export {AboutPage}