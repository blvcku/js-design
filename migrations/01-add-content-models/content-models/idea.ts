import type { MigrationFunction } from 'contentful-migration';

const createIdeaContentModel: MigrationFunction = (migration) => {
    const idea = migration.createContentType(`idea`, {
        name: `Idea`,
    });

    const entryTitleFieldId = `entryTitle`;
    idea.displayField(entryTitleFieldId);
    idea.createField(entryTitleFieldId, {
        name: `Entry Title`,
        type: `Symbol`,
        required: true,
    });
    idea.changeFieldControl(entryTitleFieldId, `builtin`, `singleLine`, {
        helpText: `Affects only entry title on contentful`,
    });

    const marginTopFieldId = `marginTop`;
    idea.createField(marginTopFieldId, {
        name: `Margin Top`,
        type: `Integer`,
        required: false,
    });
    idea.changeFieldControl(marginTopFieldId, `builtin`, `numberEditor`, {
        helpText: `Given value is in pixels`,
    });

    const images = [
        {
            fieldId: `firstImage`,
            name: `First Image`,
        },
        {
            fieldId: `secondImage`,
            name: `Second Image`,
        },
        {
            fieldId: `equalToImage`,
            name: `Equal To Image`,
        },
    ];

    images.forEach(({ fieldId, name }) => {
        idea.createField(fieldId, {
            name,
            type: `Link`,
            required: true,
            linkType: `Asset`,
            validations: [
                {
                    linkMimetypeGroup: [`image`],
                },
            ],
        });
        idea.changeFieldControl(fieldId, `builtin`, `assetLinkEditor`);
    });
};

export default createIdeaContentModel;
