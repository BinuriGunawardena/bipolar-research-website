export function Milestones() {
  const milestones = [
    { date: "Jul 2024", name: "Project Proposal", marks: "0 marks", status: "completed", color: "bg-green-500" },
    { date: "Sep 2024", name: "Topic Assessment Form", marks: "6 marks", status: "completed", color: "bg-green-500" },
    { date: "Dec 2024", name: "Progress Presentation 1", marks: "6 marks", status: "completed", color: "bg-green-500" },
    {
      date: "Mar 2025",
      name: "Progress Presentation 2",
      marks: "18 marks",
      status: "completed",
      color: "bg-green-500",
    },
    { date: "Mar 2025", name: "Research Paper", marks: "10 marks", status: "completed", color: "bg-green-500" },
    { date: "Apr 2025", name: "Final Report", marks: "19 marks", status: "completed", color: "bg-green-500" },
    {
      date: "May 2025",
      name: "Final Presentation & Viva",
      marks: "20 marks",
      status: "completed",
      color: "bg-blue-100",
    },
    { date: "May 2025", name: "Website Assessment", marks: "2 marks", status: "completed", color: "bg-green-500" },

    { date: "Jun 2025", name: "LogBook", marks: "3 marks", status: "completed", color: "bg-green-500" },
  ]

  return (
    <section id="milestones" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-serif tracking-tight drop-shadow-md animate-slide-in-down"
        >
          Project Milestones
        </h2>


        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6 p-6 bg-white rounded-2xl shadow-lg border-l-4 hover:shadow-2xl transition-all duration-300 group animate-fade-in"
              style={{
                borderColor:
                  milestone.status === "completed"
                    ? "#34D399" // green
                    : milestone.status === "current"
                      ? "#60A5FA" // blue
                      : "#D1D5DB", // gray
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Left side - Icon + Info */}
              <div className="flex items-center gap-6">
                {/* Color Dot */}
                <div
                  className={`w-4 h-4 rounded-full animate-pulse ${milestone.status === "completed"
                      ? "bg-green-500"
                      : milestone.status === "current"
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                />
                <div>
                  <div className="text-sm text-gray-500 font-semibold">{milestone.date}</div>
                  <div className="text-lg text-gray-900 font-medium group-hover:text-blue-700 transition-colors">
                    {milestone.name}
                  </div>
                </div>
              </div>

              {/* Right side - Status + Marks */}
              <div className="flex items-center gap-4 min-w-[12rem] justify-end">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold text-center shadow-sm ${milestone.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : milestone.status === "current"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                >
                  {milestone.status.toUpperCase()}
                </span>
                {/* <span className="text-purple-600 font-bold text-sm">{milestone.marks}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

}
