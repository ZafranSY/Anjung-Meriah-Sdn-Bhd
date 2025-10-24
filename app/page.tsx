"use client";

import Link from "next/link"; // Ensure Link is imported
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Zap, Award, Building2, Factory, Home, ArrowRight, CheckCircle2, Phone, Mail, Shield } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/solar-panels-on-commercial-building-rooftop-blue-s.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 animate-slide-up">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
              Delivering Total Solutions in Construction & Renewable Energy
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              A 100% Bumiputera, CIDB G7 Contractor and SEDA Registered EPCC Provider delivering design-build, project
              management, and infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-corporate-red text-white hover:bg-corporate-red-dark font-semibold">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
                asChild
              >
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-pure-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-corporate-red transition-all duration-300 hover:-translate-y-1 scroll-animate">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-corporate-red/10 flex items-center justify-center mb-6">
                  <Sun className="h-6 w-6 text-corporate-red" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Renewable Energy (EPCC)</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Full-service Engineering, Procurement, Construction, and Commissioning (EPCC) for solar power plants
                  and rooftop solar.
                </p>
                <Link
                  href="/solutions/services"
                  className="text-corporate-red font-semibold inline-flex items-center hover:text-corporate-red-dark transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-corporate-red transition-all duration-300 hover:-translate-y-1 scroll-animate animate-delay-100">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-corporate-red/10 flex items-center justify-center mb-6">
                  <Building2 className="h-6 w-6 text-corporate-red" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Construction & Infrastructure (G7)</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  CIDB G7-certified for projects of unlimited value, including infrastructure, affordable housing, and
                  commercial construction.
                </p>
                <Link
                  href="/solutions/services"
                  className="text-corporate-red font-semibold inline-flex items-center hover:text-corporate-red-dark transition-colors"
                >
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-corporate-red transition-all duration-300 hover:-translate-y-1 scroll-animate animate-delay-200">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-corporate-red/10 flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-corporate-red" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Project Management</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Turnkey project management from conception to completion for complex energy and construction
                  initiatives.
                </p>
                <Link
                  href="/solutions/services"
                  className="text-corporate-red font-semibold inline-flex items-center hover:text-corporate-red-dark transition-colors"
                >
                  Our Approach <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Anjung Meriah</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner backed by the highest industry certifications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-2 border-corporate-red bg-white text-center scroll-animate">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-corporate-red flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">CIDB G7 Certified</h3>
                <p className="text-sm text-muted-foreground">
                  The highest grade, qualified for projects of any size and value
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-corporate-red bg-white text-center scroll-animate animate-delay-100">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-corporate-red flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">SEDA Registered (RPVSP)</h3>
                <p className="text-sm text-muted-foreground">
                  Fully certified by the Sustainable Energy Development Authority
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-corporate-red bg-white text-center scroll-animate animate-delay-200">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-corporate-red flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">100% Bumiputera</h3>
                <p className="text-sm text-muted-foreground">
                  A qualified partner for key government and private sector projects
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-corporate-red bg-white text-center scroll-animate animate-delay-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-corporate-red flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Proven Experience</h3>
                <p className="text-sm text-muted-foreground">Founded in 1987, with decades of industry experience</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 scroll-animate">
            <div className="text-center mb-8">
              <p className="text-sm text-corporate-red font-semibold mb-2">[CLIENT TO PROVIDE]</p>
              <p className="text-muted-foreground">Official logos for SEDA, CIDB, and 100% Bumiputera graphic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-pure-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Major developments showcasing our expertise in renewable energy and construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: 4MW LSS Plant */}
            <Card className="border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow scroll-animate">
              <div className="relative h-64">
                <img
                  src="/large-scale-ground-mounted-solar-farm-in-open-field.jpg"
                  alt="4MW Large-Scale Solar Plant"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-corporate-red text-white px-4 py-2 rounded-full text-sm font-bold">
                  4MW Capacity
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4MW Large-Scale Solar Plant</h3>
                <p className="text-sm text-corporate-red font-semibold mb-4">Arau, Perlis</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We are the 60% majority stakeholder and partner in the LSS Petra 2024 program to develop a 4MW solar
                  plant in Arau, Perlis.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-corporate-red" />
                    <span>60% Majority Stakeholder</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-corporate-red" />
                    <span>LSS Petra 2024 Program</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-corporate-red" />
                    <span>Full EPCC Services</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4">
                  <p className="text-xs text-corporate-red font-semibold mb-1">[CLIENT TO PROVIDE]</p>
                  <p className="text-xs text-muted-foreground">
                    Current project status, ground-breaking photos, site plans, or artist renderings
                  </p>
                </div>
                {/* --- Updated Link --- */}
                <Button className="w-full bg-corporate-red text-white hover:bg-corporate-red-dark" asChild>
                  <Link href="/projects/4mw-solar-plant">View Project Details</Link>
                </Button>
                 {/* --- End Link Update --- */}
              </CardContent>
            </Card>

            {/* Project 2: RM252M Affordable Housing */}
            <Card className="border-2 border-gray-200 overflow-hidden hover:shadow-xl transition-shadow scroll-animate animate-delay-100">
              <div className="relative h-64">
                <img
                  src="/modern-residential-neighborhood-with-solar-panels-o.jpg"
                  alt="510 Units Affordable Housing"
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-corporate-red text-white px-4 py-2 rounded-full text-sm font-bold">
                  RM252M GDV
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">510 Units Affordable Housing</h3>
                <p className="text-sm text-corporate-red font-semibold mb-4">Kota Setar, Kedah</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Serving as the EPCC and Bumiputera Contractor for the development of 510 affordable homes, complete
                  with rooftop solar, in Kota Setar, Kedah.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-corporate-red" />
                    <span>510 Affordable Homes</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-corporate-red" />
                    <span>Rooftop Solar Integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-corporate-red" />
                    <span>EPCC & Bumiputera Contractor</span>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded p-3 mb-4">
                  <p className="text-xs text-corporate-red font-semibold mb-1">[CLIENT TO PROVIDE]</p>
                  <p className="text-xs text-muted-foreground">
                    Artist renderings, fly-through videos, or site-in-progress photos
                  </p>
                </div>
                 {/* --- Updated Link --- */}
                <Button className="w-full bg-corporate-red text-white hover:bg-corporate-red-dark" asChild>
                  <Link href="/projects/510-affordable-housing">View Project Details</Link>
                </Button>
                {/* --- End Link Update --- */}
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8 scroll-animate">
            <Button
              size="lg"
              variant="outline"
              className="border-corporate-red text-corporate-red hover:bg-corporate-red/10 bg-transparent"
              asChild
            >
              {/* This link now correctly goes to the project list page */}
              <Link href="/projects">
                View Our Full Project Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sectors We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for every industry and application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-200 hover:border-corporate-red transition-colors group scroll-animate">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-red/10 transition-colors">
                  <Home className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Residential</h3>
                <p className="text-sm text-muted-foreground">Home solar systems and housing developments</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-corporate-red transition-colors group scroll-animate animate-delay-100">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-red/10 transition-colors">
                  <Building2 className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Commercial</h3>
                <p className="text-sm text-muted-foreground">Cost-effective solutions for businesses</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-corporate-red transition-colors group scroll-animate animate-delay-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-red/10 transition-colors">
                  <Factory className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Industrial</h3>
                <p className="text-sm text-muted-foreground">Large-scale systems for manufacturing</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-corporate-red transition-colors group scroll-animate animate-delay-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-corporate-red/10 transition-colors">
                  <Sun className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Solar Farms</h3>
                <p className="text-sm text-muted-foreground">Utility-scale renewable energy projects</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-corporate-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center scroll-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Start Your Project?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your solar energy or construction project. Our experts are ready to
            help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-corporate-red hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 bg-transparent"
              asChild
            >
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} // [cite: zafransy/anjung-meriah-sdn-bhd/Anjung-Meriah-Sdn-Bhd-c9a285c64c95d1b29ab8d757fc17d4fbdf37a7ba/app/page.tsx]
