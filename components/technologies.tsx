"use client"
import { FaPython, FaJava, FaFigma, FaAndroid, FaGithub } from "react-icons/fa"
import { SiFirebase, SiGooglecolab, SiKotlin, SiTailwindcss } from "react-icons/si"
import { DiVisualstudio } from "react-icons/di"


export function Technologies() {
  const technologies = [
    { name: "Python", icon: <FaPython size={40} color="#3776AB" /> },
    { name: "Firebase", icon: <SiFirebase size={40} color="#FFCA28" /> },
    { name: "Figma", icon: <FaFigma size={40} color="#F24E1E" /> },
    { name: "Google Colab", icon: <SiGooglecolab size={40} color="#F9AB00" /> },
    { name: "Kotlin", icon: <SiKotlin size={40} color="#7F52FF" /> },
    { name: "Java", icon: <FaJava size={40} color="#007396" /> },
    { name: "Android Studio", icon: <FaAndroid size={40} color="#3DDC84" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: "GitHub", icon: <FaGithub size={40} color="#000000" /> },
    { name: "VS Code", icon: <DiVisualstudio size={40} color="#007ACC" /> },
  ]

  return (
    <section id="technologies" className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-slate-700 via-blue-700 to-teal-500 bg-clip-text text-transparent font-serif tracking-tight drop-shadow-md animate-slide-in-down"
        >
          🛠 Technologies We Used
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-3">
                {tech.icon}
              </div>
              <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
