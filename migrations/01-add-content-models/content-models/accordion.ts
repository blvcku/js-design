import type { MigrationFunction } from 'contentful-migration';

const createAccordionContentModel: MigrationFunction = (migration) => {
    const accordion = migration.createContentType(`accordion`, {
        name: `Accordion`,
    });

    const titleFieldId = `title`;
    accordion.displayField(titleFieldId);
    accordion.createField(titleFieldId, {
        name: `Title`,
        type: `Symbol`,
        required: true,
    });
    accordion.changeFieldControl(titleFieldId, `builtin`, `singleLine`);

    const marginTopFieldId = `marginTop`;
    accordion.createField(marginTopFieldId, {
        name: `Margin Top`,
        type: `Integer`,
        required: false,
    });
    accordion.changeFieldControl(marginTopFieldId, `builtin`, `numberEditor`, {
        helpText: `Given value is in pixels`,
    });

    const contentBottomMarginFieldId = `contentBottomMargin`;
    accordion.createField(contentBottomMarginFieldId, {
        name: `Content Bottom Margin`,
        type: `Integer`,
        required: false,
    });
    accordion.changeFieldControl(
        contentBottomMarginFieldId,
        `builtin`,
        `numberEditor`,
        {
            helpText: `Given value is in pixels`,
        },
    );

    const contentFieldId = `content`;
    accordion.createField(contentFieldId, {
        name: `Content`,
        type: `Array`,
        required: true,
        items: {
            type: `Link`,
            validations: [
                {
                    linkContentType: [
                        `colors`,
                        `contentWrapper`,
                        `idea`,
                        `image`,
                        `richText`,
                        `typography`,
                    ],
                },
            ],
            linkType: `Entry`,
        },
    });
    accordion.changeFieldControl(
        contentFieldId,
        `builtin`,
        `entryLinksEditor`,
        {
            bulkEditing: false,
        },
    );
};

export default createAccordionContentModel;
