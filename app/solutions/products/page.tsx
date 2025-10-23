import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sun, Battery, Zap, Gauge, Shield, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react"

export default function ProductsPage() {
  const productCategories = [
    {
      name: "Solar Panels",
      icon: Sun,
      description: "High-efficiency photovoltaic modules from world-leading manufacturers",
      products: [
        {
          name: "Monocrystalline Solar Panels",
          power: "400W - 550W",
          efficiency: "20% - 22.5%",
          features: ["Premium efficiency", "Space-saving design", "25-year warranty", "Low degradation rate"],
          applications: ["Residential rooftops", "Commercial buildings", "Limited space installations"],
        },
        {
          name: "Polycrystalline Solar Panels",
          power: "300W - 400W",
          efficiency: "16% - 18%",
          features: ["Cost-effective", "Reliable performance", "20-year warranty", "Proven technology"],
          applications: ["Large-scale installations", "Industrial facilities", "Budget-conscious projects"],
        },
        {
          name: "Bifacial Solar Panels",
          power: "450W - 600W",
          efficiency: "21% - 23%",
          features: ["Dual-sided generation", "Up to 30% more energy", "Premium durability", "Advanced technology"],
          applications: ["Ground-mounted systems", "Solar farms", "High-performance installations"],
        },
      ],
    },
    {
      name: "Inverters",
      icon: Zap,
      description: "Advanced power conversion systems for optimal energy management",
      products: [
        {
          name: "String Inverters",
          power: "3kW - 100kW",
          efficiency: "97% - 98.5%",
          features: ["Cost-effective", "Easy maintenance", "Proven reliability", "Multiple MPPT inputs"],
          applications: ["Residential systems", "Small commercial", "Rooftop installations"],
        },
        {
          name: "Hybrid Inverters",
          power: "5kW - 50kW",
          efficiency: "97% - 98%",
          features: ["Battery compatible", "Grid + storage", "Smart energy management", "Backup power capability"],
          applications: ["Residential with storage", "Commercial backup", "Off-grid systems"],
        },
        {
          name: "Central Inverters",
          power: "500kW - 3MW",
          efficiency: "98% - 99%",
          features: ["Large-scale efficiency", "Advanced monitoring", "High reliability", "Low maintenance"],
          applications: ["Solar farms", "Utility-scale projects", "Industrial installations"],
        },
      ],
    },
    {
      name: "Energy Storage",
      icon: Battery,
      description: "Battery systems for energy independence and backup power",
      products: [
        {
          name: "Lithium-Ion Battery Systems",
          power: "5kWh - 20kWh",
          efficiency: "90% - 95%",
          features: ["Long lifespan", "Fast charging", "Compact design", "10-year warranty"],
          applications: ["Residential backup", "Peak shaving", "Self-consumption optimization"],
        },
        {
          name: "Commercial Battery Storage",
          power: "50kWh - 500kWh",
          efficiency: "92% - 96%",
          features: ["Scalable capacity", "Demand management", "Grid services", "Advanced BMS"],
          applications: ["Commercial buildings", "Industrial facilities", "Microgrids"],
        },
      ],
    },
    {
      name: "Mounting Systems",
      icon: Shield,
      description: "Robust structural solutions for secure panel installation",
      products: [
        {
          name: "Rooftop Mounting Systems",
          power: "All panel sizes",
          efficiency: "N/A",
          features: ["Corrosion-resistant", "Easy installation", "Wind-load certified", "Adjustable tilt"],
          applications: ["Flat roofs", "Pitched roofs", "Metal roofs"],
        },
        {
          name: "Ground Mounting Systems",
          power: "All panel sizes",
          efficiency: "N/A",
          features: ["Heavy-duty construction", "Optimal tilt angles", "Quick installation", "Long-term durability"],
          applications: ["Solar farms", "Open land", "Large-scale projects"],
        },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Solar Products & Equipment</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Premium solar components from trusted global manufacturers, engineered for maximum performance and
              longevity in Malaysia's tropical climate.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, categoryIndex) => {
        const Icon = category.icon
        return (
          <section
            key={categoryIndex}
            className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? "bg-background" : "bg-navy-50"}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-lg bg-solar-yellow/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-solar-yellow" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-900">{category.name}</h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.map((product, productIndex) => (
                  <Card
                    key={productIndex}
                    className="border-2 border-border hover:border-solar-yellow transition-colors"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-navy-900 mb-3">{product.name}</h3>
                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary" className="bg-navy-50 text-navy-900">
                          {product.power}
                        </Badge>
                        {product.efficiency !== "N/A" && (
                          <Badge variant="secondary" className="bg-solar-yellow/10 text-navy-900">
                            {product.efficiency}
                          </Badge>
                        )}
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm text-navy-900 mb-2">Key Features:</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-solar-yellow flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-navy-900 mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.map((app, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {app}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose Our Products */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Products</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Quality, performance, and reliability backed by industry-leading warranties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-solar-yellow" />
              </div>
              <h3 className="font-bold mb-2">Premium Quality</h3>
              <p className="text-sm text-white/70">Tier-1 manufacturers with proven track records</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-solar-yellow" />
              </div>
              <h3 className="font-bold mb-2">High Performance</h3>
              <p className="text-sm text-white/70">Optimized for Malaysia's tropical climate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                <Gauge className="h-8 w-8 text-solar-yellow" />
              </div>
              <h3 className="font-bold mb-2">Long Warranties</h3>
              <p className="text-sm text-white/70">Up to 25-year product and performance warranties</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-solar-yellow" />
              </div>
              <h3 className="font-bold mb-2">Certified Quality</h3>
              <p className="text-sm text-white/70">International certifications and standards compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-solar-yellow">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-balance">
            Ready to Choose Your Solar System?
          </h2>
          <p className="text-lg text-navy-900/80 mb-8 max-w-2xl mx-auto">
            Our experts will help you select the perfect products for your specific needs and budget.
          </p>
          <Button size="lg" className="bg-navy-900 text-white hover:bg-navy-800">
            Get Product Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
