import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "./images/review-robert.png",
  },
  {
    original: "./images/review-nikki.png",
  },
  {
    original: "./images/review-elizabeth.png",
  },  
  {
    original: "./images/review-tamara.png",
  },
];

function Carousel() {
    return (
    <div className="carousel-container">
    <h2>What customers are saying:</h2>
    <ImageGallery items={images} 
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={6500}
        slideDuration={1000}
        autoPlay={true}
        />
        </div>
        )
}

export {Carousel}
