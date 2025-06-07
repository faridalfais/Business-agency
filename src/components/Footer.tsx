import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-2xl font-bold">
                <span className="text-neon-purple">FRD</span>
                <span className="text-white"> Studio</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              A creative micro agency specializing in AI chatbots, 3D design, and front-end development. 
              We craft digital experiences that blend cutting-edge design with innovative technology.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2.5 rounded-full hover:bg-neon-purple/20 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"></path>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2.5 rounded-full hover:bg-neon-purple/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2.5 rounded-full hover:bg-neon-purple/20 transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">
                  AI Chatbot Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">
                  Customer Service Automation
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">
                  3D Design & Modeling
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">
                  Technical Design (Inventor)
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-neon-purple transition-colors">
                  Front-End Development
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-neon-purple transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-gray-400 hover:text-neon-purple transition-colors">
                  Our Journey
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-neon-purple transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-neon-purple transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-neon-purple transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="text-neon-purple h-5 w-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">WhatsApp</span>
                  <a 
                    href="https://wa.me/083823795561" 
                    className="text-gray-400 hover:text-neon-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 3823795561
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-neon-purple h-5 w-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Email</span>
                  <a 
                    href="mailto:hello@frdstudio.com" 
                    className="text-gray-400 hover:text-neon-purple transition-colors"
                  >
                    Faridstudio@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-neon-purple h-5 w-5 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Location</span>
                  <span className="text-gray-400">Tangerang city, indonesia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} FRD Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;