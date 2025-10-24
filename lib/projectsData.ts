// lib/projectsData.ts

export interface Project {
  id: number;
  name: string;
  location: string;
  sector: string;
  capacity: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
}

export const projects: Project[] = [
    {
      id: 1,
      name: "510 Affordable Housing",
      location: "Bangi, Selangor",
      sector: "residential",
      capacity: "510 kW",
      year: "2024",
  image: "/projects/510-housing.svg",
      description: "Solar power installation across 510 affordable housing units, making clean energy accessible to all.",
      highlights: [
        "510 kW total distributed capacity",
        "Individual monitoring for each household",
        "Reduced electricity bills by 40%",
        "Community energy awareness program"
      ]
    },
    {
      id: 2,
      name: "4mw Solar Plant",
      location: "Selangor Solar Valley",
      sector: "solar-farm",
      capacity: "4 MW",
      year: "2024",
  image: "/projects/4mw-plant.svg",
      description: "A state-of-the-art 4MW solar farm installation providing clean energy to the Selangor region.",
      highlights: [
        "4MW total capacity installation",
        "Advanced solar tracking system",
        "Grid integration with smart monitoring",
        "Annual CO2 reduction of 3,600 tons"
      ]
    },
    {
      id: 2,
      name: "Sunway Pyramid Shopping Mall",
      location: "Petaling Jaya, Selangor",
      sector: "commercial",
      capacity: "2.5 MW",
      year: "2023",
  image: "/projects/sunway-pyramid.svg",
      description: "Rooftop solar installation for one of Malaysia's largest shopping malls, demonstrating commercial sustainability.",
      highlights: [
        "2.5MW rooftop installation",
        "Reduced mall's carbon footprint by 40%",
        "Annual energy savings of RM 1.2 million",
        "Innovative mounting system for minimal roof impact"
      ]
    },
    {
      id: 3,
      name: "Proton Manufacturing Facility",
      location: "Shah Alam, Selangor",
      sector: "industrial",
      capacity: "3 MW",
      year: "2023",
  image: "/projects/proton-plant.svg",
      description: "Large-scale industrial solar installation supporting Proton's commitment to sustainable manufacturing.",
      highlights: [
        "3MW combined rooftop and ground installation",
        "Custom mounting solution for manufacturing environment",
        "Integration with factory power management system",
        "25% reduction in facility's energy costs"
      ]
    },
    {
      id: 4,
      name: "Eco World Warehouse & Logistics",
      location: "Port Klang, Selangor",
      sector: "industrial",
      capacity: "1.8 MW",
      year: "2024",
  image: "/projects/eco-world.svg",
      description: "Modern warehouse facility powered by solar, showcasing sustainable logistics operations.",
      highlights: [
        "1.8MW rooftop solar system",
        "Smart energy storage integration",
        "Real-time monitoring and analytics",
        "Zero-carbon warehouse operations"
      ]
    },
    {
      id: 5,
      name: "IPC Shopping Centre",
      location: "Mutiara Damansara, Selangor",
      sector: "commercial",
      capacity: "1.2 MW",
      year: "2024",
  image: "/projects/ipc-mall.svg",
      description: "Comprehensive solar installation at IPC Shopping Centre, featuring advanced energy monitoring and smart grid integration.",
      highlights: [
        "1.2MW rooftop system",
        "Smart energy management system",
        "30% reduction in mall's energy costs",
        "Public energy consumption display"
      ]
    },
    {
      id: 6,
      name: "Green Terrace Residences",
      location: "Mont Kiara, Kuala Lumpur",
      sector: "residential",
      capacity: "800 kW",
      year: "2023",
  image: "/projects/green-terrace.svg",
      description: "Multi-building residential solar project serving 300 luxury apartments with individual monitoring systems.",
      highlights: [
        "800kW distributed system",
        "Individual unit monitoring app",
        "EV charging integration",
        "Communal battery storage"
      ]
    },
    {
      id: 7,
      name: "UiTM Solar Research Centre",
      location: "Shah Alam, Selangor",
      sector: "commercial",
      capacity: "250 kW",
      year: "2024",
  image: "/projects/uitm-solar.svg",
      description: "Educational and research facility featuring multiple solar technologies and real-time data collection for academic studies.",
      highlights: [
        "250kW hybrid system",
        "Multiple panel technologies",
        "Research data platform",
        "Student training facility"
      ]
    },
    {
      id: 8,
      name: "Port Klang Solar Farm",
      location: "Port Klang, Selangor",
      sector: "solar-farm",
      capacity: "10 MW",
      year: "2024",
  image: "/projects/port-klang-farm.svg",
      description: "Large-scale ground-mounted solar farm providing renewable energy to Port Klang's industrial operations.",
      highlights: [
        "10MW ground-mounted installation",
        "Port operations integration",
        "Advanced weather monitoring",
        "24/7 automated maintenance"
      ]
    }
];

// REFINED SLUG FUNCTION
export const generateSlug = (name: string): string => {
  if (!name) return '';
  return name
    .toString()
    .toLowerCase()
    .trim() // Remove leading/trailing whitespace
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars except -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};

// REFINED FIND FUNCTION WITH LOGGING
export const findProjectBySlug = (slugToFind: string): Project | undefined => {
  console.log(`[findProjectBySlug] Searching for slug: "${slugToFind}"`); // Log input slug
  if (!slugToFind) {
      console.log("[findProjectBySlug] Received empty or null slug.");
      return undefined;
  }
  const foundProject = projects.find(p => {
    const generatedSlug = generateSlug(p.name);
    // console.log(`[findProjectBySlug] Comparing: "${slugToFind}" === "${generatedSlug}" (from "${p.name}")`); // Uncomment for detailed comparison
    return generatedSlug === slugToFind;
  });

  if (foundProject) {
    console.log(`[findProjectBySlug] Found project: ${foundProject.name}`);
  } else {
    console.log(`[findProjectBySlug] No project found matching slug: "${slugToFind}"`);
  }
  return foundProject;
};