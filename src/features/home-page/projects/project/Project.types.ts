import { IGatsbyImageData } from 'gatsby-plugin-image';

export enum ProjectCategories {
    logo = 'logo',
    uiDesign = 'ui-design',
    other = 'other',
}

export interface ProjectProps {
    category?: ProjectCategories;
    slug?: string;
    title?: string;
    thumb?: IGatsbyImageData;
}
