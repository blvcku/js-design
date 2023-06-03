import type { ProjectProps } from './Project.types';
import {
    ProjectContainer,
    ProjectPageTransitionLink,
    ProjectImageContainer,
    ProjectImageRenderer,
} from './Project.styles';

const Project: React.FC<ProjectProps> = ({ slug, title, thumb }) => {
    return (
        <ProjectContainer aria-label={title}>
            <ProjectPageTransitionLink to={`/projects/${slug}`}>
                <ProjectImageContainer>
                    <ProjectImageRenderer image={thumb} alt={title} />
                </ProjectImageContainer>
            </ProjectPageTransitionLink>
        </ProjectContainer>
    );
};

export default Project;
