'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt?: string;
  className?: string;
  wrapperClassName?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: string;
  fill?: boolean;
  sizes?: string;
};

export default function FadeImage({
  src,
  alt = '',
  className,
  wrapperClassName,
  style,
  loading,
  fetchPriority,
  decoding: _decoding,
  fill,
  sizes = '100vw',
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const priority = fetchPriority === 'high' || loading === 'eager';

  return (
    <div className={`relative ${wrapperClassName ?? ''}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded" aria-hidden />
      )}
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : { width: 0, height: 0 })}
        sizes={sizes}
        priority={priority}
        unoptimized
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
        style={fill ? undefined : { width: '100%', height: 'auto', ...style }}
      />
    </div>
  );
}
