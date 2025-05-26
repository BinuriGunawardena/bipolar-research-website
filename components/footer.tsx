import { Brain, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400 animate-pulse" />
              <div>
                <h3 className="text-xl font-bold">Bipolar Disorder Tracker</h3>
                <p className="text-blue-200 text-sm">Research Project</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Advancing mental health care through innovative technology and research-driven solutions.
            </p>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#introduction" className="hover:text-blue-400 transition-colors duration-300 hover:underline">
                  Introduction
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-purple-400 transition-colors duration-300 hover:underline">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-green-400 transition-colors duration-300 hover:underline">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#documents" className="hover:text-pink-400 transition-colors duration-300 hover:underline">
                  Documents
                </a>
              </li>
              <li>
                <a href="#download-app" className="hover:text-pink-400 transition-colors duration-300 hover:underline">
                  App
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: "400ms" }}>
            <h4 className="text-lg font-semibold mb-4 text-purple-300">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300">
                <Mail className="h-4 w-4" />
                <span className="text-sm">bipolar.tracker@sliit.lk</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-300">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+94 11 754 4801</span>
              </div>
              <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Sri Lanka Institute of Information Technology</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="border-t border-gray-700 mt-8 pt-8 text-center animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <p className="text-gray-400">© {currentYear} Bipolar Disorder Tracker. Final Year Research Project.</p>
        </div>
      </div>
    </footer>
  )
}
