import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, Menu, X, Sun, Moon, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthModal from './auth/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const isDarkMode = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);

    // Check authentication status
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.theme = newDarkMode ? 'dark' : 'light';
  };

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packages' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center">
                <Plane className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                  Wanderlust
                </span>
              </Link>
            </motion.div>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex flex-1 items-center justify-center">
              <div className="flex space-x-8">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors ${
                        isActive(link.path) ? 'text-blue-600 dark:text-blue-400' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-4"
                >
                  <Link to="/dashboard">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl hover:shadow-lg transition-shadow"
                    >
                      Dashboard
                    </motion.button>
                  </Link>
                  <motion.button
                    onClick={handleLogout}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 font-medium"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-4"
                >
                  <motion.button
                    onClick={() => openAuthModal('login')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  >
                    Sign In
                  </motion.button>
                  <motion.button
                    onClick={() => openAuthModal('signup')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl hover:shadow-lg transition-shadow"
                  >
                    Sign Up
                  </motion.button>
                </motion.div>
              )}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </motion.button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-16 inset-x-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium ${
                      isActive(link.path) ? 'text-blue-600 dark:text-blue-400' : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                {isAuthenticated ? (
                  <div className="space-y-2">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl hover:shadow-lg transition-shadow text-center"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl"
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        openAuthModal('login');
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => {
                        openAuthModal('signup');
                        setIsOpen(false);
                      }}
                      className="block w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-xl hover:shadow-lg transition-shadow"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default Navbar;