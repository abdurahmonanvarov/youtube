import { useState } from "react";
import Burger from "./Burger";

export default function YoutubeHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openBurger, setIsOpenBurger] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f0f0f] border-b border-zinc-800">
      <div className="flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-4">
          <button className="text-white" onClick={() => setIsOpenBurger(true)}>
            <i className="h-6 w-6 cursor-pointer fa fa-bars"></i>
          </button>
          <div className="flex items-center">
            <i className="fab fa-youtube text-4xl text-red-700"></i>
            <span className="ml-1 font-bold text-white text-xl">YouTube</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
          <div className="relative flex-1 flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-zinc-900 border-zinc-700 focus:ring-0 rounded-l-full rounded-r-none h-10 pl-4 pr-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="h-10 rounded-l-none rounded-r-full bg-zinc-800 hover:bg-zinc-700 px-5">
              <i className="h-5 w-5 text-white fa fa-search"></i>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-white">
            <i className="h-6 w-6 fa fa-bell"></i>
          </button>
          <button className="text-white">
            <i className="h-6 w-6 fa fa-play"></i>
          </button>
          <button className="rounded-full border-primary text-primary hover:bg-primary/10 px-3 py-1">
            Create
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
            <i className="h-5 w-5 fa fa-user"></i>
          </div>
        </div>
      </div>

      <Burger isOpen={openBurger} onClose={() => setIsOpenBurger(false)} />
    </header>
  );
}
