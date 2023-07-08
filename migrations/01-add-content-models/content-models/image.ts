import type { MigrationFunction } from 'contentful-migration';

const createImageContentModel: MigrationFunction = (migration) => {
    const image = migration.createContentType(`image`, {
        name: `Image`,
    });

    const entryTitleFieldId = `entryTitle`;
    image.displayField(entryTitleFieldId);
    image.createField(entryTitleFieldId, {
        name: `Entry Title`,
        type: `Symbol`,
        required: true,
    });
    image.changeFieldControl(entryTitleFieldId, `builtin`, `singleLine`, {
        helpText: `Affects only entry title on contentful`,
    });

    const marginTopFieldId = `marginTop`;
    image.createField(marginTopFieldId, {
        name: `Margin Top`,
        type: `Integer`,
        required: false,
    });
    image.changeFieldControl(marginTopFieldId, `builtin`, `numberEditor`, {
        helpText: `Given value is in pixels`,
    });

    const roundedCornersFieldId = `roundedCorners`;
    image.createField(roundedCornersFieldId, {
        name: `Rounded Corners`,
        type: `Boolean`,
        required: false,
    });
    image.changeFieldControl(roundedCornersFieldId, `builtin`, `boolean`, {
        trueLabel: `Yes`,
        falseLabel: `No`,
    });

    const imageFieldId = `image`;
    image.createField(imageFieldId, {
        name: `Image`,
        type: `Link`,
        required: true,
        linkType: `Asset`,
        validations: [
            {
                linkMimetypeGroup: [`image`],
            },
        ],
    });
    image.changeFieldControl(imageFieldId, `builtin`, `assetLinkEditor`);
};

export default createImageContentModel;
