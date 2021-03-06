import headphoneImage from '../../../public/images/shared/desktop/image-category-thumbnail-headphones.png'
import speakerImage from '../../../public/images/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneImage from '../../../public/images/shared/desktop/image-category-thumbnail-earphones.png'
import Card from './components/Card'

const CategoriesPreview = () => {
    return (
        <section  className="px-[5%] sm:flex align-stretch justify-between sm:mt-20">
            <Card 
                image={headphoneImage}
                name="headphones"
                url="/headphones"
            />
            <Card 
                image={speakerImage}
                name="speakers"
                url="/speakers"
            />
            <Card 
                image={earphoneImage}
                name="earphones"
                url="/earphones"
            />
        </section>
    );
};

export default CategoriesPreview;