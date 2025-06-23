"use client";
import React, { useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Card, CardContent } from "../components/ui/Card";
import { ChevronLeft, ChevronRight, Search, Heart, Plus } from "lucide-react";
import { Footer } from "../components/Footer";

const basePath = '';

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
      <header className="bg-orange-600 px-4 py-3 flex flex-col lg:flex-row items-center justify-between lg:h-20 relative sticky top-0 z-50 gap-3 lg:gap-0">
        {/* Mobile Layout */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Logo */}
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">EatHere</h1>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex gap-2 lg:hidden">
            <Button className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-100 text-xs px-3 py-1 rounded-full shadow">Sign Up</Button>
            <Button className="bg-orange-700 text-white hover:bg-orange-800 text-xs px-3 py-1 rounded-full shadow">Log In</Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full lg:absolute lg:left-0 lg:right-0 lg:mx-auto lg:w-full lg:max-w-xl">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-orange-400">
              <Search size={18} />
            </span>
            <Input
              placeholder="What can we help you find?"
              className="w-full lg:w-64 xl:w-80 pl-10 pr-4 py-2 lg:py-1 rounded-lg lg:rounded-none font-bold bg-[rgba(255,255,255,0.18)] text-white placeholder-orange-200 focus:ring-2 focus:ring-orange-400 border border-orange-300 shadow-none text-sm mx-auto"
            />
          </div>
        </div>

        {/* Desktop Navigation Buttons */}
        <nav className="hidden lg:flex gap-3 items-center">
          <Button className="bg-purple-700 hover:bg-purple-800 text-white text-sm px-4 py-2 rounded-full shadow">🔥 Restaurant Deals</Button>
          <Button className="bg-white text-orange-600 border border-orange-600 hover:bg-orange-100 text-sm px-4 py-2 rounded-full shadow">Sign Up</Button>
          <Button className="bg-orange-600 text-white hover:bg-orange-700 text-sm px-4 py-2 rounded-full shadow">Log In</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-12 lg:py-16 bg-cover bg-center px-4" style={{ backgroundImage: `url('${basePath}/food-bg.webp')` }}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-white">Plan your next meal!</h2>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-6 w-full max-w-xs sm:max-w-none lg:justify-center lg:max-w-md">
          <Button className="bg-white text-orange-600 hover:bg-orange-100 px-6 py-3">Log In</Button>
          <Button className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3">Sign Up</Button>
        </div>
      </section>

       {/* Discover Cities */}
       <section className="py-8 lg:py-12 px-4 bg-gray-100">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-6 lg:mb-8">
            <img src={`${basePath}/icons/discover.png`} style={{ filter: 'invert(41%) sepia(99%) saturate(749%) hue-rotate(359deg) brightness(102%) contrast(101%)' }} alt="Discover" className="w-5 h-5 lg:w-6 lg:h-6" />
            <h3 className="text-xl lg:text-2xl font-extrabold text-black">Discover Your City</h3>
          </div>

          <div className="relative flex items-center">
            {/* Desktop scroll buttons */}
            <button
              onClick={scrollLeft}
              className="hidden lg:block absolute left-[-56px] top-1/2 -translate-y-1/2 z-10 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200 transition"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div
              ref={scrollRef}
              className="flex gap-3 lg:gap-4 overflow-x-auto scroll-smooth no-scrollbar px-2 lg:px-12 h-48 lg:h-60"
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
                  className="group min-w-[140px] lg:min-w-[180px] max-w-[160px] lg:max-w-[200px] h-48 lg:h-60 rounded-2xl overflow-hidden relative flex-shrink-0"
                >
                  <img
                    src={`${basePath}/cities/indianapolis.jpg`}
                    alt={city.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  {/* Orange overlay on hover for all cards */}
                  <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-70 mix-blend-multiply pointer-events-none rounded-2xl transition-opacity duration-200" />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 lg:px-4 py-2 lg:py-3">
                    <span className="text-white text-sm lg:text-base font-semibold drop-shadow">{city.name}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              onClick={scrollRight}
              className="hidden lg:block absolute right-[-56px] top-1/2 -translate-y-1/2 z-10 bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center shadow hover:bg-gray-200 transition"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Mobile scroll indicator */}
          <div className="flex justify-center mt-4 lg:hidden">
            <p className="text-sm text-gray-500">← Swipe to explore more cities →</p>
          </div>
        </div>
      </section>
           {/* Explore Topics + Feed Layout */}
           <section className="px-2 md:px-6 py-6 lg:py-10 max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left: Explore Topics */}
        <aside className="w-full lg:w-64 bg-white lg:pl-6 mb-6 lg:mb-0 lg:sticky lg:top-24 flex flex-col h-fit lg:h-[calc(100vh-7rem)]">
          <h4 className="text-lg font-bold mb-4 lg:mb-6 flex items-center gap-2">
            <img src={`${basePath}/icons/explore.png`} alt="Explore" className="w-5 h-5" style={{ filter: 'invert(41%) sepia(99%) saturate(749%) hue-rotate(359deg) brightness(102%) contrast(101%)' }} />
            Explore Topics
          </h4>
          
          {/* Mobile: Horizontal scrolling topics */}
          <div className="lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {Array.from(new Set([
                "🍌 All", "📍 Guides", "💑 Date Night", "🍾 Brunch", "🍣 Sushi", "🍹 Drinks", "🌿 Plant-Based", "🍗 Chicken", "🍔 Burger", "🍕 Pizza", "💪 Healthy", "🥬 Vegan", "💰 Deals"
              ])).slice(0, 8).map((topic) => (
                <button
                  key={topic}
                  className="flex-shrink-0 px-3 py-1 bg-gray-100 hover:bg-orange-100 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200"
                >
                  {topic}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">← Swipe to see more topics →</p>
          </div>

          {/* Desktop: Vertical list */}
          <ul className="hidden lg:block space-y-3 overflow-y-auto max-h-[calc(80vh-250px)] pr-1 text-base">
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
          <div className="hidden lg:block mt-6">
            <Footer />
          </div>
        </aside>
       
            
        {/* Center: Feed */}
        <div className="w-full lg:flex-1 overflow-y-auto lg:h-[calc(100vh-6rem)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
            <h4 className="text-lg font-semibold">The Feed 🌟</h4>
            <Button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm lg:text-base font-semibold px-4 lg:px-5 py-2 rounded-full shadow-none">
              <Plus size={16} className="lg:w-[18px] lg:h-[18px]" />
              Suggest
            </Button>
          </div>
          {/* Placeholder cards */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col lg:flex-row bg-white rounded-xl p-0 max-w-2xl mx-auto">
                <img src={`${basePath}/cities/indianapolis.jpg`} alt="feed" className="w-full lg:w-60 h-48 lg:h-40 object-cover rounded-t-xl lg:rounded-xl" />
                <div className="flex flex-col flex-1 px-4 lg:px-6 pt-4 pb-3 lg:pt-0 lg:pb-0 relative">
                  <h5 className="text-lg lg:text-2xl font-extrabold leading-snug mb-2">Chicken & Beer Festival – Indianapolis Celebrates 5th Anniversary This October</h5>
                  <span className="text-xs px-3 py-0.5 rounded-full border border-gray-300 mt-1 mb-3 inline-block font-medium w-fit">Indianapolis</span>
                  <p className="text-sm lg:text-base text-gray-600 mb-4">INDIANAPOLIS (June 2025) – Chicken & Beer Festival returns for its 5th anniversary celebration...</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-xs text-gray-500">by EatHere Staff</p>
                    <button aria-label="Like" className="bg-white border border-gray-200 rounded-full p-2 group">
                      <Heart size={20} className="lg:w-[22px] lg:h-[22px] stroke-2 text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>
              {idx < arr.length - 1 && (
                <div className="h-px bg-gray-200 my-6 lg:my-8 max-w-2xl mx-auto" />
              )}
            </React.Fragment>
          ))}
          <div className="flex justify-center mt-6">
            <Button className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-3">More Results</Button>
          </div>
        </div>

        {/* Right: Premium Member */}
        <aside className="w-full lg:w-72 mt-6 lg:mt-0 lg:sticky lg:top-24">
          <img src={`${basePath}/ads/premium.png`} alt="Premium Member" className="rounded-lg shadow-lg w-48 lg:w-56 mx-auto" />
        </aside>

        {/* Mobile Footer */}
        <div className="lg:hidden mt-8">
          <Footer />
        </div>
      </section>

    </main>
  );
}
