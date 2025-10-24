// Define a type for better code clarity (optional but good practice)
export interface Project {
  id: number;
  slug: string;
  name: string;
  location: string;
  sector: string;
  capacity: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
}

// Export the full array of projects
export const allProjectsData: Project[] = [
  {
    id: 1,
    slug: "sunway-pyramid",
    name: "Sunway Pyramid Shopping Mall",
    location: "Petaling Jaya, Selangor",
    sector: "commercial",
    capacity: "1.2 MW",
    year: "2024",
    image: "/large-shopping-mall-rooftop-with-extensive-solar-pa.jpg",
    description:
      "Large-scale rooftop solar installation on one of Malaysia's premier shopping destinations, reducing operational costs and carbon footprint.",
    highlights: [
      "1,200 kW solar PV system",
      "3,000+ solar panels installed",
      "Annual savings: RM 450,000",
      "CO2 reduction: 850 tons/year",
    ],
  },
  {
    id: 2,
    slug: "proton-shah-alam",
    name: "Proton Manufacturing Facility",
    location: "Shah Alam, Selangor",
    sector: "industrial",
    capacity: "3.5 MW",
    year: "2023",
    image: "/large-automotive-manufacturing-plant-with-solar-pan.jpg",
    description:
      "Comprehensive solar solution for automotive manufacturing, combining rooftop and ground-mounted systems for maximum energy generation.",
    highlights: [
      "3,500 kW hybrid system",
      "8,500+ solar panels",
      "Annual savings: RM 1.2M",
      "CO2 reduction: 2,400 tons/year",
    ],
  },
  {
    id: 3,
    slug: "setia-eco-park",
    name: "Setia Eco Park Residential",
    location: "Shah Alam, Selangor",
    sector: "residential",
    capacity: "250 kW",
    year: "2024",
    image: "/modern-residential-neighborhood-with-solar-panels-o.jpg",
    description:
      "Community solar project serving 50 residential units with individual rooftop systems and centralized monitoring.",
    highlights: ["50 residential units", "5 kW per household", "NEM 3.0 integration", "Smart monitoring system"],
  },
  {
    id: 4,
    slug: "klia-cargo",
    name: "KLIA Cargo Terminal",
    location: "Sepang, Selangor",
    sector: "commercial",
    capacity: "2.8 MW",
    year: "2023",
    image: "/modern-airport-cargo-terminal-with-solar-panels-on.jpg",
    description:
      "Airport cargo facility solar installation with advanced monitoring and energy management systems for 24/7 operations.",
    highlights: ["2,800 kW system", "6,800 solar panels", "Battery storage: 500 kWh", "Annual savings: RM 980,000"],
  },
  {
    id: 5,
    slug: "cyberjaya-solar-farm",
    name: "Cyberjaya Solar Farm",
    location: "Cyberjaya, Selangor",
    sector: "solar-farm",
    capacity: "10 MW",
    year: "2022",
    image: "/large-scale-ground-mounted-solar-farm-in-open-field.jpg",
    description:
      "Utility-scale solar farm providing clean energy to the national grid, supporting Malaysia's renewable energy targets.",
    highlights: ["10 MW capacity", "25,000+ solar panels", "Powers 3,000 homes", "CO2 reduction: 7,500 tons/year"],
  },
  {
    id: 6,
    slug: "gleneagles-kl",
    name: "Gleneagles Hospital Kuala Lumpur",
    location: "Kuala Lumpur",
    sector: "commercial",
    capacity: "850 kW",
    year: "2024",
    image: "/modern-hospital-building-with-solar-panels-on-rooft.jpg",
    description:
      "Healthcare facility solar installation with backup battery systems ensuring uninterrupted power for critical operations.",
    highlights: ["850 kW solar system", "Battery backup: 300 kWh", "24/7 monitoring", "Annual savings: RM 320,000"],
  },
  {
    id: 7,
    slug: "nestle-chembong",
    name: "Nestlé Manufacturing Plant",
    location: "Chembong, Negeri Sembilan",
    sector: "industrial",
    capacity: "4.2 MW",
    year: "2023",
    image: "/food-processing-industrial-facility-with-extensive.jpg",
    description:
      "Food processing facility with comprehensive solar solution, reducing energy costs and supporting sustainability goals.",
    highlights: ["4,200 kW system", "10,000+ panels", "Annual savings: RM 1.5M", "CO2 reduction: 3,000 tons/year"],
  },
  {
    id: 8,
    slug: "taylors-university",
    name: "Taylor's University Lakeside Campus",
    location: "Subang Jaya, Selangor",
    sector: "commercial",
    capacity: "1.5 MW",
    year: "2024",
    image: "/modern-university-campus-buildings-with-solar-panel.jpg",
    description:
      "Educational institution solar project serving multiple campus buildings with integrated energy management system.",
    highlights: ["1,500 kW capacity", "Multiple buildings", "Educational monitoring", "Annual savings: RM 550,000"],
  },
  {
    id: 9,
    slug: "damansara-heights-villa",
    name: "Luxury Villa - Damansara Heights",
    location: "Kuala Lumpur",
    sector: "residential",
    capacity: "15 kW",
    year: "2024",
    image: "/luxury-modern-home-with-rooftop-solar-panel-install.jpg",
    description:
      "Premium residential solar installation with battery storage and smart home integration for complete energy independence.",
    highlights: ["15 kW solar system", "Tesla Powerwall 2", "Smart home integration", "90% energy independence"],
  },
  {
    id: 10,
    slug: "kulim-solar-farm",
    name: "Kulim Hi-Tech Park Solar Farm",
    location: "Kulim, Kedah",
    sector: "solar-farm",
    capacity: "15 MW",
    year: "2022",
    image: "/massive-solar-farm-installation-with-thousands-of-p.jpg",
    description:
      "Large-scale solar farm in industrial park, providing renewable energy to high-tech manufacturing facilities.",
    highlights: [
      "15 MW capacity",
      "37,500 solar panels",
      "Powers industrial park",
      "CO2 reduction: 11,000 tons/year",
    ],
  },
  {
    id: 11,
    slug: "aeon-bukit-tinggi",
    name: "AEON Mall Bukit Tinggi",
    location: "Klang, Selangor",
    sector: "commercial",
    capacity: "950 kW",
    year: "2023",
    image: "/shopping-mall-rooftop-solar-installation-with-parki.jpg",
    description:
      "Retail mall solar installation with carport solar structures, maximizing energy generation and providing shaded parking.",
    highlights: [
      "950 kW total capacity",
      "Rooftop + carport solar",
      "2,300 solar panels",
      "Annual savings: RM 360,000",
    ],
  },
  {
    id: 12,
    slug: "eco-world-logistics",
    name: "Eco World Warehouse & Logistics",
    location: "Port Klang, Selangor",
    sector: "industrial",
    capacity: "2.2 MW",
    year: "2024",
    image: "/large-warehouse-and-logistics-facility-with-solar-p.jpg",
    description:
      "Logistics facility with extensive rooftop solar, reducing operational costs for cold storage and warehouse operations.",
    highlights: ["2,200 kW system", "5,500 solar panels", "Cold storage optimized", "Annual savings: RM 780,000"],
  },
];