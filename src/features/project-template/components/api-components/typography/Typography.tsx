import {
    TypographyContainer,
    TypographyName,
    TypographyWeightsContainer,
    TypographyWeight,
} from './Typography.styles';
import { TypographyWeights, TypographyWeightNames } from './Typography.types';

const Typography: React.FC<Queries.ContentfulTypographyFragment> = ({
    marginTop,
    weights,
    font,
}) => {
    if (!font) return null;
    const { name, style } = font;
    return (
        <TypographyContainer marginTop={marginTop}>
            <TypographyName fontName={name} fontStyle={style}>
                {name}
            </TypographyName>
            <TypographyWeightsContainer>
                {weights?.map((weight) => {
                    const fontWeight = font[weight];
                    if (!fontWeight || !fontWeight.url) return null;
                    const { url } = fontWeight;
                    return (
                        <TypographyWeight
                            fontWeight={TypographyWeights[weight]}
                            fontName={name}
                            fontStyle={style}
                            fontUrl={url}
                            key={weight}
                        >
                            {TypographyWeightNames[weight]}
                        </TypographyWeight>
                    );
                })}
            </TypographyWeightsContainer>
        </TypographyContainer>
    );
};

export default Typography;
