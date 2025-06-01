// export function Introduction() {
//   return (
//     <section id="introduction" className="py-20 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Introduction</h2>
//         <div className="grid md:grid-cols-3 gap-12">
//           <div className="text-center group animate-slide-up">
//             <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//               <span className="text-white text-2xl font-bold">?</span>
//             </div>
//             <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
//               Problem
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               Current bipolar disorder tracking methods are inadequate, leading to poor symptom management and delayed
//               intervention.
//             </p>
//           </div>
//           <div className="text-center group animate-slide-up" style={{ animationDelay: "200ms" }}>
//             <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//               <span className="text-white text-2xl font-bold">✓</span>
//             </div>
//             <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
//               Solution
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               A comprehensive digital platform enabling real-time mood tracking and personalized insights for better
//               management.
//             </p>
//           </div>
//           <div className="text-center group animate-slide-up" style={{ animationDelay: "400ms" }}>
//             <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//               <span className="text-white text-2xl font-bold">→</span>
//             </div>
//             <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
//               Objective
//             </h3>
//             <p className="text-gray-600 leading-relaxed">
//               Develop an intuitive, evidence-based system empowering patients and providers with actionable data.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
export function Introduction() {
  return (
    <section
      id="introduction"
      className="py-20 px-6 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50"
    >
      <div className="max-w-4xl mx-auto">
         <div className="mb-16 text-center animate-fade-in">
          <h2
            className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-slide-in-down font-serif tracking-tight  decoration-pink-300 decoration-4"
          >
            Understanding the Vision
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto animate-fade-in">
            Transformative approach to mood monitoring and bipolar disorder management through AI and passive data insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Problem */}
          <div className="text-center group animate-slide-up">
            <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">?</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              Problem
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bipolar disorder is a complex mental health condition characterized by intense mood swings ranging from
              manic highs to depressive lows. Current tracking methods rely heavily on subjective reporting, infrequent
              clinical visits, or incomplete data. This often leads to misdiagnosis, poor self-awareness, and delayed
              interventions—impacting both the individual’s wellbeing and treatment effectiveness.
            </p>
          </div>

          {/* Solution */}
          <div
            className="text-center group animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              Solution
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our solution is a digital mood-tracking and behavioral monitoring platform tailored specifically for
              individuals with bipolar disorder. By leveraging passive data collection (e.g., speech tone, activity
              patterns, browsing behavior) and integrating it with user inputs, the system provides real-time insights,
              mood predictions, and early warning alerts. This bridges the gap between clinical visits and real-world
              mood fluctuations.
            </p>
          </div>

          {/* Objective */}
          <div
            className="text-center group animate-slide-up"
            style={{ animationDelay: "400ms" }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">→</span>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
              Objective
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The goal is to develop an AI-enhanced, user-friendly application that empowers users and clinicians with
              accurate, contextual, and continuous mood tracking. By transforming scattered and passive data into
              meaningful insights, the system aims to enhance early detection, foster proactive care, and ultimately
              improve quality of life for those living with bipolar disorder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
