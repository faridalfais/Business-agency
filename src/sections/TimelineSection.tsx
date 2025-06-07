import React from 'react';
import { motion } from 'framer-motion';

const TimelineSection = () => {
  const timelineItems = [
    {
      year: "2022",
      title: "Foundations",
      description: "FRD Studio was born from a passion for creative technology and design. We began by building our skills and exploring the digital landscape."
    },
    {
      year: "2023",
      title: "Skill Expansion",
      description: "We expanded our expertise into AI chatbot development, 3D modeling, and front-end development, laying the groundwork for our core services."
    },
    {
      year: "2024",
      title: "First Client Projects",
      description: "We successfully delivered our first commercial projects, helping small businesses enhance their digital presence and customer engagement."
    },
    {
      year: "2025",
      title: "Growing Forward",
      description: "With established processes and growing expertise, we're expanding our capabilities and taking on more ambitious projects."
    }
  ];

  return (
    <section id="timeline" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From our beginnings to where we are today, see how our skills and expertise have evolved over time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-purple/80 via-blue-600/50 to-transparent -translate-x-1/2"
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Timeline items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className={`mb-16 md:mb-24 relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline connector to center line (visible only on md+) */}
                <div className="hidden md:block absolute top-8 w-12 h-0.5 bg-neon-purple/70 left-1/2 transform -translate-x-1/2"></div>
                
                {/* Year bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1 z-10">
                  <motion.div 
                    className="w-16 h-16 rounded-full bg-gray-800 border-2 border-neon-purple flex items-center justify-center shadow-lg shadow-neon-purple/20"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <span className="text-white font-bold">{item.year}</span>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className={`mt-20 md:mt-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-bold mb-2 text-neon-purple">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;