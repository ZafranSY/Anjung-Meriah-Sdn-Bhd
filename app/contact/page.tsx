"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns" // For formatting date

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react" // Renamed Calendar icon
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

import {
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  FileText,
  Building2,
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"

// --- Zod Schema for Validation ---
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number seems too short." }),
  company: z.string().optional(),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  preferredDate: z.date().optional(),
  preferredTime: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      preferredDate: undefined,
      preferredTime: "",
    },
  })

  // --- Handle Form Submission ---
  const onSubmit = async (data: FormData) => {
    setSubmissionStatus("submitting")
    console.log("Form data:", data)

    // --- !!! BACKEND INTEGRATION POINT !!! ---
    // Here you MUST send the 'data' object to your backend API endpoint
    // The backend endpoint will handle securely sending the email.
    try {
      // Example: Replace with your actual API call
      // const response = await fetch('/api/send-contact-email', { // Your API route
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.message || 'Failed to send message');
      // }

      // --- Simulate API call success (REMOVE THIS IN PRODUCTION) ---
      await new Promise(resolve => setTimeout(resolve, 1500))
      console.log("Simulated success")
      // --- End Simulation ---

      setSubmissionStatus("success")
      form.reset()
      setSelectedDate(undefined)
      setTimeout(() => setSubmissionStatus("idle"), 4000)

    } catch (error) {
      console.error("Form submission error:", error)
      setSubmissionStatus("error")
       setTimeout(() => setSubmissionStatus("idle"), 5000)
    }
     // --- End Backend Integration Point ---
  }

  // --- Contact Info (Replace Placeholders) ---
  const contactInfo = [
    {
      icon: MapPin,
      title: "Operational Office",
      details: ["G-1-10, Jalan PJU 1A/20E", "Dataran Ara Damansara", "47301 Petaling Jaya, Selangor Darul Ehsan"],
      action: "Get Directions",
      href: "http://googleusercontent.com/maps.google.com/search/?api=1&query=G-1-10%2C+Jalan+PJU+1A%2F20E%2C+Dataran+Ara+Damansara%2C+47301+Petaling+Jaya%2C+Selangor+Darul+Ehsan", // Search URL
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
      href: "http://googleusercontent.com/maps.google.com/search/?api=1&query=Unit+16-10%2C+Level+16%2C+Tower+A%2C+The+Vertical+II%2C+Bangsar+South%2C+59200+Kuala+Lumpur%2C+Wilayah+Persekutuan", // Search URL
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
      icon: CalendarIcon,
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
      {/* Hero Section */}
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
          {/* How Can We Help Section */}
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
            <Card id="form" className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Fields */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" {...form.register("name")} />
                    {form.formState.errors.name && <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" {...form.register("email")} />
                     {form.formState.errors.email && <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>}
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+60 12-345 6789" {...form.register("phone")} />
                     {form.formState.errors.phone && <p className="text-sm text-red-600">{form.formState.errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name (Optional)</Label>
                    <Input id="company" placeholder="Your Company" {...form.register("company")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Project inquiry, partnership, etc." {...form.register("subject")} />
                     {form.formState.errors.subject && <p className="text-sm text-red-600">{form.formState.errors.subject.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Tell us about your project requirements..." rows={5} {...form.register("message")} />
                     {form.formState.errors.message && <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>}
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="preferredDate">Preferred Callback Date (Optional)</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal border-input dark:bg-input/30",
                                    !selectedDate && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={selectedDate}
                                onSelect={(date) => {
                                     setSelectedDate(date);
                                     form.setValue("preferredDate", date, { shouldValidate: true });
                                }}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        {form.formState.errors.preferredDate && <p className="text-sm text-red-600">{form.formState.errors.preferredDate.message}</p>}
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="preferredTime">Preferred Callback Time (Optional)</Label>
                        <Input id="preferredTime" type="time" {...form.register("preferredTime")} />
                         {form.formState.errors.preferredTime && <p className="text-sm text-red-600">{form.formState.errors.preferredTime.message}</p>}
                     </div>
                  </div>

                  {/* Submission Button & Feedback */}
                  <div className="space-y-2 pt-2">
                     <Button
                        type="submit"
                        className="w-full bg-corporate-red text-white hover:bg-corporate-red-dark transition-all duration-300 ease-in-out"
                        size="lg"
                        disabled={submissionStatus === 'submitting'}
                      >
                        {submissionStatus === 'submitting' && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                        {submissionStatus !== 'submitting' && submissionStatus !== 'success' && <Send className="mr-2 h-5 w-5" />}
                        {submissionStatus === 'success' && <CheckCircle2 className="mr-2 h-5 w-5 animate-in fade-in zoom-in duration-500" />}
                        {submissionStatus === 'error' && <AlertCircle className="mr-2 h-5 w-5" />}

                        {submissionStatus === 'submitting' ? 'Sending...' :
                         submissionStatus === 'success' ? 'Message Sent!' :
                         submissionStatus === 'error' ? 'Send Failed - Try Again' :
                         'Send Message'}
                      </Button>

                      {submissionStatus === 'success' && (
                         <p className="text-sm text-center text-green-600 animate-in fade-in duration-300">Thank you! We'll get back to you soon.</p>
                      )}
                       {submissionStatus === 'error' && (
                         <p className="text-sm text-center text-red-600 animate-in fade-in duration-300">Something went wrong. Please check your details or try again later.</p>
                      )}
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info Side */}
             <div className="space-y-6">
              <Card className="border-2 border-corporate-red bg-corporate-red/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Phone className="h-8 w-8 text-corporate-red mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">Contact Information</h3>
                    {/* --- TODO: Add actual phone and email --- */}
                    <div className="bg-white border border-gray-200 rounded p-4 mb-3">
                      <p className="text-sm text-corporate-red font-semibold mb-1">[CLIENT TO PROVIDE]</p>
                      <p className="text-xs text-muted-foreground">
                        Please provide the main office phone number and a professional email address (e.g., info@anjungmeriah.com.my).
                      </p>
                       {/* Example:
                       <a href="tel:+60123456789" className="block text-sm text-gray-900 hover:text-corporate-red mt-2 font-medium">+60 12-345 6789</a>
                       <a href="mailto:info@anjungmeriah.com.my" className="block text-sm text-gray-900 hover:text-corporate-red font-medium">info@anjungmeriah.com.my</a>
                       */}
                    </div>
                     {/* --- End TODO --- */}
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
                              href={info.href} // Use the correct search URLs inserted here
                              target="_blank"
                              rel="noopener noreferrer"
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

      {/* Map Section - UPDATED SRC */}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8158!2d101.6!3d3.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnMDAuMCJOIDEwMcKwMzYnMDAuMCJF!5e0!3m2!1sen!2smy!4v12345678900" // <-- Updated with the URL you provided
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
            <Button
              size="lg"
              className="bg-white text-corporate-red hover:bg-gray-100"
              asChild
            >
              <a href="tel:+60123456789"> {/* TODO: Replace with actual phone number */}
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
               <Link href="/contact#form">
                <CalendarIcon className="mr-2 h-5 w-5" />
                Schedule Site Visit
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}