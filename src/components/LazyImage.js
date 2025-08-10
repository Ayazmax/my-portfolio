import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--bg-secondary);
  border-radius: 8px;
`;

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--border-color);
  border-top: 2px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LazyImage = ({ 
  src, 
  alt, 
  placeholder = "Loading...", 
  className,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const handleImageError = () => {
    setHasError(true);
    if (onError) onError();
  };

  return (
    <ImageContainer ref={containerRef} className={className}>
      {!isInView && (
        <Placeholder>
          <LoadingSpinner />
        </Placeholder>
      )}
      
      {isInView && !isLoaded && !hasError && (
        <Placeholder>
          <LoadingSpinner />
        </Placeholder>
      )}
      
      {isInView && !hasError && (
        <StyledImage
          ref={imageRef}
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      )}
      
      {hasError && (
        <Placeholder>
          <span>Failed to load image</span>
        </Placeholder>
      )}
    </ImageContainer>
  );
};

export default LazyImage;
