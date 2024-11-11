// ImageSlider.js
import  { useState, useEffect } from 'react';

// Import images from your folder
import { assets } from '../assets/assets';

const images = [assets.sonu, assets.arjit, assets.honey, assets.hdf]; // Add paths to your images here
const musicalSentences = [
    "Feel the rhythm of life",
    "Let the music take you away",
    "Dance to the beats of joy",
    "Harmony in every note"
]; // Add sentences to display on each slide

const ImageSlider = ({interval = 3000}) => {
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
                <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-700 ease-in-out
                        ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                        transform: `translateX(${(index - currentIndex) * 100}%)`,
                    }}
                >
                    <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg border-4 border-[#ff8200]"
                    />
                    {index === currentIndex && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div
                                className="text-white font-extrabold text-6xl absolute animate-marquee"
                                style={{
                                    whiteSpace: 'nowrap',
                                    animation: 'marquee 12s linear infinite',
                                    top: '50%',
                                    transform: 'translateY(-50%)', // Centering the text vertically
                                }}
                            >
                                {musicalSentences[index]}
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(100%); }
                    100% { transform: translateX(-100%); }
                }
            `}</style>
        </div>
    );
};

export default ImageSlider;
