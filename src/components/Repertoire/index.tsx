import React from "react";
import { Music2 } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Composer {
  name: string;
  period: string;
  knownFor: string;
}

const Repertoire = () => {
  const t = useTranslations("repertoire");
  const composerData = t.raw("composers");

  return (
    <section id="repertoire" className="relative bg-neutral-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100/10 mb-6">
            <Music2 className="w-8 h-8 text-orange-100" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {t("title")}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {t("description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {composerData?.map((composer: Composer) => (
            <div
              key={composer.name}
              className="group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-orange-100/30 p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/80 to-transparent" />
                <Image
                  src={`/composer/${
                    composer.name.split(" ").pop()?.toLowerCase() ?? ""
                  }-portrait.jpg`}
                  alt={composer.name}
                  width={200}
                  height={200}
                  className="w-full h-full rounded-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {composer.name}
                </h3>
                <p className="text-sm text-gray-400 mb-2">{composer.period}</p>
                <p className="text-gray-300 text-sm">{composer.knownFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repertoire;
