import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, Plus, Lock, X, CheckCircle2, AlertCircle } from 'lucide-react';

const paymentMethods = [
  {
    id: 1,
    type: 'Visa',
    last4: '4242',
    expiry: '12/25',
    name: 'John Doe',
    isDefault: true
  },
  {
    id: 2,
    type: 'Mastercard',
    last4: '8888',
    expiry: '09/24',
    name: 'John Doe',
    isDefault: false
  }
];

const PaymentMethods = () => {
  const [showAddCard, setShowAddCard] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Payment Methods</h2>
        <p className="text-gray-600 dark:text-gray-400">Manage your payment options securely</p>
      </div>

      {/* Security Notice */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8"
      >
        <div className="flex items-center">
          <Lock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <p className="ml-3 text-sm text-blue-700 dark:text-blue-300">
            Your payment information is encrypted and stored securely
          </p>
        </div>
      </motion.div>

      {/* Payment Methods List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {paymentMethods.map((method, index) => (
          <motion.div
            key={method.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-4">
                <CreditCard className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {method.type} ending in {method.last4}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Expires {method.expiry}
                  </p>
                </div>
              </div>
              {method.isDefault && (
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm rounded-full">
                  Default
                </span>
              )}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {method.name}
              </p>
              <div className="flex space-x-2">
                {!method.isDefault && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                  >
                    Set as Default
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  Remove
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Add New Card Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowAddCard(true)}
          className="h-full min-h-[200px] border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
        >
          <div className="text-center">
            <Plus className="h-8 w-8 mx-auto text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400" />
            <span className="mt-2 block text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400">
              Add New Card
            </span>
          </div>
        </motion.button>
      </div>

      {/* Add New Card Modal */}
      <AnimatePresence>
        {showAddCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add New Card
                </h3>
                <button
                  onClick={() => setShowAddCard(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="defaultCard"
                    className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="defaultCard"
                    className="ml-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    Set as default payment method
                  </label>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowAddCard(false)}
                    className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg"
                  >
                    Add Card
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PaymentMethods;