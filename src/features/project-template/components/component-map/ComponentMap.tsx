import { ComponentMapProps } from './ComponentMap.types';
import Typography from '../api-components/typography/Typography';
import RichText from '../api-components/rich-text/RichText';
import Accordion from '../api-components/accordion/Accordion';
import Colors from '../api-components/colors/Colors';

const ComponentMap: React.FC<ComponentMapProps> = ({ content }) => {
    return (
        <>
            {content?.map((props, index) => {
                switch (props.__typename) {
                    case `ContentfulColors`:
                        return <Colors key={index} {...props} />;
                    case `ContentfulTypography`:
                        return <Typography key={index} {...props} />;
                    case `ContentfulRichText`:
                        return <RichText key={index} {...props} />;
                    case `ContentfulAccordion`:
                        return <Accordion key={index} {...props} />;
                    default:
                        return null;
                }
            })}
        </>
    );
};

export default ComponentMap;
