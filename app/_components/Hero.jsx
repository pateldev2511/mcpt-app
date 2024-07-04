import { Button } from '@/components/ui/button';
import React from 'react';

function Hero() {
  return (
    <section
      className="relative bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Find & Book 
            <strong className="block font-bold text-primary"> Appointment With Us. </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl font-extralight">
          Experience personalized care and effective treatments. Schedule your session today for a healthier tomorrow.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button
              href="#"
              className="w-full rounded bg-primary px-12 text-sm font-medium text-white shadow hover:bg-secondary focus:outline-none focus:ring sm:w-auto"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;