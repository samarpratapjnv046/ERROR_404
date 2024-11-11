// ImageSlider.js
import React, { useState, useEffect } from 'react';

// Import images from your folder
import { assets } from '../assets/assets';

const images = [assets.sonu, assets.arjit, assets.honey]; // Add paths to your images here

const ImageSlider = ({ interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(slideInterval);
    }, [interval]);

    return (
        <div className="relative w-full h-96 overflow-hidden flex justify-center items-center mt-4">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index}`}
                    className={`absolute w-full h-full object-contain rounded-lg shadow-lg transition-transform duration-700 ease-in-out
                        ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{
                        transform: `translateX(${(index - currentIndex) * 100}%)`,
                    }}
                />
            ))}
        </div>
    );
};

export default ImageSlider;
