import { MapPin } from 'lucide-react';
import React from 'react';

const locations = [
  {
    title: 'Upper East Side',
    address: '210 E 73rd St, #1C, New York, NY 10021',
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.127553957587!2d-73.9804826!3d40.7558244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d944f4f3d3%3A0x6236dd7051403a10!2sMovement%20Care%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1720464633773!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    title: 'Midtown',
    address: '19 W 45th St, STE 501, New York, NY 10036',
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.272574895511!2d-73.98290592292861!3d40.75602927138709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258ffb5957ca3%3A0x9e8bbc9706bd8a5b!2s19%20W%2045th%20St%20STE%20501%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1720465029887!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
  {
    title: 'SOHO',
    address: '457 Broome St, New York, NY 10013',
    iframe: (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8116625505595!2d-74.00364422292968!3d40.72216237139216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598be42232cf%3A0xc48e5fbf40bc9e4a!2s457%20Broome%20St%2C%20New%20York%2C%20NY%2010013!5e0!3m2!1sen!2sus!4v1720465092428!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    ),
  },
];

const OurLocations = () => {
  return (
    <div className="py-8">
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-950">Movement Care Physical Therapy Locations</h1>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {locations.map((location, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-2">{location.title}</h2>
            <p className="flex items-center text-xl font-semibold text-secondary mb-4">
                <span>
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                </span>
                {location.address}
                </p>
            <div className="overflow-hidden rounded-xl shadow-lg">
              {location.iframe}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocations;