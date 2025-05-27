"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink, Presentation } from "lucide-react"

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
]

export function Documents() {
  const documents = [
    // Topic Assessment
    {
      title: "Topic Assessment",
      date: "Aug 15, 2024",
      members: "All Members",
      color: "from-purple-400 to-pink-500",
      filePath: "/documents/topic-assessment.pdf",
      externalUrl: "https://drive.google.com/file/d/1rkV5UBsUhSi5rgrsyOdNagpw1k_IVxvT/view?usp=drive_link",
      fileSize: "1.2 MB",
      downloadMethod: "external",
      category: "document",
    },
    // Project Proposals (Individual)
    {
      title: "Project Proposal - Karunarathne D. H",
      date: "Aug 30, 2024",
      members: "Karunarathne D. H",
      color: "from-blue-400 to-cyan-500",
      filePath: "/documents/project-proposal-karunarathne.pdf",
      externalUrl: "https://drive.google.com/file/d/1cFMzRaWFPmwkT2r4qcfXW953GycSJtWn/view?usp=drive_link",
      fileSize: "948 KB",
      downloadMethod: "external",
      category: "document",
    },
    {
      title: "Project Proposal - Gunarathna T.M.T.N",
      date: "Aug 30, 2024",
      members: "Gunarathna T.M.T.N",
      color: "from-green-400 to-emerald-500",
      filePath: "/documents/project-proposal-gunarathna.pdf",
      externalUrl: "https://drive.google.com/file/d/13YWozkdA3jYcZujo90PxTQc_QWozQ6Ev/view?usp=drive_link",
      fileSize: "1.6 MB",
      downloadMethod: "external",
      category: "document",
    },
    {
      title: "Project Proposal - Gunawardena B. D",
      date: "Aug 30, 2024",
      members: "Gunawardena B. D",
      color: "from-orange-400 to-red-500",
      filePath: "/documents/project-proposal-gunawardena.pdf",
      externalUrl: "https://drive.google.com/file/d/1ctbAxjXMfTEplE3yiafnIsbixwdiOMrP/view?usp=drive_link",
      fileSize: "728 KB",
      downloadMethod: "external",
      category: "document",
    },
    // Research Paper
    {
      title: "Research Paper",
      date: "Mar 15, 2025",
      members: "All Members",
      color: "from-indigo-400 to-purple-500",
      filePath: "/documents/research-paper.pdf",
      externalUrl: "https://drive.google.com/file/d/1OHkxSPeot5S3zrEEGxgi5-xTd5lT4E23/view?usp=drive_link",
      fileSize: "516 KB",
      downloadMethod: "external",
      category: "document",
    },
    // Final Reports
    {
      title: "Final Report - All Members",
      date: "Apr 12, 2025",
      members: "All Members",
      color: "from-pink-400 to-rose-500",
      filePath: "/documents/final-report-group.pdf",
      externalUrl: "https://drive.google.com/file/d/1ficBmmVC0w42SbdlcFvGBknaKJlLiIiJ/view?usp=drive_link",
      fileSize: "1.7 MB",
      downloadMethod: "external",
      category: "document",
    },
    {
      title: "Final Report - Karunarathne D. H",
      date: "Apr 12, 2025",
      members: "Karunarathne D. H",
      color: "from-teal-400 to-cyan-500",
      filePath: "/documents/final-report-karunarathne.pdf",
      externalUrl: "https://drive.google.com/file/d/1LjTePaPHWYGWotX8CLAn2_KPR6sB5xM9/view?usp=drive_link",
      fileSize: "964 KB",
      downloadMethod: "external",
      category: "document",
    },
    {
      title: "Final Report - Gunarathna T.M.T.N",
      date: "Apr 12, 2025",
      members: "Gunarathna T.M.T.N",
      color: "from-violet-400 to-purple-500",
      filePath: "/documents/final-report-gunarathna.pdf",
      externalUrl: "https://drive.google.com/file/d/1chBH7aW5e-aQKHboeX3cyAC3LRAxgQaq/view?usp=drive_link",
      fileSize: "1 MB",
      downloadMethod: "external",
      category: "document",
    },
    {
      title: "Final Report - Gunawardena B. D",
      date: "Apr 12, 2025",
      members: "Gunawardena B. D",
      color: "from-emerald-400 to-green-500",
      filePath: "/documents/final-report-gunawardena.pdf",
      externalUrl: "https://drive.google.com/file/d/1rShOm3S8vPIWtg7zfqXL--C00-l4D_4c/view?usp=drive_link",
      fileSize: "1.3 MB",
      downloadMethod: "external",
      category: "document",
    },
  ]

  const presentations = [
    {
      title: "Project Proposal Presentation",
      date: "Aug 30, 2024",
      members: "All Members",
      color: "from-blue-400 to-indigo-500",
      filePath: "/presentations/project-proposal-presentation.pptx",
      externalUrl: "https://docs.google.com/presentation/d/1MpmOEBk7cAsIt2QD9q_-IQz43KEfk_jq/edit?usp=drive_link&ouid=103923215809507449603&rtpof=true&sd=true",
      //fileSize: "8.3 MB",
      downloadMethod: "external",
      category: "presentation",
    },
    {
      title: "Progress Presentation 1",
      date: "Dec 4, 2024",
      members: "All Members",
      color: "from-green-400 to-teal-500",
      filePath: "/presentations/progress-presentation-1.pptx",
      externalUrl: "https://docs.google.com/presentation/d/1YWjkd8lABL75Nl1LB7jUnYnr2AlKF0PQ/edit?usp=drive_link&ouid=103923215809507449603&rtpof=true&sd=true",
      //fileSize: "12.1 MB",
      downloadMethod: "external",
      category: "presentation",
    },
    {
      title: "Progress Presentation 2",
      date: "Mar 18, 2025",
      members: "All Members",
      color: "from-orange-400 to-pink-500",
      filePath: "/presentations/progress-presentation-2.pptx",
      externalUrl: "https://docs.google.com/presentation/d/1m9tDiEnVvnfQZ8D3zmXEEexA2yhcnrXW/edit?usp=drive_link&ouid=103923215809507449603&rtpof=true&sd=true",
      //fileSize: "15.7 MB",
      downloadMethod: "external",
      category: "presentation",
    },
    {
      title: "Final Presentation",
      date: "May 27, 2025",
      members: "All Members",
      color: "from-purple-400 to-violet-500",
      filePath: "/presentations/final-presentation.pptx",
      externalUrl: "https://docs.google.com/presentation/d/1KxU1HdWxbr0UnYwZIM4yYlS4QYNE2Sdb/edit?usp=drive_link&ouid=103923215809507449603&rtpof=true&sd=true",
      fileSize: "16.7 MB",
      downloadMethod: "external",
      category: "presentation",
    },
  ]

  const handleDownload = (item: (typeof documents)[0] | (typeof presentations)[0]) => {
    switch (item.downloadMethod) {
      case "direct":
        const link = document.createElement("a")
        link.href = item.filePath
        link.download = `${item.title.replace(/\s+/g, "-").toLowerCase()}.${item.category === "presentation" ? "pptx" : "pdf"}`
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        break

      case "external":
        window.open(item.externalUrl, "_blank")
        break

      default:
        alert(`Download method not configured for: ${item.title}`)
    }
  }

  const getDownloadIcon = (method: string) => {
    switch (method) {
      case "external":
        return <ExternalLink className="h-4 w-4 mr-2" />
      default:
        return <Download className="h-4 w-4 mr-2" />
    }
  }

  const getButtonText = (method: string) => {
    switch (method) {
      case "external":
        return "View Online"
      default:
        return "Download"
    }
  }

  const renderItemCard = (item: any, index: number, isPresentation = false) => {
    const matchedMembers =
      item.members === "All Members"
        ? teamMembers
        : teamMembers.filter(member => item.members.includes(member.name))

    return (
      <div
        key={index}
        className="p-6 rounded-2xl border-l-4 shadow-md hover:shadow-xl transition-all duration-300 group animate-fade-in flex flex-col justify-between h-full"
        style={{
          animationDelay: `${index * 100}ms`,
          borderColor: `var(--tw-gradient-to)`,
          background: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))`,
        }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
          >
            {isPresentation ? (
              <Presentation className="h-8 w-8 text-white" />
            ) : (
              <FileText className="h-8 w-8 text-white" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.date}</p>
            <div className="flex items-center gap-2 mt-1">
              {matchedMembers.map((member, idx) => (
                <img
                  key={idx}
                  src={member.image}
                  alt={member.name}
                  title={member.name}
                  className="w-6 h-6 rounded-full border border-white shadow-sm"
                />
              ))}
              {item.members !== "All Members" && (
                <span className="text-sm text-gray-600">{item.members}</span>
              )}
            </div>

            <p className="text-xs text-white mt-2 font-medium">
              {item.fileSize} • {isPresentation ? "PPTX" : "PDF"}
            </p>
          </div>
        </div>

        <Button
          onClick={() => handleDownload(item)}
          className="w-full mt-auto bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-pink-500 hover:to-indigo-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {item.downloadMethod === "external" ? (
            <ExternalLink className="h-4 w-4 mr-2" />
          ) : (
            <Download className="h-4 w-4 mr-2" />
          )}
          {item.downloadMethod === "external" ? "View Online" : "Download"}
        </Button>
      </div>
    )
  }


  return (
    <section id="documents" className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-indigo-50 to-pink-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center animate-fade-in">
        Documents & Presentations
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-purple-700 mb-8 animate-fade-in">Documents</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {documents.map((doc, index) => renderItemCard(doc, index, false))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-8 animate-fade-in">Presentations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {presentations.map((presentation, index) => renderItemCard(presentation, index, true))}
          </div>
        </div>
      </div>
    </section>
  )

}
