import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ProjectProps } from './Project.types';
import { ProjectContainer } from './Project.styles';

const Project: React.FC<ProjectProps> = ({ slug, title, thumb }) => {
    const image = getImage(thumb);

    if (!image || !title || !slug) return null;

    return (
        <ProjectContainer aria-label={title}>
            <Link to={`/projects/${slug}`}>
                <div>
                    <GatsbyImage image={image} alt={title} />
                </div>
            </Link>
        </ProjectContainer>
    );
};

export default Project;
