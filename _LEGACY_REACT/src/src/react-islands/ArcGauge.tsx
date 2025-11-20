import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

/**
 * ArcGauge Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Animated gauge with motion/react
 * 
 * Features:
 * - Arc gauge visualization for score (0-100)
 * - Smooth animation with motion/react
 * - Color changes based on score
 * 
 * Will be used in Astro with: <ArcGauge client:load score={85} />
 */

interface ArcGaugeProps {
  score: number; // 0-100
  size?: number;
  strokeWidth?: number;
}

export function ArcGauge({ score, size = 200, strokeWidth = 20 }: ArcGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0);

  // Animate score on mount/change
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 300);
    return () => clearTimeout(timer);
  }, [score]);

  // Calculate arc parameters
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  // Color based on score
  const getColor = (score: number): string => {
    if (score >= 90) return '#10b981'; // Green
    if (score >= 70) return '#D1A65E'; // Gold
    if (score >= 50) return '#f59e0b'; // Orange
    return '#A32E3A'; // Red
  };

  const color = getColor(score);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background arc */}
        <path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />

        {/* Animated foreground arc */}
        <motion.path
          d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{
            duration: 1.5,
            ease: 'easeOut',
          }}
        />
      </svg>

      {/* Score text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <div
            style={{
              fontFamily: 'Playfair Display',
              fontSize: `${size * 0.25}px`,
              fontWeight: 'bold',
              color: color,
            }}
          >
            {Math.round(animatedScore)}
          </div>
          <div className="text-gray-500 text-sm mt-1">/ 100</div>
        </motion.div>
      </div>
    </div>
  );
}
