import type { MigrationFunction } from 'contentful-migration';

const createFontContentModel: MigrationFunction = (migration) => {
    const font = migration.createContentType(`font`, {
        name: `Font`,
    });

    const nameFieldId = `name`;
    font.displayField(nameFieldId);
    font.createField(nameFieldId, {
        name: `Name`,
        type: `Symbol`,
        required: true,
    });
    font.changeFieldControl(nameFieldId, `builtin`, `singleLine`);

    const styleFieldId = `style`;
    font.createField(styleFieldId, {
        name: `Style`,
        type: `Symbol`,
        required: true,
        validations: [
            {
                in: [`normal`, `italic`],
            },
        ],
    });
    font.changeFieldControl(styleFieldId, `builtin`, `dropdown`);

    const fontWeights = [
        {
            fieldId: `thin`,
            name: `Thin`,
        },
        {
            fieldId: `extraLight`,
            name: `Extra Light`,
        },
        {
            fieldId: `light`,
            name: `Light`,
        },
        {
            fieldId: `regular`,
            name: `Regular`,
        },
        {
            fieldId: `medium`,
            name: `Medium`,
        },
        {
            fieldId: `semiBold`,
            name: `Semi Bold`,
        },
        {
            fieldId: `bold`,
            name: `Bold`,
        },
        {
            fieldId: `extraBold`,
            name: `Extra Bold`,
        },
        {
            fieldId: `black`,
            name: `Black`,
        },
    ];
    fontWeights.forEach(({ fieldId, name }) => {
        font.createField(fieldId, {
            name,
            type: `Link`,
            required: false,
            linkType: `Asset`,
            validations: [
                {
                    linkMimetypeGroup: [`attachment`],
                    message: `Accepted file types: ttf, woff, woff2`,
                },
            ],
        });
        font.changeFieldControl(fieldId, `builtin`, `assetLinkEditor`);
    });
};

export default createFontContentModel;
