// app/projects/[slug]/page.tsx

// Import necessary modules and data using the ALIAS path
import {
  projects as allProjectsData,
  Project,
  generateSlug,
  findProjectBySlug
} from "@/lib/projectsData"; // <-- Use Alias Path

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from 'next/navigation';
import Image from 'next/image';

// --- CHANGE: Update interface to use 'slug' ---
interface ProjectDetailPageProps {
  params: {
    slug: string; // <-- Changed from projectId to slug
  };
}

// Component to display the project details
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Await params since they are now async in Next.js 13+ App Router
  const resolvedParams = await Promise.resolve(params);
  const projectSlug = resolvedParams?.slug;

  console.log('--- ProjectDetailPage ---');
  console.log('Received params:', resolvedParams);
  console.log(`Attempting to find project with slug: "${projectSlug}"`);

  // Check projectSlug validity
  if (!projectSlug || typeof projectSlug !== 'string' || projectSlug.length === 0) {
    console.error(`Invalid or missing slug in params. Params received: ${JSON.stringify(resolvedParams)}. Calling notFound().`);
    notFound();
  }

  // Find the project using the slug
  const project = findProjectBySlug(projectSlug);

  // If project is not found by the slug, trigger the 404 page
  if (!project) {
    console.error(`Project data not found for slug: "${projectSlug}". Calling notFound().`);
    notFound();
  }

  // --- Render the project details if found ---
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Project Image */}
      <section className="relative h-[400px] md:h-[550px] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`Image of ${project.name}`}
          fill
          sizes="100vw"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col justify-end pb-12 md:pb-16">
          <Badge className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90 mb-4 w-fit">
            {project.capacity}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            {project.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>Completed: {project.year}</span>
            </div>
             <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <span>Sector: {project.sector.charAt(0).toUpperCase() + project.sector.slice(1).replace('-', ' ')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
             <div className="mb-12">
               <Link href="/projects" className="inline-flex items-center text-navy-900 hover:text-solar-yellow font-medium transition-colors">
                 <ArrowLeft className="mr-2 h-4 w-4" />
                 Back to All Projects
               </Link>
            </div>

            <Card className="border-none shadow-lg mb-12">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-solar-yellow bg-solar-yellow/5">
              <CardContent className="p-8 md:p-10">
                 <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">Key Highlights & Results</h2>
                 <div className="grid md:grid-cols-2 gap-6">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-solar-yellow flex-shrink-0 mt-1" />
                      <span className="text-navy-900 text-base">{highlight}</span>
                    </div>
                  ))}
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Inspired by this Project?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how Anjung Meriah can bring a similar sustainable energy solution to your home or business.
          </p>
          <Button size="lg" className="bg-solar-yellow text-navy-900 hover:bg-solar-yellow/90">
              Request a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          </div>
      </section>
    </div>
  );
}

// --- CHANGE: Update generateStaticParams to return 'slug' ---
export async function generateStaticParams(): Promise<{ slug: string }[]> { // <-- Return { slug: string }
  const { projects: dataForStaticParams } = await import("@/lib/projectsData");

  if (!Array.isArray(dataForStaticParams)) {
     console.error("[generateStaticParams] Failed to load projects data or it's not an array.");
     return [];
  }

  const paths = dataForStaticParams.map((project) => {
     const slugValue = generateSlug(project.name);
     console.log(`[generateStaticParams] Generating path for "${project.name}": ${slugValue}`);
     return { slug: slugValue }; // <-- Return object with 'slug' property
  });

  const validPaths = paths.filter(p => p.slug && typeof p.slug === 'string' && p.slug.length > 0);
  console.log('[generateStaticParams] Valid paths to generate:', validPaths);

  return validPaths;
}

// --- CHANGE: Update generateMetadata to use params.slug ---
export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<{ title: string; description?: string }> {
  const resolvedParams = await Promise.resolve(params);
  const { findProjectBySlug: findProjectForMeta } = await import("@/lib/projectsData");
  const project = findProjectForMeta(resolvedParams.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return {
    title: `${project.name} | Anjung Meriah Projects`,
    description: project.description,
  };
}