import type { MigrationFunction } from 'contentful-migration';
import createColorsContentModel from './content-models/colors';
import createFontContentModel from './content-models/font';
import createImageContentModel from './content-models/image';
import createIdeaContentModel from './content-models/idea';
import createRichTextContentModel from './content-models/richText';
import createTypographyContentModel from './content-models/typography';
import createAccordionContentModel from './content-models/accordion';
import createContentWrapperContentModel from './content-models/contentWrapper';
import createProjectContentModel from './content-models/project';

const addContentModels: MigrationFunction = (...params) => {
    createColorsContentModel(...params);
    createFontContentModel(...params);
    createImageContentModel(...params);
    createIdeaContentModel(...params);
    createRichTextContentModel(...params);
    createTypographyContentModel(...params);
    createAccordionContentModel(...params);
    createContentWrapperContentModel(...params);
    createProjectContentModel(...params);
};

export default addContentModels;
