'use client';

import { useState, useEffect, useRef } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
};

export default function FadeImage({ className, wrapperClassName, style, ...props }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className={`relative ${wrapperClassName ?? ''}`} style={style}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded" aria-hidden />
      )}
      <img
        ref={ref}
        {...props}
        onLoad={() => setLoaded(true)}
        className={`transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className ?? ''}`}
      />
    </div>
  );
}
