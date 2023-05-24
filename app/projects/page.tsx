import Link from "next/link";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

const ProjectsPage = () => {
  return (
    <Container>
      <PageHeader mainHeader={"Projects"} />
      {/* Grid of 3 to 5 projects */}
      <div className="grid justify-items-center md:grid-cols-2">
        {projects.map((project) => {
          const { imagePath, title, tags, description, codeUrl, demoUrl } =
            project;

          return (
            <ProjectCard
              imagePath={imagePath}
              title={title}
              tags={tags}
              description={description}
              codeUrl={codeUrl}
              demoUrl={demoUrl}
            />
          );
        })}
      </div>
      <p className="italic text-center">
        This website was made with Next.js, Tailwind CSS, and TypeScript.
      </p>
    </Container>
  );
};

export default ProjectsPage;
