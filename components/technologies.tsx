"use client"
import { FaPython, FaJava, FaFigma, FaAndroid } from "react-icons/fa"
import { SiFirebase, SiGooglecolab, SiKotlin, SiTailwindcss } from "react-icons/si"

export function Technologies() {
  const technologies = [
    { name: "Python", icon: <FaPython size={48} color="#3776AB" /> },
    { name: "Firebase", icon: <SiFirebase size={48} color="#FFCA28" /> },
    { name: "Figma", icon: <FaFigma size={48} color="#F24E1E" /> },
    { name: "Google Colab", icon: <SiGooglecolab size={48} color="#F9AB00" /> },
    { name: "Kotlin", icon: <SiKotlin size={48} color="#7F52FF" /> },
    { name: "Java", icon: <FaJava size={48} color="#007396" /> },
    { name: "Android Studio", icon: <FaAndroid size={48} color="#3DDC84" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={48} color="#06B6D4" /> },
  ]

  return (
<section id="technologies" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center items-center h-[60px]">
                {tech.icon}
              </div>
              <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
