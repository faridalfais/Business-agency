import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, Mail } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center"
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-600/20 blur-[80px]" 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[80px]" 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="max-w-3xl"
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 text-neon-purple font-medium"
          >
            Welcome to
          </motion.div>
          
          <motion.h1
            className="heading-xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="text-white">We are </span>
            <span className="gradient-text">FRD Studio</span>
            <span className="text-white block mt-2">Creative Micro Agency</span>
          </motion.h1>
          
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Crafting digital experiences that blend cutting-edge design with innovative technology. 
            We're a young, vibrant team bringing fresh perspectives to your digital presence.
          </motion.p>
          
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:hello@frdstudio.com"
              className="btn btn-outline"
            >
              <Mail size={20} />
              Email Us
            </a>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a 
              href="#about" 
              className="text-white/70 hover:text-white inline-flex flex-col items-center transition-colors"
            >
              <span className="mb-2">Discover More</span>
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  transition: { repeat: Infinity, duration: 1.5 }
                }}
              >
                <ArrowRight className="transform rotate-90" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;