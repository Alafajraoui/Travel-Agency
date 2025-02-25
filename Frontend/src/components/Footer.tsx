import React from 'react';
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Wanderlust</span>
            </div>
            <p className="mt-4 text-gray-400">
              Making your travel dreams come true, one destination at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Destinations', 'Packages', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {['FAQs', 'Privacy Policy', 'Terms of Service', 'Customer Support'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 p-2 rounded-l-lg focus:outline-none text-gray-900 dark:text-white dark:bg-gray-800 dark:border-gray-700 dark:focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; 2024 Wanderlust. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;