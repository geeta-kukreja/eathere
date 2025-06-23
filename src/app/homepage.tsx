"use client";
import React, { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { ChevronLeft, ChevronRight, Search, Heart, Plus } from "lucide-react";
import { Footer } from "../components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/eathere';

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen w-full bg-white text-black">
      {/* Header */}
      <header className="bg-orange-600 px-6 py-4 flex items-center justify-between h-20 relative sticky top-0 z-50">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-tight">EatHere</h1>
        {/* Search Bar */}
        <div className="absolute left-0 right-0 mx-auto w-full max-w-xl">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400">
              <Search size={20} />
            </span>
            <Input
              placeholder="What can we help you find?"
              className="w-64 md:w-80 pl-10 pr-4 py-1 rounded-none font-bold bg-[rgba(255,255,255,0.18)] text-white placeholder-orange-200 focus:ring-2 focus:ring-orange-400 border border-orange-300 shadow-none text-sm mx-auto"
            />
          </div>
        </div>
        {/* Buttons */}
        <nav className="flex gap-3 items-center">
          <Button className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded-full shadow">🔥 Restaurant Deals</Button>
          <Button className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-100 text-sm px-4 py-2 rounded-full shadow">Sign Up</Button>
          <Button className="bg-orange-600 text-white hover:bg-orange-700 text-sm px-4 py-2 rounded-full shadow">Log In</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-cover bg-center" style={{ backgroundImage: `url('${basePath}/food-bg.webp')` }}>
        <h2 className="text-4xl font-bold mb-2 text-white">Plan your next meal!</h2>
        <div className="flex gap-4 mt-6">
          <Button className="bg-white text-orange-600 hover:bg-orange-100">Log In</Button>
          <Button className="bg-orange-600 text-white hover:bg-orange-700">Sign Up</Button>
        </div>
      </section>

       {/* Discover Cities */}
       <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <img src={`${basePath}/icons/discover.png`} style={{ filter: 'invert(41%) sepia(99%) saturate(749%) hue-rotate(359deg) brightness(102%) contrast(101%)' }} alt="Discover" className="w-6 h-6" />
            <h3 className="text-2xl font-extrabold text-black">Discover Your City</h3>
          </div>

          <div className="relative flex items-center" style={{ height: '250px' }}>
            <button
              onClick={scrollLeft}
              className="absolute left-[-56px] top-1/2 -translate-y-1/2 z-10 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-12 h-60"
              style={{ scrollBehavior: 'smooth' }}
            >
              {[
                { name: "Indianapolis, IN" },
                { name: "Atlanta, GA" },
                { name: "Boise, ID" },
                { name: "Boston, MA" },
                { name: "Charleston, SC" },
                { name: "Charlotte, NC" }
              ].map((city, idx) => (
                <div
                  key={city.name}
                  className="group min-w-[180px] max-w-[200px] h-60 rounded-2xl overflow-hidden relative flex-shrink-0"
                >
                  <img
                    src={`${basePath}/cities/indianapolis.jpg`}
                    alt={city.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Orange overlay on hover for all cards */}
                  <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-70 mix-blend-multiply pointer-events-none rounded-2xl transition-opacity duration-200" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                    <span className="text-white text-base font-semibold drop-shadow">{city.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-[-56px] top-1/2 -translate-y-1/2 z-10 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
           {/* Explore Topics + Feed Layout */}
           <section className="px-2 md:px-6 py-10 max-w-screen-xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left: Explore Topics */}
        <aside className="w-full md:w-64 bg-white md:pl-6 mb-8 md:mb-0 md:sticky md:top-24 flex flex-col h-fit md:h-[calc(100vh-7rem)]">
          <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
            <img src={`${basePath}/icons/explore.png`} alt="Explore" className="w-5 h-5" style={{ filter: 'invert(41%) sepia(99%) saturate(749%) hue-rotate(359deg) brightness(102%) contrast(101%)' }} />
            Explore Topics
          </h4>
          <ul className="space-y-3 overflow-y-auto max-h-[calc(80vh-250px)] pr-1 text-base">
            {Array.from(new Set([
              // Old topics
              "🍌 All", "📍 Guides", "💑 Date Night", "🍾 Brunch", "🍣 Sushi", "🍹 Drinks", "🧭 Resources", "🌿 Plant-Based", "🥃 Black", "🍗 Chicken", "🍔 Burger", "📦 Free Food",
              // New topics
              "🍕 Pizza",
              "💪 Healthy",
              "🥬 Vegan",
              "💰 Deals",
              "🍲 Dinner",
              "🏖️ Patios",
              "🥡 Asian",
              "☕ Coffee",
              "⏰ Lunch",
              "🥩 Steaks",
              "🌯 Mexican"
            ])).map((topic) => (
              <li key={topic}>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="topic" className="accent-orange-600" />
                  <span>{topic}</span>
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Footer />
          </div>
        </aside>
       
            
        {/* Center: Feed */}
        <div className="w-full md:flex-1 overflow-y-auto h-[calc(100vh-6rem)]">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-semibold">The Feed 🌟</h4>
            <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold px-5 py-2 rounded-full shadow-none">
              <Plus size={18} />
              Suggest
            </Button>
          </div>
          {/* Placeholder cards */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col md:flex-row bg-white rounded-xl p-0 max-w-2xl mx-auto">
                <img src={`${basePath}/cities/indianapolis.jpg`} alt="feed" className="w-full md:w-60 h-40 object-cover rounded-xl" />
                <div className="flex flex-col flex-1 px-6 pt-4 pb-3 md:pl-6 md:pt-0 md:pb-0 relative">
                  <h5 className="text-2xl font-extrabold leading-snug mb-2">Chicken & Beer Festival – Indianapolis Celebrates 5th Anniversary This October</h5>
                  <span className="text-xs px-3 py-0.5 rounded-full border border-gray-300 mt-1 mb-3 inline-block font-medium">Indianapolis</span>
                  <p className="text-base text-gray-600 mb-4">INDIANAPOLIS (June 2025) – Chicken & Beer Festival returns for its 5th anniversary celebration...</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xs text-gray-500">by EatHere Staff</p>
                    <button aria-label="Like" className="bg-white border border-gray-200 rounded-full p-2 group">
                      <Heart size={22} className="stroke-2 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
              {idx < arr.length - 1 && (
                <div className="h-px bg-gray-200 my-8 max-w-2xl mx-auto" />
              )}
            </React.Fragment>
          ))}
          <div className="flex justify-center mt-6">
            <Button className="bg-orange-600 text-white hover:bg-orange-700">More Results</Button>
          </div>
        </div>

        {/* Right: Premium Member */}
        <aside className="w-full md:w-72 mt-8 md:mt-0 md:sticky md:top-24">
          <img src={`${basePath}/ads/premium.png`} alt="Premium Member" className="rounded-lg shadow-lg w-56 mx-auto" />
        </aside>
      </section>

    </main>
  );
}
