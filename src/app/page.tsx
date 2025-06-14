// pages/index.tsx

import Image from "next/image";
import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Баннер */}
      <Banner />

      {/* Продолжить просмотр */}
      <section className="mt-12 px-6">
        <h3 className="text-2xl font-semibold mb-4">Продолжить просмотр</h3>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="min-w-[120px] bg-zinc-800 rounded-md overflow-hidden"
            >
              <Image
                src={`/anime/${i}.jpg`} // замените на настоящие постеры
                alt={`anime-${i}`}
                width={100}
                height={140}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Новинки */}
      <section className="mt-12 px-6 pb-12">
        <h3 className="text-2xl font-semibold mb-4">Новинки</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[7, 8, 9, 10, 11].map((i) => (
            <div key={i} className="bg-zinc-800 rounded-md overflow-hidden">
              <Image
                src={`/anime/${i}.jpg`}
                alt={`new-anime-${i}`}
                width={160}
                height={220}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
