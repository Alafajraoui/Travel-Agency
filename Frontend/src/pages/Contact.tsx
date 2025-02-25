import React from 'react';
import { motion } from 'framer-motion';
import ContactComponent from '../components/Contact';

const Contact = () => {
  return (
    <div className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're here to help plan your perfect journey. Reach out to us with any questions or travel dreams.
          </p>
        </div>
      </motion.div>
      <ContactComponent />
    </div>
  );
};

export default Contact;