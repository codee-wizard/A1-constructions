import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Building } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Building, label: 'Projects Delivered', value: '200+' },
    { icon: Users, label: 'Expert Team', value: '50+' },
    { icon: Award, label: 'Years Experience', value: '12+' },
    { icon: CheckCircle, label: 'Class-A Certified', value: 'Yes' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-semibold tracking-wider uppercase mb-4 
              bg-clip-text text-transparent bg-gradient-to-r from-[#FFD55A] to-[#FF9F43]">
              About A1 Constructions
            </h3>

            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 
              bg-clip-text text-transparent bg-gradient-to-r from-[#FFE27A] via-[#FFB647] to-[#FF8A33]">
              Engineering the Future of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFE27A] via-[#FFB647] to-[#FF8A33]">
                Infrastructure
              </span>
            </h2>

            <p className="text-blue-900 text-lg leading-relaxed mb-6">
              Founded with a vision to transform the landscape of civil construction in India, 
              A1 Constructions has emerged as a trusted partner for government and large-scale 
              infrastructure projects.
            </p>

            <p className="text-blue-900 text-lg leading-relaxed mb-8">
              We combine cutting-edge technology with traditional engineering excellence to 
              deliver projects that stand the test of time.
            </p>

            <div className="pl-4 border-l-4 border-[var(--color-accent)]">
              <p className="text-white font-bold text-xl">Mission</p>
             <p className="text-blue-900">To build sustainable infrastructure with uncompromising quality.</p>

            </div>
          </motion.div>

          {/* Right Column: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-md border border-white/10 bg-white/5 
                shadow-xl rounded-2xl transition-all duration-300 hover:bg-white/10 
                hover:border-white/20 p-6 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB84D]/30 to-[#FF7A1A]/30 
                  flex items-center justify-center mb-4 
                  text-[#FF9F43] group-hover:scale-110 transition-transform">
                  <stat.icon size={50} />
                </div>

                <h4 className="text-3xl font-bold bg-clip-text text-transparent 
                  bg-gradient-to-r from-[#FFDE59] to-[#FF9F43] mb-1">
                  {stat.value}
                </h4>

                <p className="text-sm text-blue-900">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
