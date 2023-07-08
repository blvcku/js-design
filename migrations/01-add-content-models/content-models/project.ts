import type { MigrationFunction } from 'contentful-migration';

const createProjectContentModel: MigrationFunction = (migration) => {
    const project = migration.createContentType(`projects`, {
        name: `Project`,
    });

    const titleFieldId = `title`;
    project.displayField(titleFieldId);
    project.createField(titleFieldId, {
        name: `Title`,
        type: `Symbol`,
        required: true,
        validations: [
            {
                unique: true,
            },
        ],
    });
    project.changeFieldControl(titleFieldId, `builtin`, `singleLine`);

    const slugFieldId = `slug`;
    project.createField(slugFieldId, {
        name: `Slug`,
        type: `Symbol`,
        required: true,
        validations: [
            {
                unique: true,
            },
        ],
    });
    project.changeFieldControl(slugFieldId, `builtin`, `slugEditor`, {
        trackingFieldId: titleFieldId,
    });

    const categoryFieldId = `category`;
    project.createField(categoryFieldId, {
        name: `Category`,
        type: `Symbol`,
        required: true,
        validations: [
            {
                in: [`Logo`, `UI Design`, `Other`],
            },
        ],
        defaultValue: {
            'en-US': `other`,
        },
    });
    project.changeFieldControl(categoryFieldId, `builtin`, `dropdown`);

    const descriptionFieldId = `description`;
    project.createField(descriptionFieldId, {
        name: `Description`,
        type: `Symbol`,
        required: false,
    });
    project.changeFieldControl(descriptionFieldId, `builtin`, `singleLine`);

    const keywordsFieldId = `keywords`;
    project.createField(keywordsFieldId, {
        name: `Keywords`,
        type: `Array`,
        required: false,
        items: {
            type: `Symbol`,
            validations: [],
        },
    });
    project.changeFieldControl(keywordsFieldId, `builtin`, `tagEditor`);

    const thumbFieldId = `thumb`;
    project.createField(thumbFieldId, {
        name: `Thumb`,
        type: `Link`,
        required: true,
        linkType: `Asset`,
        validations: [
            {
                linkMimetypeGroup: [`image`],
            },
        ],
    });
    project.changeFieldControl(thumbFieldId, `builtin`, `assetLinkEditor`);

    const bannerFieldId = `banner`;
    project.createField(bannerFieldId, {
        name: `Banner`,
        type: `Link`,
        required: true,
        linkType: `Asset`,
        validations: [
            {
                linkMimetypeGroup: [`image`],
            },
        ],
    });
    project.changeFieldControl(bannerFieldId, `builtin`, `assetLinkEditor`);

    const contentFieldId = `content`;
    project.createField(contentFieldId, {
        name: `Content`,
        type: `Array`,
        required: true,
        items: {
            type: `Link`,
            validations: [
                {
                    linkContentType: [
                        `accordion`,
                        `richText`,
                        `typography`,
                        `colors`,
                        `idea`,
                        `image`,
                        `contentWrapper`,
                    ],
                },
            ],
            linkType: `Entry`,
        },
    });
    project.changeFieldControl(contentFieldId, `builtin`, `entryCardsEditor`, {
        bulkEditing: false,
    });
};

export default createProjectContentModel;
