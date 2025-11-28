import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    { title: 'PWD Infrastructure', location: 'Uttar Pradesh', category: 'Government', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop' },
    { title: 'DUDA Development', location: 'Multiple Districts', category: 'Urban', image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=1974&auto=format&fit=crop' },
    { title: 'Nagar Palika Complex', location: 'City Center', category: 'Civic', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop' },
    { title: 'MDA Housing', location: 'Meerut', category: 'Residential', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop' },
    { title: 'State Highways', location: 'Connecting Districts', category: 'Transport', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2070&auto=format&fit=crop' },
    { title: 'Public Parks', location: 'Green Zone', category: 'Landscape', image: 'https://images.unsplash.com/photo-1496664444929-8c75efb9546f?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-orange-400 font-semibold tracking-wider uppercase mb-4">
              Our Portfolio
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-[#FF6D00] via-[#FF8C42] to-[#FFA64D]">
              Featured{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6D00] via-[#FF8C42] to-[#FFA64D]">
                Projects
              </span>
            </h2>
          </div>
          <p className="text-blue-900 max-w-md text-right md:text-left">
            Showcasing our expertise across diverse sectors, from urban development to major infrastructure networks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-[#FF6D00]/30 border border-[#FF6D00]/30 text-xs font-semibold uppercase tracking-wider text-[#FF8C42] backdrop-blur-sm">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm hover:bg-white/20">
                      <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                  <div className="flex items-center gap-2 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <MapPin size={14} />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
