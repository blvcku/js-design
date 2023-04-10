import { Link } from 'gatsby';
import { ProjectProps } from './Project.types';
import { ProjectContainer } from './Project.styles';
import ImageRenderer from '@/components/image-renderer/ImageRenderer';

const Project: React.FC<ProjectProps> = ({ slug, title, thumb }) => {
    return (
        <ProjectContainer aria-label={title}>
            <Link to={`/projects/${slug}`}>
                <div>
                    <ImageRenderer image={thumb} alt={title} />
                </div>
            </Link>
        </ProjectContainer>
    );
};

export default Project;
