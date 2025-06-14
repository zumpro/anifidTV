// pages/index.tsx

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white">
      {/* Баннер */}
      <section className="relative h-[60vh] flex items-center justify-start px-12">
        <Image
          src="/banner.jpg" // Заменить на баннер аниме
          alt="Banner Anime"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="z-10 max-w-xl">
          <h2 className="text-4xl font-bold mb-2">Атака Титанов</h2>
          <p className="text-lg mb-4">
            Эпическое противостояние человечества и титанов продолжается.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-lg">
            Смотреть
          </button>
        </div>
      </section>

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
