import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-60 backdrop-blur-md shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="w-32" /> {/* Пустой блок слева для симметрии */}
        <nav className="bg-zinc-800/30 backdrop-blur-sm shadow-lg rounded-full px-6 py-2 flex items-center space-x-6 text-white/80 text-sm sm:text-base">
          <button className="bg-white/20 cursor-pointer text-white px-4 py-2 rounded-full font-semibold shadow-inner hover:bg-white/30 transition-colors">
            Главная
          </button>
          <button className="hover:text-white transition-colors cursor-pointer">
            Каталог
          </button>
          <button className="hover:text-white transition-colors cursor-pointer">
            Расписание
          </button>
          <button className="hover:text-white transition-colors cursor-pointer">
            Библиотека
          </button>
          <div className="w-4 h-4 ml-2 cursor-pointer hover:text-white transition-colors">
            Q
          </div>
        </nav>
        <div className="w-32" /> {/* Пустой блок справа для симметрии */}
      </div>
    </header>
  );
}
