import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes, from startups and small businesses to medium-sized enterprises. We specialize in helping businesses that want to establish or enhance their digital presence with modern, effective solutions."
    },
    {
      question: "How long does it take to develop an AI chatbot?",
      answer: "The timeline for developing an AI chatbot varies depending on complexity. A basic chatbot can be deployed in 2-3 weeks, while more sophisticated solutions with custom integrations may take 4-6 weeks. We'll provide a specific timeline based on your project requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages to ensure your digital solutions continue to function optimally. These range from basic maintenance to comprehensive support with regular updates and improvements. We'll work with you to determine the right level of support for your needs."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer competitive, transparent pricing based on project scope and requirements. For most services, we provide fixed-price quotes after understanding your needs. We're committed to delivering high-quality solutions at accessible prices, especially for small businesses and startups."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in creating solutions that integrate seamlessly with your existing digital infrastructure. Whether it's connecting an AI chatbot with your CRM or ensuring your website works with your current tools, we'll make sure everything works together smoothly."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-6">
            <span className="text-white">Frequently </span>
            <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Have questions? We've got answers. If you don't see what you're looking for, feel free to contact us directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-neon-purple/20 border-neon-purple' 
                    : 'bg-gray-800/50 hover:bg-gray-800 border-gray-700'
                } border`}
              >
                <span className="font-medium text-lg pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={activeIndex === index ? 'text-neon-purple' : 'text-white'} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-800/30 border border-gray-700 border-t-0 rounded-b-xl">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;