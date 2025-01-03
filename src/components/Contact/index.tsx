import React from "react";
import { Mail, Clock, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-neutral-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Venue Information */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <MapPin className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-xl font-bold text-white">Concert Venue</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Chiesa Santa Maria degli Angeli
              <br />
              Piazza Sant&apos;Angelo 2<br />
              20121 Milan, Italy
            </p>
          </div>

          {/* Schedule Information */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <Clock className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Performance Schedule
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Every Saturday
              <br />
              9:00 PM - 10:00 PM
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <Mail className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:classicalromanceconcerts@gmail.com"
                  className="hover:text-orange-100"
                >
                  classicalromanceconcerts@gmail.com
                </a>
              </p>
              <p className="text-gray-300 flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a
                  href="https://instagram.com/classicalromanceconcerts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-100"
                >
                  @classicalromanceconcerts
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="w-full rounded-lg overflow-hidden border border-gray-800 h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5653.67912868369!2d9.18991127630804!3d45.475909571074105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6b592c1601b%3A0x9f5e96bdb4ef1def!2sChiesa%20di%20Santa%20Maria%20degli%20Angeli%20(o%20Sant&#39;Angelo)!5e1!3m2!1sit!2sit!4v1735119932873!5m2!1sit!2sit"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
