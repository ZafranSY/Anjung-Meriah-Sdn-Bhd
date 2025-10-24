"use client"

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { MapPin, Calendar, Zap, Building2, Home, Factory, Sun, ArrowRight } from "lucide-react";

// Import data and functions using the ALIAS
import { projects, generateSlug, Project } from "@/lib/projectsData";

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", icon: Building2 },
    { id: "residential", label: "Residential", icon: Home },
    { id: "commercial", label: "Commercial", icon: Building2 },
    { id: "industrial", label: "Industrial", icon: Factory },
    { id: "solar-farm", label: "Solar Farms", icon: Sun },
  ];

  // Use the imported projects array
  const filteredProjects = selectedFilter === "all" ? projects : projects.filter((p) => p.sector === selectedFilter);

  const stats = [
    { label: "Total Projects", value: "500+", icon: Building2 },
    { label: "Installed Capacity", value: "100+ MW", icon: Zap },
    { label: "CO2 Reduction", value: "75,000 tons/year", icon: Sun },
    { label: "Client Satisfaction", value: "98%", icon: Building2 },
  ];

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
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6 text-solar-yellow" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-navy-50 sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-navy-900 text-white"
                      : "bg-white text-navy-900 hover:bg-navy-900/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, projIndex) => {
              // *** Defensive check for project object ***
              if (!project) {
                 console.warn(`Project at index ${projIndex} is undefined during rendering.`);
                 return null; // Skip rendering this item
              }
              const projectSlug = generateSlug(project.name);
              return (
                <Card key={project.id || projIndex} className="border-none shadow-lg hover:shadow-xl transition-shadow group"> {/* Added fallback key */}
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name || 'Project Image'}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90">
                          {project.capacity || 'N/A'} {/* Added fallback */}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-navy-900 mb-2 text-balance">{project.name || 'Unnamed Project'}</h3> {/* Added fallback */}
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{project.location || 'Unknown Location'}</span> {/* Added fallback */}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{project.year || 'N/A'}</span> {/* Added fallback */}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{project.description || 'No description available.'}</p> {/* Added fallback */}
                      <div className="space-y-2 mb-4">
                        {/* *** Defensive check for highlights array *** */}
                        {Array.isArray(project.highlights) ? (
                            project.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-solar-yellow flex-shrink-0" />
                                <span className="text-muted-foreground">{highlight}</span>
                              </div>
                            ))
                         ) : (
                             <p className="text-sm text-muted-foreground italic">No highlights available.</p>
                             // *** Log if highlights are missing ***
                             // console.warn(`Project "${project.name}" (ID: ${project.id}) is missing highlights array.`)
                         )}
                      </div>
                       <Button
                         variant="outline"
                         className="w-full border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent mt-auto"
                         asChild
                       >
                         <Link href={`/projects/${encodeURIComponent(projectSlug)}`}>
                           View Details
                           <ArrowRight className="ml-2 h-4 w-4" />
                         </Link>
                       </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
  );
}