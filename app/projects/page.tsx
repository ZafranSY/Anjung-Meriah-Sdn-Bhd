"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Zap, Building2, Home, Factory, Sun, ArrowRight } from "lucide-react"

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all")

  const projects = [
    {
      id: 1,
      name: "Sunway Pyramid Shopping Mall",
      location: "Petaling Jaya, Selangor",
      sector: "commercial",
      capacity: "1.2 MW",
      year: "2024",
      image: "/large-shopping-mall-rooftop-with-extensive-solar-pa.jpg",
      description:
        "Large-scale rooftop solar installation on one of Malaysia's premier shopping destinations, reducing operational costs and carbon footprint.",
      highlights: [
        "1,200 kW solar PV system",
        "3,000+ solar panels installed",
        "Annual savings: RM 450,000",
        "CO2 reduction: 850 tons/year",
      ],
    },
    {
      id: 2,
      name: "Proton Manufacturing Facility",
      location: "Shah Alam, Selangor",
      sector: "industrial",
      capacity: "3.5 MW",
      year: "2023",
      image: "/large-automotive-manufacturing-plant-with-solar-pan.jpg",
      description:
        "Comprehensive solar solution for automotive manufacturing, combining rooftop and ground-mounted systems for maximum energy generation.",
      highlights: [
        "3,500 kW hybrid system",
        "8,500+ solar panels",
        "Annual savings: RM 1.2M",
        "CO2 reduction: 2,400 tons/year",
      ],
    },
    {
      id: 3,
      name: "Setia Eco Park Residential",
      location: "Shah Alam, Selangor",
      sector: "residential",
      capacity: "250 kW",
      year: "2024",
      image: "/modern-residential-neighborhood-with-solar-panels-o.jpg",
      description:
        "Community solar project serving 50 residential units with individual rooftop systems and centralized monitoring.",
      highlights: ["50 residential units", "5 kW per household", "NEM 3.0 integration", "Smart monitoring system"],
    },
    {
      id: 4,
      name: "KLIA Cargo Terminal",
      location: "Sepang, Selangor",
      sector: "commercial",
      capacity: "2.8 MW",
      year: "2023",
      image: "/modern-airport-cargo-terminal-with-solar-panels-on.jpg",
      description:
        "Airport cargo facility solar installation with advanced monitoring and energy management systems for 24/7 operations.",
      highlights: ["2,800 kW system", "6,800 solar panels", "Battery storage: 500 kWh", "Annual savings: RM 980,000"],
    },
    {
      id: 5,
      name: "Cyberjaya Solar Farm",
      location: "Cyberjaya, Selangor",
      sector: "solar-farm",
      capacity: "10 MW",
      year: "2022",
      image: "/large-scale-ground-mounted-solar-farm-in-open-field.jpg",
      description:
        "Utility-scale solar farm providing clean energy to the national grid, supporting Malaysia's renewable energy targets.",
      highlights: ["10 MW capacity", "25,000+ solar panels", "Powers 3,000 homes", "CO2 reduction: 7,500 tons/year"],
    },
    {
      id: 6,
      name: "Gleneagles Hospital Kuala Lumpur",
      location: "Kuala Lumpur",
      sector: "commercial",
      capacity: "850 kW",
      year: "2024",
      image: "/modern-hospital-building-with-solar-panels-on-rooft.jpg",
      description:
        "Healthcare facility solar installation with backup battery systems ensuring uninterrupted power for critical operations.",
      highlights: ["850 kW solar system", "Battery backup: 300 kWh", "24/7 monitoring", "Annual savings: RM 320,000"],
    },
    {
      id: 7,
      name: "Nestlé Manufacturing Plant",
      location: "Chembong, Negeri Sembilan",
      sector: "industrial",
      capacity: "4.2 MW",
      year: "2023",
      image: "/food-processing-industrial-facility-with-extensive.jpg",
      description:
        "Food processing facility with comprehensive solar solution, reducing energy costs and supporting sustainability goals.",
      highlights: ["4,200 kW system", "10,000+ panels", "Annual savings: RM 1.5M", "CO2 reduction: 3,000 tons/year"],
    },
    {
      id: 8,
      name: "Taylor's University Lakeside Campus",
      location: "Subang Jaya, Selangor",
      sector: "commercial",
      capacity: "1.5 MW",
      year: "2024",
      image: "/modern-university-campus-buildings-with-solar-panel.jpg",
      description:
        "Educational institution solar project serving multiple campus buildings with integrated energy management system.",
      highlights: ["1,500 kW capacity", "Multiple buildings", "Educational monitoring", "Annual savings: RM 550,000"],
    },
    {
      id: 9,
      name: "Luxury Villa - Damansara Heights",
      location: "Kuala Lumpur",
      sector: "residential",
      capacity: "15 kW",
      year: "2024",
      image: "/luxury-modern-home-with-rooftop-solar-panel-install.jpg",
      description:
        "Premium residential solar installation with battery storage and smart home integration for complete energy independence.",
      highlights: ["15 kW solar system", "Tesla Powerwall 2", "Smart home integration", "90% energy independence"],
    },
    {
      id: 10,
      name: "Kulim Hi-Tech Park Solar Farm",
      location: "Kulim, Kedah",
      sector: "solar-farm",
      capacity: "15 MW",
      year: "2022",
      image: "/massive-solar-farm-installation-with-thousands-of-p.jpg",
      description:
        "Large-scale solar farm in industrial park, providing renewable energy to high-tech manufacturing facilities.",
      highlights: [
        "15 MW capacity",
        "37,500 solar panels",
        "Powers industrial park",
        "CO2 reduction: 11,000 tons/year",
      ],
    },
    {
      id: 11,
      name: "AEON Mall Bukit Tinggi",
      location: "Klang, Selangor",
      sector: "commercial",
      capacity: "950 kW",
      year: "2023",
      image: "/shopping-mall-rooftop-solar-installation-with-parki.jpg",
      description:
        "Retail mall solar installation with carport solar structures, maximizing energy generation and providing shaded parking.",
      highlights: [
        "950 kW total capacity",
        "Rooftop + carport solar",
        "2,300 solar panels",
        "Annual savings: RM 360,000",
      ],
    },
    {
      id: 12,
      name: "Eco World Warehouse & Logistics",
      location: "Port Klang, Selangor",
      sector: "industrial",
      capacity: "2.2 MW",
      year: "2024",
      image: "/large-warehouse-and-logistics-facility-with-solar-p.jpg",
      description:
        "Logistics facility with extensive rooftop solar, reducing operational costs for cold storage and warehouse operations.",
      highlights: ["2,200 kW system", "5,500 solar panels", "Cold storage optimized", "Annual savings: RM 780,000"],
    },
  ]

  const filters = [
    { id: "all", label: "All Projects", icon: Building2 },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building2 },
    { id: "industrial", label: "Industrial", icon: Factory },
    { id: "solar-farm", label: "Solar Farms", icon: Sun },
  ]

  const filteredProjects = selectedFilter === "all" ? projects : projects.filter((p) => p.sector === selectedFilter)

  const stats = [
    { label: "Total Projects", value: "500+", icon: Building2 },
    { label: "Installed Capacity", value: "100+ MW", icon: Zap },
    { label: "CO2 Reduction", value: "75,000 tons/year", icon: Sun },
    { label: "Client Satisfaction", value: "98%", icon: Building2 },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Our Projects</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Explore our portfolio of successful solar installations across Malaysia, from residential rooftops to
              utility-scale solar farms.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-solar-yellow" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-navy-50 sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => {
              const Icon = filter.icon
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-navy-900 text-white"
                      : "bg-white text-navy-900 hover:bg-navy-900/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {filter.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90">
                        {project.capacity}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-900 mb-2 text-balance">{project.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    <div className="space-y-2 mb-4">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-solar-yellow" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Solar Project?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have made the switch to clean, renewable solar energy with Anjung
            Meriah.
          </p>
          <Button size="lg" className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90">
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
