import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Pioneering Solar Excellence Since 1987
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              For over three decades, Anjung Meriah Sdn. Bhd. has been at the forefront of Malaysia's renewable energy
              revolution, delivering innovative solar solutions that power a sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1987 and based in Petaling Jaya, Selangor, Anjung Meriah Sdn. Bhd. began as a construction
                  and building materials supplier. As Malaysia's renewable energy sector emerged, we recognized the
                  transformative potential of solar power and pivoted to become a specialized solar EPCC company.
                </p>
                <p>
                  Today, we are proud to be one of Malaysia's leading solar energy providers, with a comprehensive
                  portfolio spanning residential rooftop installations to large-scale industrial solar farms. Our
                  journey from traditional construction to renewable energy leadership reflects our commitment to
                  innovation and sustainability.
                </p>
                <p>
                  With over 500 successful projects and 100MW+ of installed capacity, we continue to push the boundaries
                  of what's possible in solar energy, helping businesses and homeowners across Malaysia transition to
                  clean, cost-effective power.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/modern-solar-panel-installation-on-commercial-buil.jpg"
                alt="Anjung Meriah solar installation"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Purpose</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by our mission, vision, and core values
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-solar-yellow/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-solar-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver world-class solar energy solutions that empower our clients to achieve energy independence,
                  reduce costs, and contribute to a sustainable future through innovative EPCC services and unwavering
                  commitment to quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-solar-yellow/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-solar-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Malaysia's most trusted and innovative solar energy partner, recognized for excellence in
                  engineering, sustainability leadership, and our role in accelerating the nation's transition to
                  renewable energy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-lg bg-solar-yellow/10 flex items-center justify-center mb-6">
                  <Heart className="h-7 w-7 text-solar-yellow" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy-900">Values</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">•</span>
                    <span>Excellence in every project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">•</span>
                    <span>Integrity and transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">•</span>
                    <span>Innovation and sustainability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-solar-yellow mt-1">•</span>
                    <span>Customer-centric approach</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Key Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones that define our journey in solar excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-solar-yellow" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-solar-yellow" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">100MW+</div>
                <div className="text-sm text-muted-foreground">Installed Capacity</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-solar-yellow" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-solar-yellow/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-solar-yellow" />
                </div>
                <div className="text-4xl font-bold text-navy-900 mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our evolution from construction to solar leadership
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow flex items-center justify-center font-bold text-navy-900 flex-shrink-0">
                    1987
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Company Founded</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Anjung Meriah Sdn. Bhd. established as a construction and building materials supplier in Petaling
                    Jaya, Selangor.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow flex items-center justify-center font-bold text-navy-900 flex-shrink-0">
                    2010
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Solar Transition</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pivoted to renewable energy sector, focusing on solar EPCC services as Malaysia's solar market
                    emerged.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow flex items-center justify-center font-bold text-navy-900 flex-shrink-0">
                    2015
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Major Certifications</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Achieved SEDA RPVSP, CIDB G7, and ISO 9001:2015 certifications, establishing ourselves as a trusted
                    industry leader.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow flex items-center justify-center font-bold text-navy-900 flex-shrink-0">
                    2020
                  </div>
                  <div className="w-0.5 h-full bg-border mt-2" />
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-navy-900 mb-2">100MW Milestone</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Surpassed 100MW of total installed solar capacity across residential, commercial, and industrial
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-solar-yellow flex items-center justify-center font-bold text-navy-900 flex-shrink-0">
                    2025
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">Continued Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading Malaysia's solar revolution with cutting-edge technology and comprehensive EPCC solutions
                    for all sectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Partner With Us?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have made the switch to clean, renewable solar energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90">
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
      </section>
    </div>
  )
}
