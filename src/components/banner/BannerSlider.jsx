import { useState } from "react";
import simg from '../../assets/productImg/productImg.jpeg';
import card from '../../assets/image.jpg';
import card2 from '../../assets/img2.jpg';
import card3 from '../../assets/img3.jpg';

const BannerSlider = () => {
  const images = [simg, card,card2,card3];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const currentIndex = images.indexOf(selectedImage);

  const handleNextImage = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
    }
  };

  const handlePreviousImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
    }
  };

  return (

    

    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      {/* Thumbnail Images on Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginRight: '20px' }}>
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              width: '100px',
              height: '120px',
              border: selectedImage === img ? '2px solid #333' : 'none',
              borderRadius: '5px',
              overflow: 'hidden',
              cursor: 'pointer',
              margin:"10px 0"
            }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>

      {/* Large Display Image with Next and Previous Buttons */}
      <div style={{ position: 'relative', width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Previous Button */}
        <button
          onClick={handlePreviousImage}
          disabled={currentIndex === 0}
          style={{
            position: 'absolute',
            left: '10px',
            padding: '3px 10px',
            fontSize: '20px',
            cursor: 'pointer',
            backgroundColor: currentIndex === 0 ? '#ccc' : '#fff',
            color: currentIndex === 0 ? '#666' : '#000',
            border: 'none',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          }}
        >
          &lt;
        </button>
        
        {/* Large Display Image */}
        <img
          src={selectedImage}
          alt="Selected"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />

        {/* Next Button */}
        <button
          onClick={handleNextImage}
          disabled={currentIndex === images.length - 1}
          style={{
            position: 'absolute',
            right: '10px',
            padding: '3px 10px',
            fontSize: '20px',
            cursor: 'pointer',
            backgroundColor: currentIndex === images.length - 1 ? '#ccc' : '#fff',
            color: currentIndex === images.length - 1 ? '#666' : '#000',
            border: 'none',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
          }}
        >
          &gt;
        </button>
      </div>
    </div>

  );
};

export default BannerSlider;