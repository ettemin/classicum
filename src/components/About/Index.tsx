import React from "react";
import { Music, Users, Church } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("about");
  return (
    <section id="about" className="relative bg-neutral-900 py-24">
      <div className="absolute inset-0 bg-[url('/background/ornate-cathedral-ceiling.jpg')] bg-cover bg-center opacity-30" />

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {t("title")}
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-12">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800  hover:border-orange-100/30">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10 mb-6">
              <Church className="w-6 h-6 text-orange-100" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t("features.0.title")}
            </h3>
            <p className="text-gray-300">{t("features.0.description")}</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border  hover:border-orange-100/30 border-gray-800">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10 mb-6">
              <Music className="w-6 h-6 text-orange-100" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t("features.1.title")}
            </h3>
            <p className="text-gray-300">{t("features.1.description")}</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800  hover:border-orange-100/30">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100/10 mb-6">
              <Users className="w-6 h-6 text-orange-100" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t("features.2.title")}
            </h3>
            <p className="text-gray-300">{t("features.2.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
