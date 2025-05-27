"use client"

import type * as React from "react"
import {
  Brain, FileText, Users, Phone, Target, Wrench, Calendar, Home, Smartphone, Box
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
  { title: "Components", url: "#main-components", icon: Box, color: "text-green-600" },
  { title: "Methodology", url: "#methodology", icon: Target, color: "text-green-600" },
  { title: "Technologies", url: "#technologies", icon: Wrench, color: "text-orange-600" },
  { title: "Milestones", url: "#milestones", icon: Calendar, color: "text-red-600" },
  { title: "Documents", url: "#documents", icon: FileText, color: "text-indigo-600" },
  { title: "Team", url: "#team", icon: Users, color: "text-pink-600" },
  { title: "Download App", url: "#download", icon: Smartphone, color: "text-yellow-400" },
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
      <SidebarHeader className="p-4 bg-[#0D0B23] shadow-md">
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="flex items-center gap-3">
            <img
              src="/images/BipoLink.png" 
              alt="BipoLink Logo"
              className="h-10 w-10 object-contain"
            />
          </div>
          <span className="font-bold text-white text-lg tracking-wide">BipoLink</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-gradient-to-b from-[#1a1c33] via-[#212443] to-[#292b4d] text-white shadow-md">
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
                    className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-[1.03] hover:shadow"
                  >
                    <item.icon className={`h-5 w-5 ${item.color} transition-transform duration-200 group-hover:scale-110`} />
                    <span className="text-sm font-medium text-white group-hover:text-yellow-100 transition-colors">
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
