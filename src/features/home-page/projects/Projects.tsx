import React, { useState } from "react";
import {
    ProjectsContainer,
    ProjectsHeadContainer,
    ProjectsList,
} from "./Projects.styles";
import NavButton from "../../../components/buttons/nav-button/NavButton";
import Project from "./project/Project";
import { ProjectsProps } from "./Projects.types";
import { ProjectCategories } from "./project/Project.types";

const Projects: React.FC<ProjectsProps> = ({ projectsList }) => {
    const [activeCategory, setActiveCategory] = useState(
        ProjectCategories.logo
    );

    const handleChangeFilter = (
        e: React.MouseEvent<HTMLButtonElement>,
        category: ProjectCategories
    ) => {
        e.preventDefault();
        setActiveCategory(category);
    };

    return (
        <ProjectsContainer id="projects">
            <ProjectsHeadContainer>
                <h2>Projects:</h2>
                <nav aria-label="projects navigation">
                    <NavButton
                        active={activeCategory === ProjectCategories.logo}
                        onClick={(e) =>
                            handleChangeFilter(e, ProjectCategories.logo)
                        }
                    >
                        Logo
                    </NavButton>
                    <NavButton
                        active={activeCategory === ProjectCategories.uiDesign}
                        onClick={(e) =>
                            handleChangeFilter(e, ProjectCategories.uiDesign)
                        }
                    >
                        UI Design
                    </NavButton>
                    <NavButton
                        active={activeCategory === ProjectCategories.other}
                        onClick={(e) =>
                            handleChangeFilter(e, ProjectCategories.other)
                        }
                    >
                        Other
                    </NavButton>
                </nav>
            </ProjectsHeadContainer>
            <ProjectsList>
                {projectsList
                    .filter(({ category }) => category === activeCategory)
                    .map(({ title, slug, thumb, category }) => (
                        <Project
                            key={slug}
                            title={title}
                            slug={slug}
                            thumb={thumb}
                            category={category}
                        />
                    ))}
            </ProjectsList>
        </ProjectsContainer>
    );
};

export default Projects;
