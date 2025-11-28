import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#051020] via-[#051020]/90 to-[#051020]"></div>
        {/* Abstract Grid/Blueprint Pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}>
        </div>

        {/* Animated Glow Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full blur-[128px] opacity-30"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[var(--color-accent-orange)] rounded-full blur-[100px] opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[var(--color-primary-light)] font-semibold tracking-wider uppercase mb-4">
              Civil Construction Excellence
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Building Trust. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF6D00]">Delivering Excellence.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Specializing in government infrastructure projects with a commitment to quality, integrity, and engineering precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" icon={ArrowRight}><a href='#projects'>Explore Our Work</a></Button>
              <Button variant="outline" icon={Phone}><a href='#contact'>Contact Us</a></Button>
            </div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8"
          >
            {[
              { label: 'Years Experience', value: '12+' },
              { label: 'Projects Delivered', value: '200+' },
              { label: 'Turnover (Lakh)', value: '₹782+' },
              { label: 'Class-A', value: 'Certified' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;