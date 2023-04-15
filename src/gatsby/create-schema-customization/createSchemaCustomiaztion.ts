import type { GatsbyNode } from 'gatsby';
import siteSchema from './create-shema-customization-schemas/site.schema';
import contentfulSchema from './create-shema-customization-schemas/contentful.schema';
import sitemapSchema from './create-shema-customization-schemas/sitemap.schema';

const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
    actions,
}) => {
    actions.createTypes([siteSchema, contentfulSchema, sitemapSchema]);
};

export default createSchemaCustomization;
