import React from "react";
import { ArrowRight, Users } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative bg-neutral-900 py-24">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Reserve Your Place in Paradise
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Tickets for our concerts are available through our trusted
              partners. Don&apos;t miss the opportunity to participate in this
              exceptional musical experience.
            </p>

            <div className="mb-12">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black rounded-lg bg-orange-100 hover:bg-orange-200 transition-all duration-300 transform hover:scale-105"
              >
                Book Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-gray-800 inline-flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-orange-100/10">
                <Users className="w-5 h-5 text-orange-100" />
              </div>
              <p className="text-gray-300 text-sm">
                We also offer special rates and packages for groups. Contact us
                directly for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
