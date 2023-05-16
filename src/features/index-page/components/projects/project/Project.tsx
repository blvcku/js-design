import { ProjectProps } from './Project.types';
import {
    ProjectContainer,
    ProjectLink,
    ProjectImageContainer,
    ProjectImageRenderer,
} from './Project.styles';

const Project: React.FC<ProjectProps> = ({ slug, title, thumb }) => {
    return (
        <ProjectContainer aria-label={title}>
            <ProjectLink to={`/projects/${slug}`}>
                <ProjectImageContainer>
                    <ProjectImageRenderer image={thumb} alt={title} />
                </ProjectImageContainer>
            </ProjectLink>
        </ProjectContainer>
    );
};

export default Project;
