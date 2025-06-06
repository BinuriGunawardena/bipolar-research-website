"use client"

import { Sparkles } from "lucide-react"

export function Header() {
  return (
    <section
      id="home"
      className="py-24 px-6 bg-[#0D0B23] text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-green-300 rounded-full blur-lg animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo + Sparkles */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="relative animate-float">
            <img
              src="/images/BipoLink.png"
              alt="BipoLink Logo"
              className="h-20 w-20 object-contain rounded-full shadow-lg"
            />
            <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-ping-slow" />
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-fuchsia-400 via-pink-500 to-yellow-300 bg-clip-text text-transparent animate-slide-in-down tracking-tight drop-shadow-lg"
        >
          Bipolar Disorder Tracker
        </h1>

        {/* Subheading */}
        <p className="text-xl text-purple-100 mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Final Year Research Project
        </p>

        {/* Description */}
        <p
          className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "400ms" }}
        >
          A digital solution for monitoring and managing bipolar disorder symptoms through innovative technology
        </p>
      </div>
    </section>
  )
}
