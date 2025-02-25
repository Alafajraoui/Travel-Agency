import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Bell, Globe, Moon, Sun, Camera } from 'lucide-react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';

const Settings = () => {
  const [isDark, setIsDark] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    offers: false,
    updates: true
  });
  const [profileImage, setProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const handleImageUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, `profile-images/${user.id}/${file.name}`);
      
      // Upload the file
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      // Update the user profile in the backend
      const response = await fetch(`http://localhost:5000/api/users/${user.id}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ profileImage: downloadURL })
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      
      // Update local storage with new user data
      localStorage.setItem('user', JSON.stringify({
        ...user,
        profileImage: downloadURL
      }));

      // Update state
      setProfileImage(downloadURL);
      
      // Show success message
      alert('Profile image updated successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Settings</h2>
        <p className="text-gray-600 dark:text-gray-400">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Profile Information
            </h3>

            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                  {(profileImage || user?.profileImage) ? (
                    <img
                      src={profileImage || user.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-white" />
                  )}
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="absolute bottom-0 right-0 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                >
                  {uploading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent" />
                  ) : (
                    <Camera className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  )}
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              <div className="ml-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                  Profile Photo
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Update your profile picture
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="mt-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {uploading ? 'Uploading...' : 'Change Photo'}
                </motion.button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+216 123 456 789"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg"
              >
                Save Changes
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Password & Security
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg"
              >
                Update Password
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Preferences Section */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Preferences
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Notifications
                </h4>
                <div className="space-y-3">
                  {Object.entries(notifications).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="text-gray-600 dark:text-gray-300 capitalize">
                        {key} Notifications
                      </span>
                      <button
                        onClick={() =>
                          setNotifications({ ...notifications, [key]: !value })
                        }
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          value ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            value ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                  Language
                </h4>
                <select className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Connected Accounts
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#1DA1F2] rounded-full flex items-center justify-center">
                    <i className="text-white text-lg">X</i>
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Twitter</span>
                </div>
                <button className="text-blue-600 dark:text-blue-400 text-sm">Connect</button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#4267B2] rounded-full flex items-center justify-center">
                    <i className="text-white text-lg">f</i>
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Facebook</span>
                </div>
                <button className="text-blue-600 dark:text-blue-400 text-sm">Connect</button>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#E4405F] rounded-full flex items-center justify-center">
                    <i className="text-white text-lg">In</i>
                  </div>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">Instagram</span>
                </div>
                <button className="text-blue-600 dark:text-blue-400 text-sm">Connect</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;