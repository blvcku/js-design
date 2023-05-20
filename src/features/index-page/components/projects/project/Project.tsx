import { ProjectProps } from './Project.types';
import {
    ProjectContainer,
    ProjectTransitionLink,
    ProjectImageContainer,
    ProjectImageRenderer,
} from './Project.styles';

const Project: React.FC<ProjectProps> = ({ slug, title, thumb }) => {
    return (
        <ProjectContainer aria-label={title}>
            <ProjectTransitionLink to={`/projects/${slug}`}>
                <ProjectImageContainer>
                    <ProjectImageRenderer image={thumb} alt={title} />
                </ProjectImageContainer>
            </ProjectTransitionLink>
        </ProjectContainer>
    );
};

export default Project;
