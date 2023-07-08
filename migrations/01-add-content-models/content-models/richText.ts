import type { MigrationFunction } from 'contentful-migration';

const createRichTextContentModel: MigrationFunction = (migration) => {
    const richText = migration.createContentType(`richText`, {
        name: `Rich Text`,
    });

    const entryTitleFieldId = `entryTitle`;
    richText.displayField(entryTitleFieldId);
    richText.createField(entryTitleFieldId, {
        name: `Entry Title`,
        type: `Symbol`,
        required: true,
    });
    richText.changeFieldControl(entryTitleFieldId, `builtin`, `singleLine`, {
        helpText: `Affects only entry title on contentful`,
    });

    const marginTopFieldId = `marginTop`;
    richText.createField(marginTopFieldId, {
        name: `Margin Top`,
        type: `Integer`,
        required: false,
    });
    richText.changeFieldControl(marginTopFieldId, `builtin`, `numberEditor`, {
        helpText: `Given value is in pixels`,
    });

    const textFieldId = `text`;
    richText.createField(textFieldId, {
        name: `Text`,
        type: `RichText`,
        required: true,
        validations: [
            {
                enabledMarks: [
                    `bold`,
                    `italic`,
                    `underline`,
                    `superscript`,
                    `subscript`,
                ],
                message: `Only bold, italic, underline, superscript, and subscript marks are allowed`,
            },
            {
                enabledNodeTypes: [
                    `heading-2`,
                    `heading-3`,
                    `heading-4`,
                    `heading-5`,
                    `heading-6`,
                    `ordered-list`,
                    `unordered-list`,
                    `hr`,
                    `blockquote`,
                    `table`,
                ],
                message: `Only heading 2, heading 3, heading 4, heading 5, heading 6, ordered list, unordered list, horizontal rule, quote, and table nodes are allowed`,
            },
            {
                nodes: {},
            },
        ],
    });
    richText.changeFieldControl(textFieldId, `builtin`, `richTextEditor`);
};

export default createRichTextContentModel;
