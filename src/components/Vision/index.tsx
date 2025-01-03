import React from "react";
import { Target, Star } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision-section" className="relative bg-neutral-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-2">
            Our Vision & Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Changed items-start to items-stretch */}
          {/* Vision Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex flex-col">
            {/* Added flex flex-col */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <Target className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed flex-1">
              {/* added flex-1 */}
              To create transformative musical experiences that bridge past and
              present, connecting audiences with Italy&apos;s extraordinary
              cultural heritage through the timeless power of classical music.
            </p>
          </div>
          {/* Mission Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex flex-col">
            {/* Added flex flex-col */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <Star className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-gray-300 mb-6">We are dedicated to:</p>
            <div className="space-y-4 flex-1">
              {/* added flex-1 */}
              {[
                "Preserving and celebrating Italy's classical music tradition",
                "Making extraordinary musical experiences accessible to all audiences",
                "Supporting emerging artists while honoring historical performance practices",
                "Creating meaningful connections between Italy's architectural and musical heritage",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-orange-100 mt-2" />
                  <p className="text-gray-300 flex-1">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
