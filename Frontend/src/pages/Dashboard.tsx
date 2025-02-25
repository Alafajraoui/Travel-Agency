import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, CreditCard, Settings, LogOut } from 'lucide-react';
import MyBookings from './dashboard/MyBookings';
import SavedPlaces from './dashboard/SavedPlaces';
import PaymentMethods from './dashboard/PaymentMethods';
import UserSettings from './dashboard/Settings';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : { name: 'Guest', email: '' };

  const renderContent = () => {
    switch (activeTab) {
      case 'bookings':
        return <MyBookings />;
      case 'saved':
        return <SavedPlaces />;
      case 'payments':
        return <PaymentMethods />;
      case 'settings':
        return <UserSettings />;
      default:
        return (
          <div className="p-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, {user.name}!
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your bookings and preferences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Your Next Adventure
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  No upcoming trips. Start planning your next journey!
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg"
                >
                  Browse Packages
                </motion.button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Travel Stats
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Places Visited</span>
                    <span className="font-semibold text-gray-900 dark:text-white">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Trips</span>
                    <span className="font-semibold text-gray-900 dark:text-white">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Reviews</span>
                    <span className="font-semibold text-gray-900 dark:text-white">0</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  {user.profileImage ? (
                    <img
                      src={user.profileImage}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                      <User className="h-12 w-12 text-white" />
                    </div>
                  )}
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {user.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              </div>

              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'dashboard'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab('bookings')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'bookings'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Calendar className="h-5 w-5" />
                  <span>My Bookings</span>
                </button>
                <button
                  onClick={() => setActiveTab('saved')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'saved'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <MapPin className="h-5 w-5" />
                  <span>Saved Places</span>
                </button>
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'payments'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Payment Methods</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;