import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Let's Plan Your
              <span className="block text-blue-600 dark:text-blue-400">Perfect Getaway</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our travel experts are ready to create your dream vacation. Reach out to us and start planning your next adventure.
            </p>
            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Call us at</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">+1 (555) 123-4567</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email us at</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">contact@wanderlust.com</p>
                </div>
              </motion.div>
              <div className="flex space-x-4 mt-8">
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Facebook className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Twitter className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5 }}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <Instagram className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />
                </motion.a>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="example "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Tell us about your dream vacation..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;