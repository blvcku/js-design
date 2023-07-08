import type { MigrationFunction } from 'contentful-migration';

const createTypographyContentModel: MigrationFunction = (migration) => {
    const typography = migration.createContentType(`typography`, {
        name: `Typography`,
    });

    const entryTitleFieldId = `entryTitle`;
    typography.displayField(entryTitleFieldId);
    typography.createField(entryTitleFieldId, {
        name: `Entry Title`,
        type: `Symbol`,
        required: true,
    });
    typography.changeFieldControl(entryTitleFieldId, `builtin`, `singleLine`, {
        helpText: `Affects only entry title on contentful`,
    });

    const marginTopFieldId = `marginTop`;
    typography.createField(marginTopFieldId, {
        name: `Margin Top`,
        type: `Integer`,
        required: false,
    });
    typography.changeFieldControl(marginTopFieldId, `builtin`, `numberEditor`, {
        helpText: `Given value is in pixels`,
    });

    const fontFieldId = `font`;
    typography.createField(fontFieldId, {
        name: `Font`,
        type: `Link`,
        required: true,
        linkType: `Entry`,
        validations: [
            {
                linkContentType: [`font`],
            },
        ],
    });
    typography.changeFieldControl(fontFieldId, `builtin`, `entryLinkEditor`);

    const weightsFieldId = `weights`;
    typography.createField(weightsFieldId, {
        name: `Weights`,
        type: `Array`,
        required: false,
        items: {
            type: `Symbol`,
            validations: [
                {
                    in: [
                        `thin`,
                        `extraLight`,
                        `light`,
                        `regular`,
                        `medium`,
                        `semiBold`,
                        `bold`,
                        `extraBold`,
                        `black`,
                    ],
                },
            ],
        },
    });
    typography.changeFieldControl(weightsFieldId, `builtin`, `checkbox`);
};

export default createTypographyContentModel;
