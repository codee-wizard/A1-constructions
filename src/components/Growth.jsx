import React, { useState } from 'react';
import { Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const growthData = [
  { year: '2021–22', value: 75.72 },
  { year: '2022–23', value: 213.53 },
  { year: '2023–24', value: 782.73 },
  { year: '2024–25', value: 1000, isTarget: true },
];

const GlowingDot = (props) => {
  const { cx, cy, index, value } = props;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.g
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer"
    >
      {/* Outer Ring / Glow */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={12}
        fill="rgba(255, 215, 0, 0.2)" // Soft golden glow
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      />
      {/* Inner Dot */}
      <motion.circle
        cx={cx}
        cy={cy}
        r={6}
        fill="#FFD700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        whileHover={{ scale: 1.5 }}
      />
      {/* Hover Line */}
      <AnimatePresence>
        {hovered && (
          <motion.line
            x1={cx}
            y1={cy}
            x2={cx}
            y2={props.chartHeight - 20} // adjust if needed
            stroke="rgba(255, 215, 0, 0.5)"
            strokeWidth={2}
            strokeDasharray="4 4"
            initial={{ opacity: 0}}
            animate={{ opacity: 0}}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.g>
  );
};


const Growth = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 bg-[#020817]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono mb-4">
              <Activity size={14} />
              <span>LIVE METRICS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">
              Financial{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6D00]">
                Growth
              </span>
            </h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-white font-mono">
              ₹1000+ <span className="text-sm text-gray-400">Lakh</span>
            </div>
            <div className="text-orange-400 text-sm font-mono">TARGET 2024-25</div>
          </div>
        </div>

        {/* Recharts Graph */}
        <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] bg-[#051020]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl group">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={growthData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="rgba(255,255,255,0.05)" />
              <XAxis
                dataKey="year"
                tick={{ fill: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(5,16,32,0.9)',
                  border: '1px solid rgba(255,165,0,0.3)',
                  fontFamily: 'monospace',
                }}
                itemStyle={{ color: '#FFD700' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FFD700"
                strokeWidth={2}
                dot={(props) => <GlowingDot {...props} chartHeight={200} />} // chartHeight can match container
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default Growth;
