import "./homePage.css";
import image1 from "/portfolio/image1.png"
import image2 from "/portfolio/image2.png"
import image3 from "/portfolio/image3.png"
import image4 from "/portfolio/image4.png"
import image5 from "/portfolio/image5.png"



function PortfolioPage() {
    const imageList = [
        { id: 1, src: image1, alt: 'Starlink Install' },
        { id: 2, src: image2, alt: 'Bathroom Remodel' },
        { id: 3, src: image3, alt: 'Pantry Remodel' },
        { id: 4, src: image4, alt: 'Starlink Install' },
        { id: 5, src: image5, alt: 'Exterior Painting' },
    ];

    return (
        <div className="home-page portfolio-page">
            <h2>Portfolio</h2>
            <div className="image-container">
                {imageList.map((image) => (
                    <div key={image.id} className="image-item">
                        <h4>{image.alt}</h4>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export { PortfolioPage };