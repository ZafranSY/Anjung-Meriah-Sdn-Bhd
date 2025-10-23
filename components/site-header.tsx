"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-corporate-red rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight">Anjung Meriah</span>
              <span className="text-xs text-muted-foreground">Sdn. Bhd.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Discover Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link href="/discover-us/about" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our history, mission, and values
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/discover-us/leadership" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Leadership</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Meet our executive team
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/discover-us/certifications" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Certifications</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            SEDA, CIDB, ISO certifications
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <Link href="/solutions/products" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Products</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Solar panels and equipment
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/services" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            EPCC, Installation, O&M
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/sectors" legacyBehavior passHref>
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Sectors</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Residential, Commercial, Industrial
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-corporate-red text-white hover:bg-corporate-red-dark font-semibold">
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-gray-900" /> : <Menu className="h-6 w-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-corporate-red">
                Home
              </Link>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Discover Us</div>
                <div className="pl-4 space-y-2">
                  <Link href="/discover-us/about" className="block text-sm text-muted-foreground hover:text-gray-900">
                    About Us
                  </Link>
                  <Link
                    href="/discover-us/leadership"
                    className="block text-sm text-muted-foreground hover:text-gray-900"
                  >
                    Leadership
                  </Link>
                  <Link
                    href="/discover-us/certifications"
                    className="block text-sm text-muted-foreground hover:text-gray-900"
                  >
                    Certifications
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link href="/solutions/products" className="block text-sm text-muted-foreground hover:text-gray-900">
                    Products
                  </Link>
                  <Link href="/solutions/services" className="block text-sm text-muted-foreground hover:text-gray-900">
                    Services
                  </Link>
                  <Link href="/solutions/sectors" className="block text-sm text-muted-foreground hover:text-gray-900">
                    Sectors
                  </Link>
                </div>
              </div>
              <Link href="/projects" className="text-sm font-medium text-gray-900 hover:text-corporate-red">
                Projects
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-corporate-red">
                Contact
              </Link>
              <Button className="bg-corporate-red text-white hover:bg-corporate-red-dark font-semibold w-full">
                Request Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
