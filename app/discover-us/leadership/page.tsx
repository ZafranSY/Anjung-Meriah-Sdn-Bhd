import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Building2 } from "lucide-react"

export default function LeadershipPage() {
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Leadership Team</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Meet the experienced professionals driving Anjung Meriah's vision of sustainable construction and
              renewable energy solutions for Malaysia.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-pure-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-96 md:h-auto">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Building2 className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-corporate-red font-semibold mb-2">[CLIENT TO PROVIDE]</p>
                      <p className="text-xs text-muted-foreground">Professional headshot of Ms. Kuay Jeaneve</p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 p-8 md:p-12">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Ms. Kuay Jeaneve</h2>
                    <p className="text-lg text-corporate-red font-semibold mb-4">Founder & Managing Director</p>
                    <div className="flex gap-3 mb-6">
                      <a
                        href="mailto:jeaneve@anjungmeriah.com"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-corporate-red/10 transition-colors"
                        aria-label="Email Ms. Kuay Jeaneve"
                      >
                        <Mail className="h-5 w-5 text-gray-900" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-corporate-red/10 transition-colors"
                        aria-label="Ms. Kuay Jeaneve LinkedIn profile"
                      >
                        <Linkedin className="h-5 w-5 text-gray-900" />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Ms. Kuay Jeaneve is the founder and managing director of Anjung Meriah Sdn. Bhd., a 100%
                      Bumiputera, CIDB G7 construction company and Registered Photovoltaic Service Provider with SEDA
                      Malaysia that delivers total solutions and services in the field of Construction and Renewable
                      Energy Sector including design and build affordable houses, infrastructure work, project
                      management, Solar Power On The Roof, Solar Power Plant and related industries.
                    </p>
                    <p>
                      As the majority shareholder with a 97.18% stake, Ms. Kuay guides the strategic vision and
                      operations of the company. She also serves as the Executive Deputy Chairman of SC Estate Builder
                      Berhad (KLSE:SCBUILD).
                    </p>
                    <p>
                      She holds a Degree Holder of Mass Communication (Honors) (Public Relations) from Taylor's
                      University Lakeside Campus.
                    </p>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 border-l-4 border-corporate-red rounded">
                    <h3 className="font-bold text-gray-900 mb-2">Key Achievements</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-corporate-red mt-1">•</span>
                        <span>97.18% majority shareholder of Anjung Meriah Sdn. Bhd.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-corporate-red mt-1">•</span>
                        <span>Executive Deputy Chairman of SC Estate Builder Berhad (KLSE:SCBUILD)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-corporate-red mt-1">•</span>
                        <span>Founded JK Spark Sdn. Bhd., a 100% Bumiputera Sabah-owned company</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-corporate-red mt-1">•</span>
                        <span>Led company from construction to renewable energy leadership</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional key team members to be featured
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-gray-200 bg-white">
              <CardContent className="p-12 text-center">
                <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-lg text-corporate-red font-semibold mb-2">[CLIENT TO PROVIDE]</p>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Names, titles, and bios for other key team members, e.g., Head of Engineering, Head of Construction,
                  Project Directors, etc.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Group & Partners */}
      <section className="py-16 md:py-24 bg-pure-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Group & Partners</h2>
            </div>

            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">SC Estate Builder Berhad (KLSE:SCBUILD)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Anjung Meriah Sdn. Bhd. is a key partner to the publicly-listed SC Estate Builder Berhad
                    (KLSE:SCBUILD), frequently forming joint ventures to deliver high-value, large-scale projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">JK Spark Sdn. Bhd.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our founder also established JK Spark Sdn. Bhd., a 100% Bumiputera Sabah-owned company specializing
                    in building construction, property development, and the supply of building materials and solar
                    panels.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
