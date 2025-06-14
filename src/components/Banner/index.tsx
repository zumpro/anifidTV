"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  {
    id: 1,
    title: "Атака титанов: Заключительная глава",
    subtitle: "Финал эпической битвы за свободу",
    imageDesktop: "/banners/home/attack-titans-desktop.jpg",
    imageMobile: "/banners/home/attack-titans-mobile.jpg",
  },
  {
    id: 2,
    title: "О движении Земли",
    subtitle: "Тайны и загадки нашей планеты",
    imageDesktop: "/banners/home/movement-earth-desktop.jpg",
    imageMobile: "/banners/home/movement-earth-mobile.jpg",
  },
  {
    id: 3,
    title: "Блич: Тысячелетняя кровавая война",
    subtitle: "Битва за судьбу мира продолжается",
    imageDesktop: "/banners/home/bleach-war-desktop.jpg",
    imageMobile: "/banners/home/bleach-war-mobile.jpg",
  },
  {
    id: 4,
    title: "Дандадан",
    subtitle: "Невероятные приключения ждут тебя",
    imageDesktop: "/banners/home/dandadan-desktop.jpg",
    imageMobile: "/banners/home/dandadan-mobile.jpg",
  },
  {
    id: 5,
    title: "Этот замечательный мир! 3",
    subtitle: "Новые забавные приключения в фэнтези",
    imageDesktop: "/banners/home/kono-subarashii-desktop.jpg",
    imageMobile: "/banners/home/kono-subarashii-mobile.jpg",
  },
  {
    id: 6,
    title: "Кайдзю номер восемь",
    subtitle: "Борьба с монстрами за спасение Земли",
    imageDesktop: "/banners/home/kaiju-8-desktop.jpg",
    imageMobile: "/banners/home/kaiju-8-mobile.jpg",
  },
];

export default function Banner() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="rounded-lg overflow-hidden"
      >
        {banners.map(({ id, title, subtitle, imageDesktop, imageMobile }) => (
          <SwiperSlide key={id}>
            <div className="relative w-full h-[600px] md:h-[600px]">
              <picture>
                <source media="(max-width: 768px)" srcSet={imageMobile} />
                <source media="(min-width: 769px)" srcSet={imageDesktop} />
                <img
                  src={imageDesktop}
                  alt={title}
                  className="w-full h-full object-cover brightness-75"
                  loading="lazy"
                />
              </picture>
              <div className="absolute bottom-10 left-10 max-w-lg text-white">
                <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                  {title}
                </h2>
                <p className="mt-2 text-lg md:text-2xl drop-shadow-lg">
                  {subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
