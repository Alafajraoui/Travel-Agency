import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Globe, Award, MapPin, Calendar, Briefcase, GraduationCap, Target, Coffee } from 'lucide-react';

const teamMembers = [
  {
    name: 'Oumayma Smida',
    role: 'Founder & CEO',
    image: 'https://scontent.ftun10-2.fna.fbcdn.net/v/t39.30808-1/458715991_3845413059049202_1643199267748953818_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_ohc=rddJdHwFDYYQ7kNvgE4dCbt&_nc_oc=AdgZCfTjUlxKXnAtMG8s_1d83pRP4eOUBqvm6IBnYSPQEn1iKj1RegRLwukJYFil-so&_nc_zt=24&_nc_ht=scontent.ftun10-2.fna&_nc_gid=AvcHB0oWBYznrRu-nI3MjIi&oh=00_AYCVa98ClMzmK-vHvkXoYNym_ynrX44HF-BRefxk4LgnLA&oe=67BA434E',
    bio: 'Travel enthusiast with 15+ years of experience in crafting unforgettable journeys.',
  },
  {
    name: 'Fekher Smida',
    role: 'Head of Operations',
    image: 'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-1/339328203_136247162749346_5309574259116830611_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=G4M8PNrWZVgQ7kNvgEFp77x&_nc_oc=AdjsDREhIqDeEYBeuyMyO8vjkEDXSXrGYFRMNnqXzYW0zlz32J-QwkuEzxu1Ge4hJWc&_nc_zt=24&_nc_ht=scontent.ftun10-1.fna&_nc_gid=Ab-NKaGyYPW5LwXNl9xYvVX&oh=00_AYC9ZVdEkHRPZoxEzZAXP7jcts6tg5zi70jRNPIT3XtWEw&oe=67BA4092',
    bio: 'Expert in creating seamless travel experiences and managing global partnerships.',
  },
  {
    name: 'Wifek Smida',
    role: 'Travel Curator',
    image: 'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-1/476287528_1610077833214373_4843688738839853458_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=e99d92&_nc_ohc=N1vb_YDeDqsQ7kNvgHYj8vD&_nc_oc=AdgpzYRqI2cqauVZnYwaEoB4o6gcLWvSCSEqCLxUKyjZUg5BCfIjCeS8fSqt41H8HRU&_nc_zt=24&_nc_ht=scontent.ftun10-1.fna&_nc_gid=AWyFOb2PkdN0cRc8cuStzUK&oh=00_AYA5tDj8rz6cfLNSXht2C4AidZy_Iszr3MFSOn-8DjvOZw&oe=67BA4E66',
    bio: 'Passionate about discovering hidden gems and authentic local experiences.',
  }
];

const companyValues = [
  {
    icon: <Heart className="h-8 w-8 text-rose-500" />,
    title: 'Passion for Travel',
    description: 'We live and breathe travel, bringing enthusiasm to every journey we plan.'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: 'Customer First',
    description: 'Your dreams and preferences are at the heart of everything we do.'
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: 'Sustainable Tourism',
    description: 'Committed to responsible travel that benefits local communities.'
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: 'Excellence',
    description: 'Delivering exceptional experiences through attention to detail.'
  }
];

const timeline = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a dream to revolutionize travel experiences',
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    year: '2017',
    title: 'Global Expansion',
    description: 'Opened offices in major cities worldwide',
    icon: <Globe className="h-6 w-6" />
  },
  {
    year: '2019',
    title: 'Sustainability Initiative',
    description: 'Launched eco-friendly travel programs',
    icon: <Target className="h-6 w-6" />
  },
  {
    year: '2022',
    title: 'Digital Innovation',
    description: 'Introduced AI-powered travel planning',
    icon: <GraduationCap className="h-6 w-6" />
  }
];

const AboutUs = () => {
  return (
    <div className="pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000"
            alt="Travel Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Creating unforgettable journeys and connecting people through travel since 2015
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide every journey we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Passionate experts dedicated to creating your perfect travel experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="relative group"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The milestones that shaped who we are today
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200 dark:bg-blue-900" />
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="absolute w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full" />
                    <div className="relative z-10 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  <div className="w-1/2 pl-8" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="h-8 w-8" />, number: '50+', label: 'Countries' },
              { icon: <Users className="h-8 w-8" />, number: '10,000+', label: 'Happy Travelers' },
              { icon: <MapPin className="h-8 w-8" />, number: '200+', label: 'Destinations' },
              { icon: <Calendar className="h-8 w-8" />, number: '8+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;