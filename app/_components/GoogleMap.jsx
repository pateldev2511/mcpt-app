import React from 'react';

const GoogleMap = () => {
  return (
    <div className="bottom-0 left-0 right-0 h-[40vh] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12089.127553957587!2d-73.9804826!3d40.7558244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d944f4f3d3%3A0x6236dd7051403a10!2sMovement%20Care%20Physical%20Therapy!5e0!3m2!1sen!2sus!4v1720464633773!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;