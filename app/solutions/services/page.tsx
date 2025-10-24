import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Lightbulb,
  ShoppingCart,
  Hammer,
  Power,
  Settings,
  FileCheck,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      name: "Engineering & Design",
      icon: Lightbulb,
      description: "Comprehensive system design and engineering services",
      details: [
        "Site assessment and feasibility studies",
        "Custom system design and optimization",
        "Energy yield analysis and modeling",
        "Structural and electrical engineering",
        "Regulatory compliance and permitting",
        "3D modeling and visualization",
      ],
      benefits: [
        "Optimized system performance",
        "Regulatory compliance assured",
        "Accurate energy projections",
        "Risk mitigation",
      ],
    },
    {
      name: "Procurement",
      icon: ShoppingCart,
      description: "Strategic sourcing of premium solar components",
      details: [
        "Tier-1 manufacturer partnerships",
        "Quality assurance and testing",
        "Competitive pricing through bulk purchasing",
        "Supply chain management",
        "Warranty coordination",
        "Equipment logistics and delivery",
      ],
      benefits: ["Cost-effective solutions", "Quality guaranteed", "Timely delivery", "Comprehensive warranties"],
    },
    {
      name: "Construction & Installation",
      icon: Hammer,
      description: "Professional installation by certified technicians",
      details: [
        "Experienced installation teams",
        "Safety-first approach (OHSAS certified)",
        "Quality workmanship and materials",
        "Minimal disruption to operations",
        "Structural mounting and integration",
        "Electrical wiring and connections",
      ],
      benefits: ["Safe installation practices", "Quality craftsmanship", "On-time completion", "Minimal downtime"],
    },
    {
      name: "Commissioning & Testing",
      icon: Power,
      description: "Thorough system testing and activation",
      details: [
        "Comprehensive system testing",
        "Performance verification",
        "Grid connection and synchronization",
        "Safety inspections and certifications",
        "Documentation and handover",
        "Client training and orientation",
      ],
      benefits: ["Verified performance", "Safe operation", "Complete documentation", "Confident system operation"],
    },
    {
      name: "Operations & Maintenance",
      icon: Settings,
      description: "Ongoing support for optimal system performance",
      details: [
        "Regular preventive maintenance",
        "Performance monitoring and reporting",
        "Cleaning and inspection services",
        "Troubleshooting and repairs",
        "Component replacement",
        "System optimization and upgrades",
      ],
      benefits: ["Maximum uptime", "Extended system life", "Optimal performance", "Peace of mind"],
    },
    {
      name: "Consulting & Advisory",
      icon: FileCheck,
      description: "Expert guidance for solar investment decisions",
      details: [
        "Financial analysis and ROI modeling",
        "Incentive and subsidy guidance",
        "Technology selection advice",
        "Energy audit and optimization",
        "Sustainability reporting support",
        "Long-term energy strategy",
      ],
      benefits: ["Informed decisions", "Maximized incentives", "Optimized ROI", "Strategic planning"],
    },
  ]

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Understanding your energy needs, goals, and site conditions",
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "Detailed evaluation of your property and energy consumption",
    },
    {
      number: "03",
      title: "System Design",
      description: "Custom solar solution tailored to your requirements",
    },
    {
      number: "04",
      title: "Proposal & Approval",
      description: "Detailed quotation and project timeline for your review",
    },
    {
      number: "05",
      title: "Installation",
      description: "Professional installation by certified technicians",
    },
    {
      number: "06",
      title: "Commissioning",
      description: "System testing, activation, and handover",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Comprehensive EPCC Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              End-to-end solar solutions from initial design to ongoing maintenance. Your complete solar energy partner.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete EPCC capabilities for solar projects of any scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 border-border hover:border-solar-yellow transition-colors">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-solar-yellow/10 flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-solar-yellow" />
                    </div>
                    <h3 className="text-xl font-bold text-navy-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-navy-900 mb-2">What We Do:</h4>
                      <ul className="space-y-1.5">
                        {service.details.slice(0, 4).map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-solar-yellow flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-navy-900 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-navy-50 text-navy-900 px-2 py-1 rounded">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach from consultation to commissioning
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-solar-yellow flex items-center justify-center">
                        <span className="text-2xl font-bold text-navy-900">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Why Choose Anjung Meriah</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience, expertise, and excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="font-bold mb-2 text-navy-900">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Certified engineers and technicians</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="font-bold mb-2 text-navy-900">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">ISO 9001:2015 certified processes</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="font-bold mb-2 text-navy-900">Proven Results</h3>
                <p className="text-sm text-muted-foreground">500+ successful projects</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="font-bold mb-2 text-navy-900">Full Support</h3>
                <p className="text-sm text-muted-foreground">Ongoing O&M services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Start Your Solar Journey Today</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through every step of your solar energy transition.
          </p>
          <Button size="lg" className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90">
            Schedule Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
