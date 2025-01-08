import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  return (
    <section id="home" className="relative bg-neutral-900 pt-24 min-h-screen">
      <div className="absolute inset-0 bg-[url('/background/orchestra-violins.jpg')] bg-cover bg-center opacity-90 mix-blend-overlay" />

      <div className="relative grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            {t("title")}
          </h1>
          <div className="max-w-2xl mb-6 space-y-2 text-gray-200 lg:mb-8">
            <p className="text-lg md:text-xl font-medium">
              {t("schedule.line1")}
            </p>
            <p className="text-lg md:text-xl font-medium">
              {t("schedule.line2")}
              <br />
              {t("schedule.line3")}
            </p>
          </div>

          <p className="max-w-2xl mb-8 text-gray-300 md:text-lg lg:text-xl">
            {t("description")}
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-orange-100 hover:bg-orange-200"
          >
            {t("bookButton")}
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>
      </div>
    </section>
  );
};

export default Hero;
