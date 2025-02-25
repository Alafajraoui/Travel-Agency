import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, DollarSign, Plane, X, AlertCircle } from 'lucide-react';

const bookings = [
  {
    id: 1,
    destination: 'Santorini, Greece',
    image: 'https://res.cloudinary.com/enchanting/q_70,f_auto,w_600,h_400,c_fit/ymt-web/2023/01/600x400-Santorini20Greece20Sunset.jpg',
    startDate: '2024-04-15',
    endDate: '2024-04-22',
    status: 'upcoming',
    price: '$1,299',
    confirmationNumber: 'BK-2024-001',
    activities: ['Sunset Cruise', 'Wine Tasting', 'Photography Tour']
  },
  {
    id: 2,
    destination: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800',
    startDate: '2024-03-10',
    endDate: '2024-03-17',
    status: 'completed',
    price: '$899',
    confirmationNumber: 'BK-2024-002',
    activities: ['Temple Visit', 'Cooking Class', 'Spa Day']
  }
];

const MyBookings = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">My Bookings</h2>
        <p className="text-gray-600 dark:text-gray-400">Manage your upcoming and past travel experiences</p>
      </div>

      {/* Upcoming Alert */}
      {bookings.some(booking => booking.status === 'upcoming') && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6"
        >
          <div className="flex items-start">
            <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Upcoming Trip Alert
              </h3>
              <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                You have an upcoming trip to Santorini! Make sure to check your travel documents.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Bookings Grid */}
      <div className="grid grid-cols-1 gap-6">
        {bookings.map((booking, index) => (
          <motion.div
            key={booking.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full md:w-48 object-cover"
                  src={booking.image}
                  alt={booking.destination}
                />
              </div>
              <div className="p-6 w-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {booking.destination}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Confirmation: {booking.confirmationNumber}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'upcoming'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{booking.startDate} - {booking.endDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span>{booking.price}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Included Activities:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {booking.activities.map((activity) => (
                      <span
                        key={activity}
                        className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-4">
                  {booking.status === 'upcoming' && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        Cancel Booking
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg"
                      >
                        Modify Booking
                      </motion.button>
                    </>
                  )}
                  {booking.status === 'completed' && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg"
                    >
                      Leave Review
                    </motion.button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;