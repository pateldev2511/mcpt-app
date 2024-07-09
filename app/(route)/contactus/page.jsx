import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className=" dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl mb-6">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-white">Hours of Operation</h3>
              <p className="text-gray-600 dark:text-gray-300">Mon-Fri: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-600 dark:text-gray-300">Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-gray-600 dark:text-gray-300">Sun: <span className='text-red-500'>Closed</span></p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-6 w-6 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-white">Contact Email</h3>
              <p className="text-gray-600 dark:text-gray-300">movementcarept@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-white">Contact Phone</h3>
              <p className="text-gray-600 dark:text-gray-300">+1 (201) 561-2688</p>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="h-6 w-6 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">19 W 45th St, STE 501</p>
              <p className="text-gray-600 dark:text-gray-300">New York, NY 10036</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;