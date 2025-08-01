"use client";

import { useState, useEffect } from 'react';

const ImgLoader = () => {
  const [showImage, setShowImage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeOut(true);  // Trigger fade-out
      setTimeout(() => {
        setShowImage(false);  // Remove the image after fade-out is done
      }, 1000);  // Wait for the fade-out transition (1 second)
    }, 2000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999999999',
            opacity: fadeOut ? 0 : 1, // Apply fade-out opacity when needed
            transition: 'opacity 1s ease-out', // Transition effect
          }}
        >
          <div
            style={{
              width: '15em', // Increased width
              height: '15em', // Increased height (optional)
              zIndex: '9999999999',
            }}
          >
            <img
              src="https://res.cloudinary.com/da48bjec6/image/upload/v1751491623/Capture-removebg-preview_tet2bg.png"
              alt="Loading"
              style={{
                width: '150%', // Ensure the image scales to fill the container
                height: '150%', // Ensure the image scales to fill the container
                objectFit: 'contain', // Maintain aspect ratio
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImgLoader;
