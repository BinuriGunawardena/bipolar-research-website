export function Milestones() {
  const milestones = [
    { date: "Aug 2024", name: "Project Proposal", marks: "6 marks", status: "completed", color: "bg-green-500" },
    { date: "Dec 2024", name: "Progress Presentation 1", marks: "6 marks", status: "completed", color: "bg-green-500" },
    {
      date: "Mar 2025",
      name: "Progress Presentation 2",
      marks: "18 marks",
      status: "completed",
      color: "bg-green-500",
    },
    { date: "Mar 2025", name: "Research Paper", marks: "10 marks", status: "completed", color: "bg-green-500" },
    { date: "Apr 2025", name: "Final Report", marks: "19 marks", status: "completed", color: "bg-blue-500" },
    { date: "May 2025", name: "Website Assessment", marks: "2 marks", status: "current", color: "bg-blue-100" },
    {
      date: "May 2025",
      name: "Final Presentation & Viva",
      marks: "20 marks",
      status: "current",
      color: "bg-blue-100",
    },
    { date: "Jun 2025", name: "LogBook", marks: "3 marks", status: "upcoming", color: "bg-gray-300" },
  ]

  return (
    <section id="milestones" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Milestones</h2>
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                <div
                  className={`w-4 h-4 rounded-full animate-pulse ${milestone.status === "completed"
                      ? "bg-green-500"
                      : milestone.status === "current"
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                />

                <span className="text-sm text-gray-500 min-w-[5rem] font-medium">{milestone.date}</span>
                <span className="text-gray-900 font-medium">{milestone.name}</span>
              </div>
              <div className="flex items-center justify-end gap-4 min-w-[12rem]">
                <div className="w-[90px]">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium inline-block text-center ${milestone.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : milestone.status === "current"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-500"
                      }`}
                  >
                    {milestone.status}
                  </span>
                </div>
                <div className="w-[70px] text-right">
                  <span className="text-purple-600 font-bold text-sm">{milestone.marks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
