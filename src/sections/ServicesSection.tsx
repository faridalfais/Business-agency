import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Cuboid as Cube, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "AI Chatbot & Customer Service",
      description: "Automated WhatsApp and web-based customer service solutions powered by AI to handle inquiries, provide information, and engage with your customers 24/7.",
      features: ["WhatsApp Integration", "Web Embedding", "Custom Responses", "Analytics Dashboard"]
    },
    {
      icon: <Cube className="h-12 w-12" />,
      title: "3D Print & Technical Design",
      description: "Professional 3D modeling and technical design services using Inventor for prototyping, product visualization, and manufacturing-ready designs.",
      features: ["Inventor Modeling", "3D Printing Prep", "Technical Drawings", "Prototype Development"]
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Front-End \"Vibe Code\"",
      description: "Aesthetically pleasing, responsive web interfaces built with modern frameworks and AI integration capabilities for a contemporary digital presence.",
      features: ["Responsive Design", "AI-Ready Integration", "Modern Frameworks", "Aesthetic UI/UX"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-6">
            <span className="text-white">Our </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer a range of specialized services designed to elevate your digital presence
            and streamline your operations with modern technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-neon-purple/50 transition-all duration-500 group"
              variants={itemVariants}
            >
              <div className="mb-6 bg-gray-800 p-4 rounded-xl inline-block group-hover:bg-neon-purple/20 transition-colors duration-300">
                <motion.div
                  whileHover={{ 
                    rotate: [0, 10, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="text-neon-purple"
                >
                  {service.icon}
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon-purple mr-2"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;