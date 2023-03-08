import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { ProjectProps } from './Project.types';
import { ProjectContainer } from './Project.styles';

const Project: React.FC<ProjectProps> = ({ slug, title, thumb }) => {
    const image = getImage(thumb);

    if (!image) return null;

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
