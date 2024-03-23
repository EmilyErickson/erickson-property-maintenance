import "./homePage.css"
import { Carousel } from "../components/Carousel";

function HomePage() {
    return (
            <div className="home-page">
                <div className="main-content">
                    <h2>Family owned and operated</h2>
                    <p className="skills">We can help you with painting, drywall repair, flooring, bathroom remodels, pressure washing, cleaning, siding, landscaping, small remodels, starlink installation, concrete, and more!</p>
                    <h3>Shelbyville, IL</h3>
                </div>
                <Carousel />
                <div className="home-about">
                    <p>Family owned and operated in Shelbyville, we are proud to be known as one of the best property maintenance companies in southern Illinois. <br /> Give us a call or text today to arrange for a FREE quote!</p>
                </div>
            </div>
    )
}

export {HomePage}
