import { useState, useEffect, memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

// Cache for storing loaded images
const imageCache = new Map<string, string>();

const OptimizedImage = memo(({ src, alt, className = '', onLoad, onError }: OptimizedImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    // Check if image is already in cache
    if (imageCache.has(src)) {
      setImageSrc(imageCache.get(src) || '');
      onLoad?.();
      return;
    }

    // Create new image object to preload
    const img = new Image();
    
    img.onload = () => {
      // Store in cache
      imageCache.set(src, src);
      setImageSrc(src);
      onLoad?.();
    };

    img.onerror = () => {
      onError?.();
    };

    img.src = src;

    // Cleanup
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, onLoad, onError]);

  return (
    <img
      src={imageSrc || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'} // Transparent placeholder
      alt={alt}
      className={className}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 