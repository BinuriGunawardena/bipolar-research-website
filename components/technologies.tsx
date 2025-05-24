export function Technologies() {
  const technologies = [
    { name: "Python", color: "from-blue-400 to-blue-600" },
    { name: "Firebase", color: "from-orange-400 to-red-500" },
    { name: "Figma", color: "from-purple-400 to-pink-500" },
    { name: "Google Colab", color: "from-yellow-400 to-orange-500" },
    { name: "Kotlin", color: "from-indigo-400 to-purple-600" },
    { name: "Java", color: "from-red-400 to-pink-500" },
    { name: "Android Studio", color: "from-green-400 to-teal-500" },
    { name: "TailwindCSS", color: "from-cyan-400 to-blue-500" },
  ]

  return (
    <section id="technologies" className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="text-center group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}
              >
                <span className="text-white font-bold text-lg">{tech.name.slice(0, 2)}</span>
              </div>
              <p className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
