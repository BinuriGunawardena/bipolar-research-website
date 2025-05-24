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
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-16 text-center animate-fade-in font-serif">
        Meet the Team
      </h2>

      {/* Supervisors */}
      <div className="mb-20">
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-10 animate-fade-in tracking-wide uppercase">
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
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-10 animate-fade-in tracking-wide uppercase">
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
  </section>
)



}
