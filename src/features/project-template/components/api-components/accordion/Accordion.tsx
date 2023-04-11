import ArrowIcon from '@/assets/icons/arrow-vertical.inline.svg';
import {
    AccordionContainer,
    AccordionTitle,
    AccordionContentContainer,
} from './Accordion.styles';
import ComponentMap from '../../component-map/ComponentMap';

const Accordion: React.FC<Queries.ContentfulAccordionFragment> = ({
    marginTop,
    contentBottomMargin,
    title,
    content,
}) => {
    return (
        <AccordionContainer marginTop={marginTop}>
            <AccordionTitle>
                {title}
                <ArrowIcon />
            </AccordionTitle>
            <AccordionContentContainer
                contentBottomMargin={contentBottomMargin}
            >
                <ComponentMap content={content} />
            </AccordionContentContainer>
        </AccordionContainer>
    );
};

export default Accordion;
