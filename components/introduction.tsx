export function Introduction() {
  return (
    <section id="introduction" className="py-20 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Introduction</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center group animate-slide-up">
            <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">?</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              Problem
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Current bipolar disorder tracking methods are inadequate, leading to poor symptom management and delayed
              intervention.
            </p>
          </div>
          <div className="text-center group animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              Solution
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A comprehensive digital platform enabling real-time mood tracking and personalized insights for better
              management.
            </p>
          </div>
          <div className="text-center group animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">→</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
              Objective
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Develop an intuitive, evidence-based system empowering patients and providers with actionable data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
