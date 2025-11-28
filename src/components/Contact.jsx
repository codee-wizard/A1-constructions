import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from './ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#051020] relative">
  <div className="absolute inset-0 opacity-20"
    style={{
      backgroundImage:
        'linear-gradient(rgba(255, 199, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 199, 0, 0.05) 1px, transparent 1px)',
      backgroundSize: '50px 50px',
    }}
  />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16">

      {/* Heading / Info */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-[#FFCC66] font-semibold tracking-wider uppercase mb-4">
          Get in Touch
        </h3>

        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
          Start Your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] to-[#FF6D00]">
            Project
          </span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 max-w-lg">
          Ready to build something extraordinary? Contact us for consultations, quotes, or partnership opportunities.
        </p>

        {/* Contact Items */}
        <div className="space-y-8">
          {[
            {
              icon: <MapPin size={24} />,
              title: "Head Office",
              text: "123 Construction Avenue, Civil Lines, Meerut, Uttar Pradesh - 250001",
            },
            {
              icon: <Phone size={24} />,
              title: "Phone",
              text: "+91 98765 43210 | +91 12345 67890",
            },
            {
              icon: <Mail size={24} />,
              title: "Email",
              text: "info@a1constructions.com | projects@a1constructions.com",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FF6D00]/20 flex items-center justify-center shrink-0 text-[#FFD700]">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-md border border-[#FFD700]/20 bg-white/5 shadow-[0_0_40px_rgba(255,200,0,0.08)] rounded-2xl p-8 md:p-10"
      >
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#FFCC66]">First Name</label>
              <input
                type="text"
                className="w-full bg-[#020817]/60 border border-[#FFD700]/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#FFCC66]">Last Name</label>
              <input
                type="text"
                className="w-full bg-[#020817]/60 border border-[#FFD700]/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#FFCC66]">Email Address</label>
            <input
              type="email"
              className="w-full bg-[#020817]/60 border border-[#FFD700]/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#FFCC66]">Project Type</label>
            <select className="w-full bg-[#020817]/60 border border-[#FFD700]/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors [&>option]:text-black">
              <option>Government Infrastructure</option>
              <option>Commercial Construction</option>
              <option>Residential Project</option>
              <option>Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#FFCC66]">Message</label>
            <textarea
              rows="4"
              className="w-full bg-[#020817]/60 border border-[#FFD700]/15 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFD700] transition-colors"
              placeholder="Tell us about your project..."
            />
          </div>

          <Button
            variant="outline"
            className="w-full justify-center border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition"
            icon={Send}
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  </div>
</section>

  );
};

export default Contact;