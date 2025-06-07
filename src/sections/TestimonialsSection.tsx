import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Small Business Owner",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "FRD Studio transformed our customer service with their AI chatbot solution. Our response time improved dramatically, and our customers love the instant assistance.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      role: "Marketing Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "The website FRD Studio created for us perfectly captures our brand's aesthetic while being incredibly functional. Their attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Product Developer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
      quote: "Working with FRD Studio on our 3D product designs was a game-changer. They created precise models that helped us visualize our product before manufacturing.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[150px]"></div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-6">
            <span className="text-white">Client </span>
            <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Here's what our clients have to say about working with FRD Studio.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 shadow-xl"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-neon-purple p-1">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-gray-800 rounded-full px-2 py-1 border border-gray-700">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimonials[currentIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold">{testimonials[currentIndex].name}</h3>
                    <p className="text-neon-purple">{testimonials[currentIndex].role}</p>
                  </div>
                  
                  <blockquote className="relative">
                    <span className="text-5xl font-serif text-neon-purple/20 absolute -top-4 -left-2">"</span>
                    <p className="text-gray-300 italic relative z-10 pl-4">
                      {testimonials[currentIndex].quote}
                    </p>
                    <span className="text-5xl font-serif text-neon-purple/20 absolute -bottom-10 right-0">"</span>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={prevTestimonial}
              className="bg-gray-800 hover:bg-neon-purple/20 p-3 rounded-full border border-gray-700 hover:border-neon-purple transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="text-white" size={20} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'bg-neon-purple scale-125' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={nextTestimonial}
              className="bg-gray-800 hover:bg-neon-purple/20 p-3 rounded-full border border-gray-700 hover:border-neon-purple transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="text-white" size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;