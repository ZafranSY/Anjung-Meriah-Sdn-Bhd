import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building2, Factory, Sun, CheckCircle2, ArrowRight, TrendingUp, DollarSign, Leaf } from "lucide-react"

export default function SectorsPage() {
  const sectors = [
    {
      name: "Residential Solar",
      icon: Home,
      tagline: "Power Your Home with Clean Energy",
      description:
        "Transform your home into a sustainable energy hub with rooftop solar systems designed for Malaysian residential properties.",
      image: "/residential-home-with-rooftop-solar-panels-install.jpg",
      benefits: [
        "Reduce electricity bills by up to 90%",
        "Increase property value",
        "Energy independence and security",
        "Government incentives and rebates",
        "Low maintenance requirements",
        "Environmental impact reduction",
      ],
      solutions: [
        "Rooftop solar PV systems (3kW - 10kW)",
        "Net Energy Metering (NEM) integration",
        "Battery storage for backup power",
        "Smart energy management systems",
        "Solar water heating integration",
      ],
      idealFor: ["Single-family homes", "Terrace houses", "Semi-detached properties", "Bungalows", "Condominiums"],
    },
    {
      name: "Commercial Solar",
      icon: Building2,
      tagline: "Reduce Operating Costs, Boost Sustainability",
      description:
        "Commercial solar solutions that deliver significant cost savings while enhancing your corporate sustainability profile.",
      image: "/modern-commercial-building-with-solar-panels-on-ro.jpg",
      benefits: [
        "Significant operational cost reduction",
        "Enhanced corporate sustainability",
        "Tax incentives and accelerated depreciation",
        "Improved brand reputation",
        "Long-term energy price stability",
        "Quick ROI (typically 4-6 years)",
      ],
      solutions: [
        "Rooftop solar systems (50kW - 500kW)",
        "Carport solar installations",
        "Building-integrated PV (BIPV)",
        "Energy storage and demand management",
        "Real-time monitoring and analytics",
      ],
      idealFor: [
        "Office buildings",
        "Shopping malls",
        "Hotels and resorts",
        "Educational institutions",
        "Healthcare facilities",
      ],
    },
    {
      name: "Industrial Solar",
      icon: Factory,
      tagline: "Power Your Operations Sustainably",
      description:
        "Large-scale solar solutions engineered for high-energy industrial operations, delivering substantial cost savings and energy security.",
      image: "/large-industrial-facility-with-extensive-solar-pan.jpg",
      benefits: [
        "Massive energy cost reduction",
        "Hedge against rising electricity prices",
        "Improved energy security and reliability",
        "Meet sustainability targets",
        "Enhanced competitiveness",
        "Reduced carbon footprint",
      ],
      solutions: [
        "Large-scale rooftop systems (500kW - 5MW)",
        "Ground-mounted solar arrays",
        "Hybrid solar-diesel systems",
        "Industrial energy storage",
        "Advanced monitoring and optimization",
      ],
      idealFor: [
        "Manufacturing facilities",
        "Warehouses and logistics centers",
        "Food processing plants",
        "Data centers",
        "Industrial parks",
      ],
    },
    {
      name: "Solar Farms",
      icon: Sun,
      tagline: "Utility-Scale Renewable Energy",
      description:
        "Large-scale solar farm development for utility companies, investors, and landowners seeking to capitalize on renewable energy opportunities.",
      image: "/large-scale-solar-farm-with-rows-of-solar-panels.jpg",
      benefits: [
        "Significant revenue generation",
        "Long-term stable returns",
        "Land value optimization",
        "Contribution to national renewable targets",
        "Scalable capacity",
        "Professional O&M services",
      ],
      solutions: [
        "Ground-mounted solar farms (5MW - 50MW+)",
        "Utility-scale energy storage",
        "Grid integration and management",
        "Advanced monitoring systems",
        "Performance optimization",
      ],
      idealFor: [
        "Utility companies",
        "Independent power producers",
        "Landowners with large plots",
        "Investment funds",
        "Government projects",
      ],
    },
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
              Solar Solutions for Every Sector
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Tailored solar energy systems designed for residential, commercial, industrial, and utility-scale
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      {sectors.map((sector, index) => {
        const Icon = sector.icon
        return (
          <section key={index} className={`py-16 md:py-24 ${index % 2 === 0 ? "bg-background" : "bg-navy-50"}`}>
            <div className="container mx-auto px-4 md:px-6">
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-solar-yellow/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-solar-yellow" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-900">{sector.name}</h2>
                  </div>
                  <p className="text-xl font-semibold text-solar-yellow mb-4">{sector.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{sector.description}</p>

                  <div className="mb-6">
                    <h3 className="font-bold text-navy-900 mb-3">Key Benefits:</h3>
                    <div className="grid gap-2">
                      {sector.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-solar-yellow flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-navy-900 mb-3">Our Solutions:</h3>
                    <ul className="space-y-2">
                      {sector.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground pl-4 border-l-2 border-solar-yellow">
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold text-navy-900 mb-3">Ideal For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {sector.idealFor.map((item, idx) => (
                        <span key={idx} className="text-xs bg-navy-900 text-white px-3 py-1.5 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="bg-navy-900 text-white hover:bg-navy-800">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div
                  className={`relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl ${index % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Comparison Section */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Solar Makes Sense</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Across all sectors, solar energy delivers compelling benefits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Reduce energy costs by 50-90% with solar, protecting against rising electricity prices
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strong ROI</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Typical payback period of 4-7 years with 25+ years of energy generation
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/20 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-solar-yellow" />
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Reduce carbon footprint and contribute to Malaysia's renewable energy goals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-solar-yellow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-balance">
            Find the Right Solar Solution for Your Needs
          </h2>
          <p className="text-lg text-navy-900/80 mb-8 max-w-2xl mx-auto">
            Our experts will assess your requirements and design a custom solar system that maximizes your benefits.
          </p>
          <Button size="lg" className="bg-navy-900 text-white hover:bg-navy-800">
            Get Sector-Specific Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
