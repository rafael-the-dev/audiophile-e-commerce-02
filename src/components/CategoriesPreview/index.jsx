import headphoneImage from '../../../public/images/shared/desktop/image-category-thumbnail-headphones.png'
import speakerImage from '../../../public/images/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneImage from '../../../public/images/shared/desktop/image-category-thumbnail-earphones.png'

const CategoriesPreview = () => {
    return (
        <section>
            <Card 
                src={headphoneImage}
                name="headphones"
                url="/headphones"
            />
            <Card 
                src={speakerImage}
                name="speakers"
                url="/speakers"
            />
            <Card 
                src={earphoneImage}
                name="earphones"
                url="/earphones"
            />
        </section>
    );
};

export default CategoriesPreview;