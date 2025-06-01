export function Team() {
  const supervisors = [
    {
      name: "Ms. Thilini Jayalath",
      role: "Supervisor",
      email: "thilini.j@sliit.lk",
      image: "/images/Thilini.jpeg",
    },
    {
      name: "Ms. Aparna Jayawardena",
      role: "Co-supervisor",
      email: "aparna.j@sliit.lk",
      image: "/images/Aparna.jpg",
    },
  ];

  const teamMembers = [
    {
      name: "Karunarathne D. H",
      role: "Undergraduate",
      email: "it21228858@my.sliit.lk",
      image: "/images/Dulhan.jpg",
    },
    {
      name: "Gunarathna T.M.T.N",
      role: "Undergraduate",
      email: "it21319860@my.sliit.lk",
      image: "/images/Tharun.jpeg",
    },
    {
      name: "Gunawardena B. D",
      role: "Undergraduate",
      email: "it21222122@my.sliit.lk",
      image: "/images/Binuri.jpeg",
    },
  ];

  return (
    <section id="team" className="py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-5xl font-extrabold mb-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-slide-in-down font-serif tracking-tight drop-shadow-lg text-center"
        >
          Meet the Team
        </h2>


        {/* Supervisors */}
        <div className="mb-20">
          <h3
            className="text-3xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent tracking-wide uppercase mb-10 animate-slide-in-down"
          >
            Supervisors
          </h3>

          <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {supervisors.map((sup, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-purple-200 shadow-inner">
                  <img src={sup.image} alt={sup.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-gray-800 tracking-tight">
                  {sup.name}
                </h4>
                <p className="text-sm italic text-gray-500 mt-1">{sup.role}</p>
                <a
                  href={`mailto:${sup.email}`}
                  className="text-sm font-mono text-blue-600 hover:text-purple-600 transition-colors underline mt-2 inline-block"
                >
                  {sup.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h3
            className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wide uppercase mb-10 animate-slide-in-down"
          >
            Team Members
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-4 border-blue-200 shadow-inner">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-gray-800 tracking-tight">
                  {member.name}
                </h4>
                <p className="text-sm italic text-gray-500 mt-1">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm font-mono text-blue-600 hover:text-purple-600 transition-colors underline mt-2 inline-block"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer before References */}
      <div className="h-24" />

      {/* References */}
      <div
        className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-10 animate-fade-in"
        id="references"
      >
        <h2
          className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-600 bg-clip-text text-transparent text-center font-serif tracking-tight animate-slide-in-down drop-shadow-md"
        >
          References
        </h2>

        <ol className="list-decimal list-inside text-left text-gray-700 space-y-4 text-base leading-relaxed">
          <li>
            Smith, J. et al. “Facial Expression-Based Emotion Recognition via Mobile Interfaces.”{" "}
            <em>Journal of Affective Computing</em>, 2020.
          </li>
          <li>
            Lee, H. & Park, M. “Emotion Analysis Using Uploaded Videos.” <em>ICMI Conference Proceedings</em>, 2019.
          </li>
          <li>
            Chen, D. et al. “Voice Emotion Recognition Through Telephony.” <em>IEEE Transactions on Audio Processing</em>, 2018.
          </li>
          <li>
            Kumar, S. “Limitations in Mood Tracking Technologies.” <em>mHealth Journal</em>, 2021.
          </li>
          <li>
            Zhang, Y. et al. “Ensemble Learning for Emotion Prediction.” <em>Neurocomputing</em>, 2020.
          </li>
          <li>
            Nguyen, T. “Multimodal Deep Learning for Affective Computing.” <em>AI & Health</em>, 2022.
          </li>
          <li>
            Patel, A. et al. “Ethical Implications in Audio-Based Mental Health Apps.” <em>Digital Ethics Review</em>, 2021.
          </li>
        </ol>
      </div>
    </section>
  );
}
