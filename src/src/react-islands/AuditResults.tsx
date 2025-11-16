import React from 'react';
import { DSCard } from '@/react-components/ui/DSCard';
import { DSBadge } from '@/react-components/ui/DSBadge';
import { motion } from 'motion/react';

/**
 * AuditResults Island
 * Migration: React Legacy → React Clean (pré-Astro)
 * Status: ✅ MIGRATED - Audit results display with animations
 * 
 * Features:
 * - Display detailed audit results
 * - Animated cards with stagger effect
 * - Color-coded badges for scores
 * - Recommendations list
 * 
 * Will be used in Astro with: <AuditResults client:load results={data} />
 */

interface AuditMetric {
  name: string;
  score: number;
  status: 'good' | 'medium' | 'poor';
  description: string;
}

interface AuditResultsProps {
  results: {
    performance: AuditMetric;
    seo: AuditMetric;
    accessibility: AuditMetric;
    bestPractices: AuditMetric;
    recommendations: string[];
  };
}

// ===== INLINE SVG ICONS =====

const CheckCircle2Icon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

const AlertCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const XCircleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

export function AuditResults({ results }: AuditResultsProps) {
  const metrics = [
    { key: 'performance', label: 'Performance', data: results.performance },
    { key: 'seo', label: 'SEO', data: results.seo },
    { key: 'accessibility', label: 'Accessibilité', data: results.accessibility },
    { key: 'bestPractices', label: 'Bonnes pratiques', data: results.bestPractices },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'success';
      case 'medium':
        return 'warning';
      case 'poor':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle2Icon className="w-5 h-5 text-[#10b981]" />;
      case 'medium':
        return <AlertCircleIcon className="w-5 h-5 text-[#f59e0b]" />;
      case 'poor':
        return <XCircleIcon className="w-5 h-5 text-[#A32E3A]" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <DSCard variant="bordered" hover={true}>
              <DSCard.Header>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(metric.data.status)}
                    <h3 className="text-[#1A1A1A]">{metric.label}</h3>
                  </div>
                  <DSBadge 
                    variant={getStatusColor(metric.data.status) as any}
                    size="lg"
                  >
                    {metric.data.score}
                  </DSBadge>
                </div>
              </DSCard.Header>
              <DSCard.Body>
                <p className="text-gray-600 text-sm">
                  {metric.data.description}
                </p>
              </DSCard.Body>
            </DSCard>
          </motion.div>
        ))}
      </div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <DSCard variant="accent">
          <DSCard.Header>
            <h3 className="text-[#1A1A1A]" style={{ fontFamily: 'Playfair Display' }}>
              Nos recommandations prioritaires
            </h3>
          </DSCard.Header>
          <DSCard.Body>
            <ul className="space-y-3">
              {results.recommendations.map((recommendation, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2Icon className="w-5 h-5 text-[#10b981] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{recommendation}</span>
                </motion.li>
              ))}
            </ul>
          </DSCard.Body>
        </DSCard>
      </motion.div>
    </div>
  );
}
