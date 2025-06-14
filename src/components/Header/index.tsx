interface HeaderProps {
  position: "top" | "bottom";
}

export default function Header({ position }: HeaderProps) {
  const baseClasses = "max-w-7xl mx-auto flex items-center justify-between";

  const navClasses =
    "bg-zinc-800/30 backdrop-blur-sm shadow-lg rounded-full px-2 py-2 flex items-center space-x-6 text-white/80 text-sm sm:text-base";

  if (position === "top") {
    // Верхний header — виден только с sm и выше
    return (
      <header className="absolute z-10 w-full px-6 py-4 hidden sm:block">
        <div className={baseClasses}>
          <div className="w-32" />
          <nav className={navClasses}>
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
          <div className="w-32" />
        </div>
      </header>
    );
  }

  // Нижний header — виден только на xs (мобильных)
  return (
    <header className="fixed bottom-0 left-0 right-0 z-20 px-6 py-4    shadow-md block sm:hidden">
      <div className={baseClasses}>
        <div className="w-32" />
        <nav className={navClasses}>
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
        <div className="w-32" />
      </div>
    </header>
  );
}
