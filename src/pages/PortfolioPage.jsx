import "./homePage.css";
import image1a from "/portfolio/image1a.jpeg"
import image1b from "/portfolio/image1b.jpeg"
import image2a from "/portfolio/image2a.jpeg"
import image2b from "/portfolio/image2b.jpeg"
import image3a from "/portfolio/image3a.jpeg"
import image3b from "/portfolio/image3b.jpeg"
import image4a from "/portfolio/image4a.jpeg"
import image4b from "/portfolio/image4b.jpeg"
import image5a from "/portfolio/image5a.jpeg"
import image5b from "/portfolio/image5b.jpeg"
import image6a from "/portfolio/image6a.jpeg"
import image6b from "/portfolio/image6b.jpeg"
import image7a from "/portfolio/image7a.jpeg"
import image7b from "/portfolio/image7b.jpeg"
import image8a from "/portfolio/image8a.jpeg"
import image8b from "/portfolio/image8b.jpeg"



function PortfolioPage() {
    const imageList = [
        {
            id: 1,
            alt: "Bathroom Remodel",
            imageA: image1a,
            imageB: image1b
        },
        {
            id: 2,
            alt: "Pantry Remodel",
            imageA: image2a,
            imageB: image2b
        },
        {
            id: 3,
            alt: "Exterior Painting",
            imageA: image3a,
            imageB: image3b
        },
        {
            id: 4,
            alt: "Bathroom Flooring Replacement",
            imageA: image4a,
            imageB: image4b
        },
        {
            id: 5,
            alt: "Siding Repair",
            imageA: image5a,
            imageB: image5b
        },
        {
            id: 6,
            alt: "Starlink Install",
            imageA: image6a,
            imageB: image6b
        },
        {
            id: 7,
            alt: "Interior Painting",
            imageA: image7a,
            imageB: image7b
        },
        {
            id: 8,
            alt: "Interior Painting",
            imageA: image8a,
            imageB: image8b
        },
        ];

    return (
        <div className="home-page portfolio-page">
            <h2>Job Portfolio</h2>
            <div className="image-container">
                {imageList.map((image) => (
                    <div key={image.id} className="image-item">
                        <h4>{image.alt}</h4>
                        <div className="images">
                            <img src={image.imageA} alt={`${image.alt} before`} />
                            <img src={image.imageB} alt={`${image.alt} after`}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { PortfolioPage };