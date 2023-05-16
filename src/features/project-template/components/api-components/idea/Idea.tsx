import PlusIcon from '@/assets/icons/plus-icon.inline.svg';
import EqualIcon from '@/assets/icons/equal-icon.inline.svg';
import { IdeaContainer, IdeaIcon, IdeaImageRenderer } from './Idea.styles';

const Idea: React.FC<Queries.ContentfulIdeaFragment> = ({
    marginTop,
    firstImage,
    secondImage,
    equalToImage,
}) => {
    return (
        <IdeaContainer marginTop={marginTop}>
            <IdeaImageRenderer image={firstImage} />
            <IdeaIcon aria-label="plus" as={PlusIcon} />
            <IdeaImageRenderer image={secondImage} />
            <IdeaIcon aria-label="equals" as={EqualIcon} />
            <IdeaImageRenderer image={equalToImage} />
        </IdeaContainer>
    );
};

export default Idea;
