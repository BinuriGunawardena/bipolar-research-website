"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink, Presentation } from "lucide-react"

export function Documents() {
  const documents = [
    // Topic Assessment
    {
      title: "Topic Assessment",
      date: "Aug 15, 2024",
      members: "All Members",
      color: "from-purple-400 to-pink-500",
      filePath: "/documents/topic-assessment.pdf",
      externalUrl: "https://drive.google.com/file/d/your-file-id/view",
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
      date: "Apr 20, 2025",
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
      date: "Apr 20, 2025",
      members: "Karunarathne D. H",
      color: "from-teal-400 to-cyan-500",
      filePath: "/documents/final-report-karunarathne.pdf",
      externalUrl: "https://drive.google.com/file/d/1rShOm3S8vPIWtg7zfqXL--C00-l4D_4c/view?usp=drive_link",
      fileSize: "964 KB",
      downloadMethod: "external",
      category: "document",
    },
    {
      title: "Final Report - Gunarathna T.M.T.N",
      date: "Apr 20, 2025",
      members: "Gunarathna T.M.T.N",
      color: "from-violet-400 to-purple-500",
      filePath: "/documents/final-report-gunarathna.pdf",
      externalUrl: "https://drive.google.com/file/d/1LjTePaPHWYGWotX8CLAn2_KPR6sB5xM9/view?usp=drive_link",
      fileSize: "1 MB",
      downloadMethod: "direct",
      category: "document",
    },
    {
      title: "Final Report - Gunawardena B. D",
      date: "Apr 20, 2025",
      members: "Gunawardena B. D",
      color: "from-emerald-400 to-green-500",
      filePath: "/documents/final-report-gunawardena.pdf",
      externalUrl: "https://drive.google.com/file/d/1chBH7aW5e-aQKHboeX3cyAC3LRAxgQaq/view?usp=drive_link",
      fileSize: "1.3 MB",
      downloadMethod: "direct",
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
      externalUrl: "https://drive.google.com/drive/folders/1mLruYb1GU59hDcPHyvrwu7A_pSIBsKCw?usp=drive_link",
      //fileSize: "8.3 MB",
      downloadMethod: "external",
      category: "presentation",
    },
    {
      title: "Progress Presentation 1",
      date: "Dec 15, 2024",
      members: "All Members",
      color: "from-green-400 to-teal-500",
      filePath: "/presentations/progress-presentation-1.pptx",
      externalUrl: "https://drive.google.com/drive/folders/10XnJ4xcbuj0OSzFRCeZMWhC-D16pmXKK?usp=drive_link",
      //fileSize: "12.1 MB",
      downloadMethod: "external",
      category: "presentation",
    },
    {
      title: "Progress Presentation 2",
      date: "Mar 15, 2025",
      members: "All Members",
      color: "from-orange-400 to-pink-500",
      filePath: "/presentations/progress-presentation-2.pptx",
      externalUrl: "https://drive.google.com/drive/folders/1stH9m84wl2Risdmh5IKZBV9Rwfjw0ziF?usp=drive_link",
      //fileSize: "15.7 MB",
      downloadMethod: "external",
      category: "presentation",
    },
    {
      title: "Final Presentation",
      date: "May 20, 2025",
      members: "All Members",
      color: "from-purple-400 to-violet-500",
      filePath: "/presentations/final-presentation.pptx",
      externalUrl: "https://drive.google.com/file/d/your-presentation-id-4/view",
      fileSize: "To be Submitted",
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

  const renderItemCard = (item: any, index: number, isPresentation = false) => (
    <div
      key={index}
      className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group animate-slide-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
        >
          {isPresentation ? (
            <Presentation className="h-6 w-6 text-white" />
          ) : (
            <FileText className="h-6 w-6 text-white" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500">
            {item.date} • {item.members}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            {item.fileSize} • {isPresentation ? "PPTX" : "PDF"}
          </p>
        </div>
      </div>
      <Button
        onClick={() => handleDownload(item)}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {getDownloadIcon(item.downloadMethod)}
        {getButtonText(item.downloadMethod)}
      </Button>
    </div>
  )

  return (
    <section id="documents" className="py-20 px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">
          Documents & Presentations
        </h2>

        {/* Documents Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-medium text-gray-800 mb-8 animate-fade-in">📄 Documents</h3>
          <div className="space-y-6">{documents.map((doc, index) => renderItemCard(doc, index, false))}</div>
        </div>

        {/* Presentations Section */}
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-8 animate-fade-in">🎯 Presentations</h3>
          <div className="space-y-6">
            {presentations.map((presentation, index) => renderItemCard(presentation, index, true))}
          </div>
        </div>
      </div>
    </section>
  )
}
