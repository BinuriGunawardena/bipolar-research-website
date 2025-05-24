export function Methodology() {
  const steps = [
    {
      number: "01",
      title: "Literature Review",
      description: "Analysis of existing tracking methods",
      color: "from-purple-400 to-pink-500",
    },
    {
      number: "02",
      title: "User Research",
      description: "Interviews with patients and professionals",
      color: "from-blue-400 to-cyan-500",
    },
    {
      number: "03",
      title: "System Design",
      description: "Agile development with iterative prototyping",
      color: "from-green-400 to-emerald-500",
    },
    {
      number: "04",
      title: "Testing",
      description: "User testing and clinical validation",
      color: "from-orange-400 to-red-500",
    },
  ]

  return (
    <section id="methodology" className="py-20 px-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Methodology</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 group animate-slide-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                >
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Methodology Diagram"
                className="rounded-xl opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
