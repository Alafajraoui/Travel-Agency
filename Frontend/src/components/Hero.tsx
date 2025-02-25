import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, X, Users, DollarSign, Star, Globe, Plane, Camera, Clock, Heart, Coffee, Utensils } from 'lucide-react';

interface Destination {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: number;
  description: string;
  details: {
    duration: string;
    groupSize: string;
    season: string;
    includes: string[];
    highlights: string[];
    itinerary: string[];
  };
}

const BookingConfirmationModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
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
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 max-w-md w-full"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Booking Request Received
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for your interest! Our team will contact you shortly to confirm your booking and discuss the details.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-xl"
              >
                Got it!
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DestinationModal = ({ destination, isOpen, onClose, selectedDate, travelers }) => {
  const [showBookingConfirmation, setShowBookingConfirmation] = useState(false);

  if (!destination) return null;

  const handleBooking = () => {
    setShowBookingConfirmation(true);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={onClose}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-gray-100 dark:hover:bg-gray-700 z-10"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>

              <div className="relative h-80">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-2 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{destination.title}</h2>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{destination.rating} rating</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                    <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {selectedDate || 'Flexible'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                    <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Travelers</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {travelers} {travelers === 1 ? 'person' : 'people'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl">
                    <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                      <p className="font-medium text-gray-900 dark:text-white">{destination.details.duration}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">About this trip</h3>
                  <p className="text-gray-600 dark:text-gray-300">{destination.description}</p>
                </div>

                {destination.details.highlights && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Highlights</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {destination.details.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {destination.details.includes && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What's Included</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {destination.details.includes.map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Price per person</p>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${destination.price}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleBooking}
                    className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-xl flex items-center space-x-2"
                  >
                    <span>Book This Trip</span>
                    <Plane className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingConfirmationModal
        isOpen={showBookingConfirmation}
        onClose={() => {
          setShowBookingConfirmation(false);
          onClose();
        }}
      />
    </>
  );
};

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [travelers, setTravelers] = useState(2);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/destinations');
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        console.error('Error fetching destinations:', err);
        setError('Failed to load destinations');
      }
    };

    fetchDestinations();
  }, []);

  const filteredDestinations = destinations.filter(dest => 
    dest.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    dest.price >= priceRange[0] &&
    dest.price <= priceRange[1]
  );

  const handleSearch = () => {
    if (searchQuery || selectedDate) {
      setShowResults(true);
    }
  };

  return (
    <div className="relative min-h-screen pt-16 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=2000"
          alt="Hero background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/80"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Explore the World
            </span>
            <span className="block">Your Way</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
            Discover breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative group">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <input
                  type="text"
                  placeholder="Where to?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all group-hover:shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="relative group">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-10 w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all group-hover:shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div className="relative group">
                <Users className="absolute left-3 top-3 h-5 w-5 text-blue-500" />
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="pl-10 w-full p-3 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all group-hover:shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Traveler{num !== 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
              >
                <Search className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                Search
              </motion.button>
            </div>

            <div className="mt-4 px-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price Range: ${priceRange[0]} - ${priceRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer dark:bg-blue-700"
              />
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 max-w-4xl mx-auto bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Search Results
                </h3>
                <button
                  onClick={() => setShowResults(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              
              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">Loading destinations...</p>
                </div>
              ) : error ? (
                <div className="p-8 text-center text-red-500">{error}</div>
              ) : filteredDestinations.length === 0 ? (
                <div className="p-8 text-center text-gray-600 dark:text-gray-400">
                  No destinations found matching your criteria
                </div>
              ) : (
                <div className="divide-y dark:divide-gray-700">
                  {filteredDestinations.map((dest, index) => (
                    <motion.div
                      key={dest.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 flex items-center space-x-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <img
                        src={dest.image}
                        alt={dest.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {dest.title}
                        </h4>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className="flex items-center text-gray-600 dark:text-gray-300">
                            <Calendar className="h-4 w-4 mr-1" />
                            {selectedDate || 'Flexible dates'}
                          </span>
                          <span className="flex items-center text-gray-600 dark:text-gray-300">
                            <Users className="h-4 w-4 mr-1" />
                            {travelers} {travelers === 1 ? 'traveler' : 'travelers'}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          ${dest.price}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedDestination(dest)}
                          className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg text-sm"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <DestinationModal
          destination={selectedDestination}
          isOpen={!!selectedDestination}
          onClose={() => setSelectedDestination(null)}
          selectedDate={selectedDate}
          travelers={travelers}
        />
      </div>
    </div>
  );
};

export default Hero;