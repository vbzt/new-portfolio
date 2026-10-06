import { ProjectsContent } from "@/components/ProjectsContent";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("projects");

export default function Projects() {
  return <ProjectsContent />;
}
