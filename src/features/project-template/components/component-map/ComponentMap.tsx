import React from 'react';
import { ComponentMapProps } from './ComponentMap.types';
import Typography from '../api-components/typography/Typography';
import RichText from '../api-components/rich-text/RichText';
import Accordion from '../api-components/accordion/Accordion';
import Colors from '../api-components/colors/Colors';
import Idea from '../api-components/idea/Idea';
import Image from '../api-components/image/Image';
import ContentWrapper from '../api-components/content-wrapper/ContentWrapper';

const ComponentMap: React.FC<ComponentMapProps> = ({ content }) => {
    return (
        <>
            {content?.map((props, index) => (
                <React.Fragment key={index}>
                    {(() => {
                        switch (props.__typename) {
                            case `ContentfulContentWrapper`:
                                return <ContentWrapper {...props} />;
                            case `ContentfulImage`:
                                return <Image {...props} />;
                            case `ContentfulIdea`:
                                return <Idea {...props} />;
                            case `ContentfulColors`:
                                return <Colors {...props} />;
                            case `ContentfulTypography`:
                                return <Typography {...props} />;
                            case `ContentfulRichText`:
                                return <RichText {...props} />;
                            case `ContentfulAccordion`:
                                return <Accordion {...props} />;
                            default:
                                return null;
                        }
                    })()}
                </React.Fragment>
            ))}
        </>
    );
};

export default ComponentMap;
