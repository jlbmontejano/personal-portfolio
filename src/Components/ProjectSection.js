import React from "react";
import IndividualProject from "./IndividualProject";
import "./ProjectSection.css";

const ProjectSection = () => {
  const PokemonApi = {
    title: "Pokemon-API",
    src: `${process.env.PUBLIC_URL}/images/pokemon-api.png`,
    description:
      "Webapp that uses the pokeapi to display different pokemon information.",
    link: "https://relaxed-frangipane-1bb52e.netlify.app/",
    code: "https://github.com/jlbmontejano/pokemon-api",
    key: 0,
  };
  const RockPaperScissors = {
    title: "Rock Paper Scissors",
    src: `${process.env.PUBLIC_URL}/images/rock-paper-scissors.png`,
    description: "Classic rock, paper, scissors game made with React.",
    link: "https://steady-biscochitos-582e33.netlify.app/",
    code: "https://github.com/jlbmontejano/rock-paper-scissors",
    key: 1,
  };
  const AdviceGenerator = {
    title: "Advice Generator",
    src: `${process.env.PUBLIC_URL}/images/advice-generator.png`,
    description: "Small project that fetches different advices from an API.",
    link: "https://shimmering-bunny-4c923a.netlify.app/",
    code: "https://github.com/jlbmontejano/advice-generator-app",
    key: 2,
  };

  const projectList = [PokemonApi, RockPaperScissors, AdviceGenerator];
  return (
    <div>
      <h3>Projects</h3>
      <p>
        These are some of the projects I've worked on so far. I am constantly
        updating and improving them.
      </p>
      <div className="project-section">
        {projectList.map(project => (
          <IndividualProject
            title={project.title}
            image={project.src}
            description={project.description}
            link={project.link}
            code={project.code}
            key={project.key}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
