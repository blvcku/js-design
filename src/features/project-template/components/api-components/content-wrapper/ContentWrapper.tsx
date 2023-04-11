import ComponentMap from '../../component-map/ComponentMap';
import { ContentWrapperContainer } from './ContentWrapper.styles';

const ContentWrapper: React.FC<Queries.ContentfulContentWrapperFragment> = ({
    contentHorizontalMargin,
    contentAlignInline,
    contentAlignInlineBreakpoint,
    contentHorizontalGap,
    content,
}) => {
    return (
        <ContentWrapperContainer
            contentHorizontalMargin={contentHorizontalMargin}
            contentAlignInline={contentAlignInline}
            contentAlignInlineBreakpoint={contentAlignInlineBreakpoint}
            contentHorizontalGap={contentHorizontalGap}
        >
            <ComponentMap content={content} />
        </ContentWrapperContainer>
    );
};

export default ContentWrapper;
