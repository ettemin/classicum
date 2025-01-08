import React from "react";
import { Target, Star } from "lucide-react";
import { useTranslations } from "next-intl";

const Vision = () => {
  const t = useTranslations("vision");

  return (
    <section id="vision-section" className="relative bg-neutral-900 py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-2">
            {t("title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Vision Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <Target className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t("visionTitle")}
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed flex-1">
              {t("visionDescription")}
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-gray-800 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10">
                <Star className="w-6 h-6 text-orange-100" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {t("missionTitle")}
              </h3>
            </div>
            <p className="text-gray-300 mb-6">{t("missionDescription")}</p>
            <div className="space-y-4 flex-1">
              {t.raw("missionPoints").map((item: string, index: number) => (
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
