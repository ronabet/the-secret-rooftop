import React from 'react';
import type { ImageVariantSet } from '../data/imageManifest';

type ResponsiveImageProps = {
  image: ImageVariantSet | string;
  alt: string;
  sizes: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  referrerPolicy?: React.ImgHTMLAttributes<HTMLImageElement>['referrerPolicy'];
};

function resolveImage(image: ImageVariantSet | string) {
  if (typeof image === 'string') {
    return { src: image, srcSet: undefined, width: undefined, height: undefined };
  }
  return image;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  image,
  alt,
  sizes,
  className,
  width,
  height,
  loading = 'lazy',
  fetchPriority,
  referrerPolicy,
}) => {
  const resolved = resolveImage(image);

  return (
    <img
      src={resolved.src}
      srcSet={resolved.srcSet}
      sizes={sizes}
      alt={alt}
      width={width ?? resolved.width}
      height={height ?? resolved.height}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      referrerPolicy={referrerPolicy}
    />
  );
};
