"use client"

import type * as React from "react"
import {
  Brain, FileText, Users, Phone, Target, Wrench, Calendar, Home,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "#home", icon: Home, color: "text-purple-600" },
  { title: "Introduction", url: "#introduction", icon: Brain, color: "text-blue-600" },
  { title: "Methodology", url: "#methodology", icon: Target, color: "text-green-600" },
  { title: "Technologies", url: "#technologies", icon: Wrench, color: "text-orange-600" },
  { title: "Milestones", url: "#milestones", icon: Calendar, color: "text-red-600" },
  { title: "Documents", url: "#documents", icon: FileText, color: "text-indigo-600" },
  { title: "Team", url: "#team", icon: Users, color: "text-pink-600" },
  { title: "Contact", url: "#contact", icon: Phone, color: "text-teal-600" },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="bg-white/10 p-2 rounded-full shadow-inner backdrop-blur-sm">
            <Brain className="h-6 w-6 text-white animate-pulse" />
          </div>
          <span className="font-bold text-white text-lg tracking-wide">Bipolar Tracker</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-gray-50 via-white to-slate-50 shadow-inner">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item, index) => (
                <SidebarMenuItem
                  key={item.title}
                  className="animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <SidebarMenuButton
                    onClick={() => scrollToSection(item.url)}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md hover:scale-[1.02]"
                  >
                    <item.icon className={`h-5 w-5 ${item.color} transition-transform duration-200 group-hover:scale-110`} />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item.title}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
