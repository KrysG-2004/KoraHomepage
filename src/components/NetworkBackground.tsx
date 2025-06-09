import React from 'react';

const NetworkBackground: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="networkGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: '#F8FAFF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#EEF3FF', stopOpacity: 1 }} />
        </radialGradient>
        
        <filter id="networkBlur">
          <feGaussianBlur stdDeviation="20" />
        </filter>

        <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="2" fill="#E0E7FF" fillOpacity="0.4" />
        </pattern>

        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 0.1 }} />
          <stop offset="50%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#2563EB', stopOpacity: 0.1 }} />
        </linearGradient>

        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#93C5FD', stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
        </linearGradient>
      </defs>

      {/* 背景 */}
      <rect width="100%" height="100%" fill="url(#networkGradient)" />

      {/* 点阵图案 */}
      <rect width="100%" height="100%" fill="url(#dots)" />

      {/* 渐变模糊圆形 */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = Math.random() * 1000;
        const y = Math.random() * 1000;
        const size = 150 + Math.random() * 250;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={size}
            fill="url(#nodeGradient)"
            filter="url(#networkBlur)"
          />
        );
      })}

      {/* 连接线 */}
      {Array.from({ length: 12 }).map((_, i) => {
        const x1 = Math.random() * 1000;
        const y1 = Math.random() * 1000;
        const x2 = Math.random() * 1000;
        const y2 = Math.random() * 1000;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeOpacity="0.15"
          />
        );
      })}
    </svg>
  );
};

export default NetworkBackground; 