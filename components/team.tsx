export function Team() {
  const supervisors = [
    {
      name: "Ms. Thilini Jayalath",
      role: "Supervisor",
      email: "thilini.j@sliit.lk",
      color: "from-indigo-500 to-purple-600",
    },
    {
      name: "Ms. Aparna Jayawardena",
      role: "Co-supervisor",
      email: "aparna.j@sliit.lk",
      color: "from-purple-500 to-pink-600",
    },
  ]

  const teamMembers = [
    {
      name: "Karunarathne D. H",
      role: "Undergraduate",
      email: "karunarathne.d@sliit.lk",
      color: "from-blue-400 to-purple-500",
    },
    {
      name: "Gunarathna T.M.T.N",
      role: "Undergraduate",
      email: "gunarathna.t@sliit.lk",
      color: "from-green-400 to-cyan-500",
    },
    {
      name: "Gunawardena B. D",
      role: "Undergraduate",
      email: "gunawardena.b@sliit.lk",
      color: "from-orange-400 to-yellow-500",
    },
  ]

  return (
    <section id="team" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Team</h2>

        {/* Supervisors Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center animate-fade-in">👩‍🏫 Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${supervisor.color} rounded-full mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl flex items-center justify-center`}
                >
                  <span className="text-white text-3xl font-bold">
                    {supervisor.name
                      .split(" ")
                      .slice(-2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {supervisor.name}
                </h3>
                <p className="text-gray-600 mb-3">{supervisor.role}</p>
                <a
                  href={`mailto:${supervisor.email}`}
                  className="text-blue-600 text-sm hover:text-purple-600 transition-colors hover:underline"
                >
                  {supervisor.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center animate-fade-in">👨‍🎓 Team Members</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div
                  className={`w-32 h-32 bg-gradient-to-br ${member.color} rounded-full mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl flex items-center justify-center`}
                >
                  <span className="text-white text-3xl font-bold">
                    {member.name
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600 mb-3">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-blue-600 text-sm hover:text-purple-600 transition-colors hover:underline"
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
