import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyContent from "./CaseStudyContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // Only generate pages for projects without external URLs
  return projects
    .filter((project) => !project.externalUrl)
    .map((project) => ({
      slug: project.id,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Redirect to external URL if project has one
  if (project.externalUrl) {
    redirect(project.externalUrl);
  }

  return <CaseStudyContent project={project} />;
}
