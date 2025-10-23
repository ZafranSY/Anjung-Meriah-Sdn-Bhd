import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Award, Shield, FileCheck } from "lucide-react"

export default function CertificationsPage() {
  const certifications = [
    {
      name: "SEDA RPVSP",
      fullName: "Sustainable Energy Development Authority - Registered PV Service Provider",
      icon: Award,
      description:
        "Official registration with SEDA Malaysia as a qualified solar PV service provider, authorized to design, install, and commission solar PV systems under Malaysia's renewable energy programs.",
      benefits: [
        "Authorized to participate in government solar programs",
        "Qualified for Feed-in Tariff (FiT) and Net Energy Metering (NEM) schemes",
        "Recognized expertise in solar PV systems",
        "Compliance with national renewable energy standards",
      ],
    },
    {
      name: "CIDB G7",
      fullName: "Construction Industry Development Board - Grade 7 Contractor",
      icon: Shield,
      description:
        "The highest contractor grade issued by CIDB Malaysia, certifying our capability to undertake construction projects of unlimited value and complexity.",
      benefits: [
        "Qualified for large-scale and complex projects",
        "Unlimited project value capacity",
        "Proven financial stability and technical capability",
        "Enhanced credibility with clients and partners",
      ],
    },
    {
      name: "ISO 9001:2015",
      fullName: "Quality Management System Certification",
      icon: FileCheck,
      description:
        "International standard for quality management systems, demonstrating our commitment to consistent quality, customer satisfaction, and continuous improvement.",
      benefits: [
        "Systematic quality control processes",
        "Continuous improvement framework",
        "Enhanced customer satisfaction",
        "International recognition and credibility",
      ],
    },
  ]

  const additionalCertifications = [
    "Suruhanjaya Tenaga (Energy Commission) Licensed Electrical Contractor",
    "Green Building Index (GBI) Facilitator",
    "OHSAS 18001 Occupational Health & Safety Management",
    "ISO 14001 Environmental Management System",
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Certifications & Accreditations
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Our certifications reflect our unwavering commitment to quality, safety, and excellence in solar energy
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Core Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading certifications that validate our expertise and commitment to excellence
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <Card key={index} className="border-2 border-border hover:border-solar-yellow transition-colors">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-lg bg-solar-yellow/10 flex items-center justify-center">
                          <Icon className="h-10 w-10 text-solar-yellow" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-navy-900 mb-1">{cert.name}</h3>
                            <p className="text-sm text-muted-foreground">{cert.fullName}</p>
                          </div>
                          <Badge className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90 w-fit">
                            Certified
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{cert.description}</p>
                        <div>
                          <h4 className="font-semibold text-navy-900 mb-3">Key Benefits:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {cert.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-solar-yellow flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Certifications */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">Additional Accreditations</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalCertifications.map((cert, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-solar-yellow flex-shrink-0" />
                    <span className="text-navy-900 font-medium">{cert}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center">Why Certifications Matter</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In the solar energy industry, certifications are more than just credentials—they represent a commitment
                to excellence, safety, and regulatory compliance. Our comprehensive portfolio of certifications ensures
                that every project we undertake meets the highest standards of quality and professionalism.
              </p>
              <p>
                These certifications provide our clients with peace of mind, knowing that their solar investment is
                backed by recognized industry standards and best practices. From initial design to final commissioning,
                our certified processes ensure optimal system performance, safety, and longevity.
              </p>
              <p>
                We continuously invest in maintaining and upgrading our certifications, staying current with evolving
                industry standards and regulations. This commitment to ongoing excellence is what sets Anjung Meriah
                apart as Malaysia's trusted solar energy partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Partner With a Certified Solar Leader</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Our certifications guarantee quality, safety, and compliance for your solar energy project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90 h-11 px-8">
              Request a Quote
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white/10 bg-transparent h-11 px-8">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
