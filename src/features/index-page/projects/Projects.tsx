import {
    ProjectsContainer,
    ProjectsHeadContainer,
    ProjectsList,
} from './Projects.styles';
import NavButton from '@/components/buttons/nav-button/NavButton';
import Project from './project/Project';
import useProjects from './useProjects';

const Projects: React.FC = () => {
    const { categories, activeCategory, setActiveCategory, projects } =
        useProjects();

    const handleChangeCategory = (
        e: React.MouseEvent<HTMLButtonElement>,
        category: string,
    ) => {
        e.preventDefault();
        setActiveCategory(category);
    };

    return (
        <ProjectsContainer id="projects">
            <ProjectsHeadContainer>
                <h2>Projects:</h2>
                <nav aria-label="projects navigation">
                    {categories.map((category) => (
                        <NavButton
                            key={category}
                            active={activeCategory === category}
                            onClick={(e) => handleChangeCategory(e, category)}
                        >
                            {category}
                        </NavButton>
                    ))}
                </nav>
            </ProjectsHeadContainer>
            <ProjectsList>
                {projects.map(({ title, slug, thumb }) => (
                    <Project
                        key={slug}
                        title={title}
                        slug={slug}
                        thumb={thumb}
                    />
                ))}
            </ProjectsList>
        </ProjectsContainer>
    );
};

export default Projects;
