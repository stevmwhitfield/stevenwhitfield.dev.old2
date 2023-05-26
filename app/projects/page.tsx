import Head from "next/head";
import Container from "../../components/Container";
import PageHeader from "../../components/PageHeader";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

const ProjectsPage = () => {
  return (
    <Container>
      <Head>
        <title>Projects - Steven Whitfield</title>
        <meta name="title" content="Projects - Steven Whitfield" />
        <meta
          name="description"
          content="A few of the projects I have worked on recently."
        />
        <link rel="canonical" href="https://www.stevenwhitfield.dev/projects" />
      </Head>
      <PageHeader mainHeader={"Projects"} />
      <div className="grid justify-items-center gap-8 mb-12 md:grid-cols-2 md:w-fit md:gap-16 md:mx-auto">
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
