import type { MigrationFunction } from 'contentful-migration';

const createContentWrapperContentModel: MigrationFunction = (migration) => {
    const contentWrapper = migration.createContentType(`contentWrapper`, {
        name: `Content Wrapper`,
    });

    const entryTitleFieldId = `entryTitle`;
    contentWrapper.displayField(entryTitleFieldId);
    contentWrapper.createField(entryTitleFieldId, {
        name: `Entry Title`,
        type: `Symbol`,
        required: true,
    });
    contentWrapper.changeFieldControl(
        entryTitleFieldId,
        `builtin`,
        `singleLine`,
        {
            helpText: `Affects only entry title on contentful`,
        },
    );

    const contentMarginTopFieldId = `contentMarginTop`;
    contentWrapper.createField(contentMarginTopFieldId, {
        name: `Content Margin Top`,
        type: `Integer`,
        required: false,
    });
    contentWrapper.changeFieldControl(
        contentMarginTopFieldId,
        `builtin`,
        `numberEditor`,
        {
            helpText: `Given value is in pixels`,
        },
    );

    const contentHorizontalMarginFieldId = `contentHorizontalMargin`;
    contentWrapper.createField(contentHorizontalMarginFieldId, {
        name: `Content Horizontal Margin`,
        type: `Integer`,
        required: false,
    });
    contentWrapper.changeFieldControl(
        contentHorizontalMarginFieldId,
        `builtin`,
        `numberEditor`,
        {
            helpText: `Given value is in pixels`,
        },
    );

    const contentAlignInlineFieldId = `contentAlignInline`;
    contentWrapper.createField(contentAlignInlineFieldId, {
        name: `Content Align Inline`,
        type: `Boolean`,
        required: false,
    });
    contentWrapper.changeFieldControl(
        contentAlignInlineFieldId,
        `builtin`,
        `boolean`,
        {
            trueLabel: `Yes`,
            falseLabel: `No`,
        },
    );

    const contentAlignInlineBreakpointFieldId = `contentAlignInlineBreakpoint`;
    contentWrapper.createField(contentAlignInlineBreakpointFieldId, {
        name: `Content Align Inline Breakpoint`,
        type: `Integer`,
        required: false,
    });
    contentWrapper.changeFieldControl(
        contentAlignInlineBreakpointFieldId,
        `builtin`,
        `numberEditor`,
        {
            helpText: `Given value is in pixels and represents screen width from which content will be aligned inline, works only when content align inline is set to "yes"`,
        },
    );

    const contentHorizontalGapFieldId = `contentHorizontalGap`;
    contentWrapper.createField(contentHorizontalGapFieldId, {
        name: `Content Horizontal Gap`,
        type: `Integer`,
        required: false,
    });
    contentWrapper.changeFieldControl(
        contentHorizontalGapFieldId,
        `builtin`,
        `numberEditor`,
        {
            helpText: `Given value is in pixels, works only when content align inline is set to "yes"`,
        },
    );

    const contentFieldId = `content`;
    contentWrapper.createField(contentFieldId, {
        name: `Content`,
        type: `Array`,
        required: true,
        items: {
            type: `Link`,
            validations: [
                {
                    linkContentType: [
                        `colors`,
                        `accordion`,
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
    contentWrapper.changeFieldControl(
        contentFieldId,
        `builtin`,
        `entryLinksEditor`,
        {
            bulkEditing: false,
        },
    );
};

export default createContentWrapperContentModel;
