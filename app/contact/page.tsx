"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, MapPin, Clock, Send, MessageSquare, Calendar, FileText, Building2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Operational Office",
      details: ["G-1-10, Jalan PJU 1A/20E", "Dataran Ara Damansara", "47301 Petaling Jaya, Selangor Darul Ehsan"],
      action: "Get Directions",
      href: "https://maps.google.com",
    },
    {
      icon: Building2,
      title: "Registered Office",
      details: [
        "Unit 16-10, Level 16, Tower A",
        "The Vertical II, Bangsar South",
        "59200 Kuala Lumpur, Wilayah Persekutuan",
      ],
      action: "Get Directions",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
      action: null,
      href: null,
    },
  ]

  const services = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Questions about our services or company",
    },
    {
      icon: FileText,
      title: "Request Quote",
      description: "Get a detailed quotation for your project",
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a free site assessment",
    },
    {
      icon: Phone,
      title: "Technical Support",
      description: "Existing system support and maintenance",
    },
  ]

  return (
    <div className="min-h-screen bg-pure-white">
      <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Get in Touch</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              We welcome inquiries for new projects, partnerships, and supply contracts. Our experts are ready to help
              you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-pure-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Can We Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service that best fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 border-gray-200 hover:border-corporate-red transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-lg bg-corporate-red/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-corporate-red" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+60 12-345 6789"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, partnership, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project requirements..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-corporate-red text-white hover:bg-corporate-red-dark"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-corporate-red bg-corporate-red/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-corporate-red mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
                    <div className="bg-white border border-gray-200 rounded p-4 mb-3">
                      <p className="text-sm text-corporate-red font-semibold mb-1">[CLIENT TO PROVIDE]</p>
                      <p className="text-xs text-muted-foreground">
                        A main office phone number and a professional email address (e.g., info@anjungmeriah.com.my).
                        The current 'gmail.com' address should be replaced.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="border-2 border-gray-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-corporate-red/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-corporate-red" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-sm text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                          {info.action && info.href && (
                            <a
                              href={info.href}
                              className="inline-flex items-center text-sm font-semibold text-corporate-red hover:text-corporate-red-dark mt-3"
                            >
                              {info.action} →
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in Dataran Ara Damansara, Petaling Jaya, Selangor
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl h-[400px] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8158!2d101.6!3d3.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnMDAuMCJOIDEwMcKwMzYnMDAuMCJF!5e0!3m2!1sen!2smy!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anjung Meriah Office Location"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-corporate-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your solar energy or construction project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-corporate-red hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
