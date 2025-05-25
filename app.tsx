"use client"

import { AppSidebar } from "./components/app-sidebar"
import { Header } from "./components/header"
import { Introduction } from "./components/introduction"
import { Methodology } from "./components/methodology"
import { Technologies } from "./components/technologies"
import { Milestones } from "./components/milestones"
import { Documents } from "./components/documents"
import { Team } from "./components/team"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function App() {
  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-white/90 backdrop-blur-sm z-40 transition-all duration-300">
            <SidebarTrigger className="-ml-1 hover:bg-blue-50 transition-colors duration-300" />
            
          </header>
          <main className="flex-1">
            <Header />
            <Introduction />
            <Methodology />
            <Technologies />
            <Milestones />
            <Documents />
            <Team />
            <Contact />
            <Footer />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  )
}
