import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
  const team = [
    { name: 'Mr. Ankur Kumar', role: 'Proprietor', image: '/ankur.jpeg' },
    { name: 'Mr. Anshul', role: 'Project & Operations Lead', image: '/anshul.jpeg' },
    { name: 'Mr. Mayank', role: 'Site Operations', image: '/mayank.jpeg' },
    { name: 'Mr. Tushar', role: 'Labour & Quality Supervisor', image: '/tushar.jpeg' },
    { name: 'Mr. Nishant Singhal', role: 'Finance & Legal Advisor', image: '/nishant.jpeg' },
  ];

  return (
    <section id="team" className="py-24 bg-[#051020] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#FFD700] font-semibold tracking-wider uppercase mb-4">
            Leadership
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF6D00]">
            Meet Our <span>Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The dedicated professionals behind our success, driving excellence in every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-md border border-gray-500 hover:border-transparent bg-gradient-to-br from-[#051020] via-[#051020]/90 to-[#051020] shadow-lg rounded-2xl transition-all duration-300 hover:from-[#FFD700]/20 hover:to-[#FF6D00]/20 overflow-hidden group"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051020] to-transparent opacity-70"></div>

                {/* Social Actions */}
                {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="p-2 rounded-full bg-white/10 hover:bg-[#FFD700] text-white transition-colors backdrop-blur-md">
                    <Linkedin size={16} />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-[#FFD700] text-white transition-colors backdrop-blur-md">
                    <Mail size={16} />
                  </button>
                </div> */}
              </div>

              {/* Member Info */}
              <div className="p-6 text-center relative z-10">
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#FFD700] text-sm font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
