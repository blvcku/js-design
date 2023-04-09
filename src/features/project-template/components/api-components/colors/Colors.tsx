import {
    ColorsContainer,
    ColorContainer,
    ColorBox,
    ColorName,
} from './Colors.styles';

const Colors: React.FC<Queries.ContentfulColorsFragment> = ({
    marginTop,
    colors,
}) => {
    return (
        <ColorsContainer marginTop={marginTop}>
            {colors?.map((color) => (
                <ColorContainer key={color}>
                    <ColorBox backgroundColor={color} />
                    <ColorName>{color}</ColorName>
                </ColorContainer>
            ))}
        </ColorsContainer>
    );
};

export default Colors;
