import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export function AboutUs() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Project Lead & Full-Stack Developer",
      image: "/placeholder.svg?height=200&width=200",
      email: "john.doe@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer & Frontend Developer",
      image: "/placeholder.svg?height=200&width=200",
      email: "jane.smith@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Mike Johnson",
      role: "Backend Developer & Data Analyst",
      image: "/placeholder.svg?height=200&width=200",
      email: "mike.johnson@university.edu",
      linkedin: "#",
      github: "#",
    },
    {
      name: "Sarah Wilson",
      role: "Research Specialist & QA Tester",
      image: "/placeholder.svg?height=200&width=200",
      email: "sarah.wilson@university.edu",
      linkedin: "#",
      github: "#",
    },
  ]

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">About Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-blue-200 hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-200"
                />
                <h3 className="font-bold text-blue-800 text-lg mb-2">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-4 leading-relaxed">{member.role}</p>
                <div className="flex justify-center gap-3">
                  <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-800">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.github} className="text-blue-600 hover:text-blue-800">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
