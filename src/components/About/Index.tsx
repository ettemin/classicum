import React from "react";
import { Music, Users, Church } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative bg-neutral-900 py-24">
      <div className="absolute inset-0 bg-[url('/classicum/background/ornate-cathedral-ceiling.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Classical Excellence in a Historic Setting
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Step into the magnificent Chiesa Santa Maria degli Angeli, where
            centuries of Italian artistry converge in an unforgettable evening
            of classical masterpieces. Our concerts transport you through time,
            featuring compositions that defined Italy&apos;s musical legacy,
            performed by distinguished musicians in an authentic baroque
            setting.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800  hover:border-orange-100/30">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10 mb-6">
              <Church className="w-6 h-6 text-orange-100" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Intimate Setting
            </h3>
            <p className="text-gray-300">
              Experience classical music in the intimate atmosphere of a
              16th-century church, where every note resonates with historical
              significance.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border  hover:border-orange-100/30 border-gray-800">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10 mb-6">
              <Music className="w-6 h-6 text-orange-100" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Curated Program
            </h3>
            <p className="text-gray-300">
              Each performance thoughtfully combines beloved classics with known
              gems of the Italian repertoire, creating a journey through
              Italy&apos;s rich musical heritage.
            </p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800  hover:border-orange-100/30">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10 mb-6">
              <Users className="w-6 h-6 text-orange-100" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Expert Musicians
            </h3>
            <p className="text-gray-300">
              Our ensemble comprises accomplished artists dedicated to authentic
              performance practices, bringing centuries-old compositions to
              vivid life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
