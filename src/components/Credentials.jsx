import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Award, BadgeCheck } from 'lucide-react';

const Credentials = () => {
  const credentials = [
    { title: 'PWD Class "A" Contractor', issuer: 'Govt. of Uttar Pradesh', icon: Award },
    { title: 'GST Registered', issuer: 'UP & Uttarakhand', icon: FileCheck },
    { title: 'UDYAM Registration', issuer: 'MSME', icon: BadgeCheck },
    { title: 'Labour Dept License', issuer: 'Govt. of India', icon: ShieldCheck },
    { title: 'PAN Registered', issuer: 'Income Tax Dept', icon: FileCheck },
  ];

  return (
    <section id="credentials" className="py-24 relative overflow-hidden bg-[#020817]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FFB547] font-semibold tracking-wider uppercase mb-4">
            Accreditations
          </h3>
          
          {/* Gradient Title */}
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-transparent bg-clip-text bg-gradient-to-b from-[#FFD700] via-[#FF9F45] to-[#FF6D00]">
            Certified Excellence
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              /* Updated Theme + Hover Border Disappear */
              className="
  backdrop-blur-md border border-gray-600
  bg-gradient-to-br from-[#051020] via-[#0A1528]/90 to-[#051020]
  shadow-lg rounded-2xl p-6
  transition-all duration-300 group

  hover:border-[#FF8C42]/40
  hover:shadow-[0_0_25px_rgba(255,140,66,0.25)]
  hover:bg-gradient-to-br hover:from-[#051020] hover:via-[#0A1528] hover:to-[#FF6D00]/25
"

            >
              
              {/* Icon Bubble */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFD700]/40 via-[#FF8C42]/50 to-[#FF6D00] text-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <cred.icon size={32} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {cred.title}
              </h3>

              <p className="text-sm text-gray-300">
                {cred.issuer}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
