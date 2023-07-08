import type { MigrationFunction } from 'contentful-migration';

const createColorsContentModel: MigrationFunction = (migration) => {
    const colors = migration.createContentType(`colors`, {
        name: `Colors`,
    });

    const entryTitleFieldId = `entryTitle`;
    colors.displayField(entryTitleFieldId);
    colors.createField(entryTitleFieldId, {
        name: `Entry Title`,
        type: `Symbol`,
        required: true,
    });
    colors.changeFieldControl(entryTitleFieldId, `builtin`, `singleLine`, {
        helpText: `Affects only entry title on contentful`,
    });

    const marginTopFieldId = `marginTop`;
    colors.createField(marginTopFieldId, {
        name: `Margin Top`,
        type: `Integer`,
        required: false,
    });
    colors.changeFieldControl(marginTopFieldId, `builtin`, `numberEditor`, {
        helpText: `Given value is in pixels`,
    });

    const colorsFieldId = `colors`;
    colors.createField(colorsFieldId, {
        name: `Colors`,
        type: `Array`,
        required: true,
        items: {
            type: `Symbol`,
            validations: [
                {
                    regexp: {
                        pattern: `^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$`,
                    },
                    message: `Accepted color code: hex`,
                },
            ],
        },
    });
    colors.changeFieldControl(colorsFieldId, `builtin`, `tagEditor`);
};

export default createColorsContentModel;
