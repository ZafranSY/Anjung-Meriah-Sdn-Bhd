// app/projects/[projectId]/page.tsx

import Image from "next/image";
import { CheckCircle2, MapPin, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// Import the shared data
import { allProjectsData } from "@/lib/projectsData"; // Make sure this path is correct

// Interface for Props (still useful for defining the *expected* structure)
interface ProjectDetailPageProps {
  params: {
    projectId: string; // This key MUST match the folder name [projectId] (which holds the slug)
  };
}

// Component Signature modified temporarily for debugging
// Use 'props: any' to log the raw input before assuming its structure
export default function ProjectDetailPage(props: any) {
  // --- Log the ENTIRE props object FIRST ---
  console.log("RAW PROPS RECEIVED:", JSON.stringify(props, null, 2));
  // ----------------------------------------

  // Now, try to safely access params and projectId
  const params = props.params; // Access params from the raw props
  const projectId = params?.projectId; // Use optional chaining ?. just in case params itself is undefined

  console.log("Extracted params:", params); // Log the params object
  console.log("Extracted projectId (slug):", projectId); // Log the potentially undefined slug

  // Find the project in the IMPORTED data using the slug
  // Ensure projectId is not undefined before trying to find
  const project = projectId ? allProjectsData.find((p) => p.slug === projectId) : undefined;

  // Handle case where project is not found (either projectId was undefined or find failed)
  if (!project) {
    console.error("Project not found in allProjectsData for slug:", projectId); // Log the slug value (might be undefined)
    return (
      <div className="container mx-auto px-4 md:px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The project you are looking for does not exist or the ID is incorrect.
        </p>
        <Button asChild variant="outline">
           <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
           </Link>
        </Button>
      </div>
    );
  }

  // Render the project details if found
  return (
    <div className="min-h-screen bg-pure-white">
      {/* Project Header */}
      <section className="relative py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-6">
           <Button asChild variant="outline" size="sm" className="mb-6">
              <Link href="/projects"> {/* Link back to the main projects list */}
                 <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Projects
              </Link>
           </Button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 text-balance">
            {project.name}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-corporate-red" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-corporate-red" />
              <span>{project.year}</span>
            </div>
          </div>
          <span className="inline-block bg-corporate-red text-white px-4 py-1 rounded-full text-sm font-semibold">
            {project.capacity}
          </span>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column (Image) */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 border border-gray-200">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

               {/* Placeholder for more content */}
               <div className="bg-gray-50 border border-gray-200 rounded p-6">
                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Project Information</h3>
                   <p className="text-muted-foreground text-sm">[Client to provide more detailed text, specifications, challenges, solutions, or gallery images here.]</p>
               </div>
            </div>

            {/* Right Column (Details) */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Highlights</h3>
              <ul className="space-y-3 mb-8">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-corporate-red flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Client Needs Placeholder */}
               <div className="bg-gray-50 border border-gray-200 rounded p-4 mb-6">
                   <p className="text-xs text-corporate-red font-semibold mb-1">[CLIENT TO PROVIDE]</p>
                   <p className="text-xs text-muted-foreground">Any specific details for this section like client name (if permissible), testimonials, specific challenges overcome, etc.</p>
               </div>

              <Button size="lg" className="w-full bg-corporate-red hover:bg-corporate-red-dark">
                Request Similar Project Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}