"use client"

export function Methodology() {
  const steps = [
    // {
    //   number: "01",
    //   title: "Literature Review",
    //   description:
    //     "Conducted an in-depth analysis of existing bipolar disorder monitoring systems, mood-tracking apps, and passive data sensing frameworks to identify gaps and research opportunities.",
    //   color: "from-purple-400 to-pink-500",
    // },
    {
      number: "01",
      title: "User Research",
      description:
        "Interviewed individuals with bipolar disorder, mental health professionals, and caregivers to gather diverse perspectives on challenges, needs, and expectations from a digital support tool.",
      color: "from-blue-400 to-cyan-500",
    },
    {
      number: "02",
      title: "System Design",
      description:
        "Designed the architecture using agile principles, with iterative prototyping and feedback loops. Focused on user experience, data privacy, and real-time passive data capture capabilities.",
      color: "from-green-400 to-emerald-500",
    },
    {
      number: "03",
      title: "Testing",
      description:
        "Carried out usability testing, functional validation, and clinical feedback cycles to ensure the system delivers accurate predictions, seamless experience, and ethical data handling.",
      color: "from-orange-400 to-red-500",
    },
  ]

  return (
    <section id="methodology" className="py-20 px-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center animate-fade-in">
          <h2
            className="text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif tracking-tight drop-shadow-md animate-slide-in-down"
          >
            Our Methodological Approach
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured, research-driven development process combining real-world insights, agile engineering, and validation to ensure effectiveness and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Step Cards */}
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
                  <h3 className="text-lg font-medium text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal Scrollable Image */}
          <div className="w-full overflow-x-auto animate-fade-in mt-20" style={{ animationDelay: "600ms" }}>
            <div className="min-w-[800px] flex justify-center bg-white p-4 rounded-2xl shadow-xl">
              <img
                src="/images/methodology.jpeg"
                alt="Methodology Diagram"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
