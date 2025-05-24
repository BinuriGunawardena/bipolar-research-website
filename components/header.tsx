"use client"

import { Brain, Sparkles } from "lucide-react"

export function Header() {
  return (
    <section
      id="home"
      className="py-24 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-yellow-300 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-green-300 rounded-full animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="relative">
            <Brain className="h-16 w-16 text-white animate-pulse" />
            <Sparkles className="h-6 w-6 text-yellow-300 absolute -top-2 -right-2 animate-spin" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 animate-slide-up">Bipolar Disorder Tracker</h1>
        <p className="text-xl text-blue-100 mb-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
          Final Year Research Project
        </p>
        <p
          className="text-lg text-blue-50 max-w-2xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          A digital solution for monitoring and managing bipolar disorder symptoms through innovative technology
        </p>
      </div>
    </section>
  )
}
