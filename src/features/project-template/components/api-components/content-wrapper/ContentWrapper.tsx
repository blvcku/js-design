import ComponentMap from '../../component-map/ComponentMap';
import { ContentWrapperContainer } from './ContentWrapper.styles';

const ContentWrapper: React.FC<Queries.ContentfulContentWrapperFragment> = ({
    contentHorizontalMargin,
    contentAlignInline,
    contentAlignInlineBreakpoint,
    contentHorizontalGap,
    contentMarginTop,
    content,
}) => {
    return (
        <ContentWrapperContainer
            contentHorizontalMargin={contentHorizontalMargin}
            contentAlignInline={contentAlignInline}
            contentAlignInlineBreakpoint={contentAlignInlineBreakpoint}
            contentHorizontalGap={contentHorizontalGap}
            contentMarginTop={contentMarginTop}
        >
            <ComponentMap content={content} />
        </ContentWrapperContainer>
    );
};

export default ContentWrapper;
