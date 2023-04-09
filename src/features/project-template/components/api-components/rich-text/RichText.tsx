import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { MARKS } from '@contentful/rich-text-types';
import {
    RichTextContainer,
    RichTextBold,
    RichTextItalic,
    RichTextUnderline,
} from './RichText.styles';

const renderOptions = {
    renderMark: {
        [MARKS.BOLD]: (text: React.ReactNode) => (
            <RichTextBold>{text}</RichTextBold>
        ),
        [MARKS.ITALIC]: (text: React.ReactNode) => (
            <RichTextItalic>{text}</RichTextItalic>
        ),
        [MARKS.UNDERLINE]: (text: React.ReactNode) => (
            <RichTextUnderline>{text}</RichTextUnderline>
        ),
    },
};

const RichText: React.FC<Queries.ContentfulRichTextFragment> = ({
    marginTop,
    text,
}) => {
    if (!text) return null;

    const richTextData = {
        raw: text.raw,
        references: [],
    };

    return (
        <RichTextContainer marginTop={marginTop}>
            {renderRichText(richTextData, renderOptions)}
        </RichTextContainer>
    );
};

export default RichText;
