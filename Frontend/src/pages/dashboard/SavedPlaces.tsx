import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Star, Calendar, Users, ArrowRight, Trash2 } from 'lucide-react';

const savedPlaces = [
  {
    id: 1,
    name: 'Maldives Overwater Villa',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800',
    location: 'Maldives',
    rating: 4.9,
    price: '$1,599/night',
    savedDate: '2024-02-15',
    availability: 'Available for Summer 2024',
    description: 'Luxurious overwater villa with direct ocean access and stunning sunset views.'
  },
  {
    id: 2,
    name: 'Amalfi Coast Villa',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=800',
    location: 'Italy',
    rating: 4.8,
    price: '$899/night',
    savedDate: '2024-02-10',
    availability: 'Limited availability',
    description: 'Spectacular villa overlooking the Mediterranean with private pool and garden.'
  },
  {
    id: 3,
    name: 'Swiss Alpine Chalet',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800',
    location: 'Switzerland',
    rating: 4.7,
    price: '$699/night',
    savedDate: '2024-02-05',
    availability: 'Perfect for Winter 2024',
    description: 'Cozy mountain retreat with stunning views of the Alps and ski-in/ski-out access.'
  }
];

const SavedPlaces = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Saved Places</h2>
        <p className="text-gray-600 dark:text-gray-400">Your collection of dream destinations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedPlaces.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
          >
            <div className="relative">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-red-500 hover:bg-red-50"
                >
                  <Heart className="h-5 w-5 fill-current" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-50"
                >
                  <Trash2 className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {place.name}
                </h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                    {place.rating}
                  </span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{place.location}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {place.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  {place.price}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {place.availability}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Saved on {place.savedDate}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400"
                >
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SavedPlaces;