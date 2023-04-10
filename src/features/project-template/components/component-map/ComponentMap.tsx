import React from 'react';
import { ComponentMapProps } from './ComponentMap.types';
import Typography from '../api-components/typography/Typography';
import RichText from '../api-components/rich-text/RichText';
import Accordion from '../api-components/accordion/Accordion';
import Colors from '../api-components/colors/Colors';
import Idea from '../api-components/idea/Idea';

const ComponentMap: React.FC<ComponentMapProps> = ({ content }) => {
    return (
        <>
            {content?.map((props, index) => (
                <React.Fragment key={index}>
                    {(() => {
                        switch (props.__typename) {
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
