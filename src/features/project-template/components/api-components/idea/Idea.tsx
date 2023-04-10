import PlusIcon from '@/assets/icons/plus-icon.inline.svg';
import EqualIcon from '@/assets/icons/equal-icon.inline.svg';
import { IdeaContainer } from './Idea.styles';
import ImageRenderer from '@/components/image-renderer/ImageRenderer';

const Idea: React.FC<Queries.ContentfulIdeaFragment> = ({
    marginTop,
    firstImage,
    secondImage,
    equalToImage,
}) => {
    return (
        <IdeaContainer marginTop={marginTop}>
            <ImageRenderer image={firstImage} />
            <PlusIcon aria-label="plus" />
            <ImageRenderer image={secondImage} />
            <EqualIcon aria-label="equals" />
            <ImageRenderer image={equalToImage} />
        </IdeaContainer>
    );
};

export default Idea;
