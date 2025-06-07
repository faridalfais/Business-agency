import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ZapIcon, TargetIcon, TrendingUpIcon } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const valueCards = [
    {
      icon: <ZapIcon className="h-8 w-8 text-neon-purple" />,
      title: "Fast Execution",
      description: "We believe in quick turnarounds without compromising on quality."
    },
    {
      icon: <TargetIcon className="h-8 w-8 text-neon-purple" />,
      title: "Affordable Solutions",
      description: "Premium quality digital solutions at prices that won't break your budget."
    },
    {
      icon: <TrendingUpIcon className="h-8 w-8 text-neon-purple" />,
      title: "Modern Approach",
      description: "We stay on top of trends to deliver contemporary, relevant solutions."
    }
  ];

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        delay: 0.1 * i
      }
    })
  };

  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 bg-gradient-to-b from-black to-gray-900"
      ref={ref}
    >
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-6">
            <span className="text-white">About </span>
            <span className="gradient-text">FRD Studio</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We're a junior creative micro agency with a passion for building digital experiences 
            that resonate with today's audience. Our approach combines affordability with 
            contemporary design and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            style={{ y }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-300 mb-4">
                FRD Studio is a team of young, passionate creators specializing in modern digital solutions. 
                We bring fresh perspectives and innovative approaches to every project we undertake.
              </p>
              <p className="text-gray-300 mb-4">
                Our journey began with a simple vision: to make high-quality digital services accessible to 
                businesses of all sizes. We understand the challenges of the modern market and are committed 
                to helping you navigate the digital landscape effectively.
              </p>
              <p className="text-gray-300">
                With our blend of technical expertise and creative flair, we transform ideas into impactful 
                digital experiences that drive engagement and results.
              </p>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-neon-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {valueCards.map((card, i) => (
              <motion.div
                key={i}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-neon-purple/50 transition-all duration-300"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-3 rounded-lg">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-gray-300">{card.description}</p>
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

export default AboutSection;