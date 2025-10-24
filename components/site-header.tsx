"use client"

import Link from "next/link" // Keep Link for the Logo and mobile menu
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink, // Keep this import
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle // Import the style for consistency if needed
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils" // Import cn if you use navigationMenuTriggerStyle

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Define a reusable style class for nav links
  const navLinkClassName = "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo (uses standard Link) */}
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
                {/* Use NavigationMenuLink directly with href */}
                <NavigationMenuLink href="/" className={navLinkClassName}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Discover Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    {/* Use NavigationMenuLink directly inside list items for dropdown */}
                    <li>
                      <NavigationMenuLink href="/discover-us/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-white/80"> {/* Adjust text color on hover if needed */}
                            Our history, mission, and values
                          </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                       <NavigationMenuLink href="/discover-us/leadership" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Leadership</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-white/80">
                            Meet our executive team
                          </p>
                       </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/discover-us/certifications" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Certifications</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-white/80">
                            SEDA, CIDB, ISO certifications
                          </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                   <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                       <NavigationMenuLink href="/solutions/products" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Products</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-white/80">
                            Solar panels and equipment
                          </p>
                       </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/solutions/services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Services</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-white/80">
                            EPCC, Installation, O&M
                          </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                       <NavigationMenuLink href="/solutions/sectors" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-corporate-red hover:text-white focus:bg-corporate-red focus:text-white">
                          <div className="text-sm font-medium leading-none">Sectors</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground hover:text-white/80">
                            Residential, Commercial, Industrial
                          </p>
                       </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {/* Use NavigationMenuLink directly with href */}
                <NavigationMenuLink href="/projects" className={navLinkClassName}>
                  Projects
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                {/* Use NavigationMenuLink directly with href */}
                <NavigationMenuLink href="/contact" className={navLinkClassName}>
                  Contact
                </NavigationMenuLink>
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

        {/* Mobile Menu (uses standard Link) */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-corporate-red" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Discover Us</div>
                <div className="pl-4 space-y-2">
                  <Link href="/discover-us/about" className="block text-sm text-muted-foreground hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/discover-us/leadership" className="block text-sm text-muted-foreground hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Leadership
                  </Link>
                  <Link href="/discover-us/certifications" className="block text-sm text-muted-foreground hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Certifications
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-2">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link href="/solutions/products" className="block text-sm text-muted-foreground hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Products
                  </Link>
                  <Link href="/solutions/services" className="block text-sm text-muted-foreground hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Services
                  </Link>
                  <Link href="/solutions/sectors" className="block text-sm text-muted-foreground hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Sectors
                  </Link>
                </div>
              </div>
              <Link href="/projects" className="text-sm font-medium text-gray-900 hover:text-corporate-red" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-corporate-red" onClick={() => setMobileMenuOpen(false)}>
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