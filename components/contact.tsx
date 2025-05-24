"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const response = await fetch("https://formspree.io/f/xrbqwzke", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    }),
  })

  if (response.ok) {
    alert("Thank you for your message!")
    setFormData({ name: "", email: "", message: "" })
  } else {
    alert("Something went wrong. Please try again.")
  }
}


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-light text-gray-900 mb-16 text-center animate-fade-in">Contact</h2>
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-slide-in">
              <Input
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "100ms" }}>
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
            <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
              <Textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-slide-in"
              style={{ animationDelay: "300ms" }}
            >
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-600 text-sm">bipolar.tracker@sliit.lk</p>
            </div>
            <div className="text-center group animate-fade-in" style={{ animationDelay: "500ms" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-600 text-sm">+94 11 754 4801</p>
            </div>
            <div className="text-center group animate-fade-in" style={{ animationDelay: "600ms" }}>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="text-gray-600 text-sm">Sri Lanka Institute of Information Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
