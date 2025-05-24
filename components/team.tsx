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
      image: "/images/Dulhan2.jpg",
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
    <section id="team" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Team</h2>

        {/* Supervisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center animate-fade-in">👩‍🏫 Supervisors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <img
                    src={supervisor.image}
                    alt={supervisor.name}
                    className="w-full h-full object-cover"
                  />
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

        {/* Team Members */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-8 text-center animate-fade-in">👨‍🎓 Team Members</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
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
  );
}
