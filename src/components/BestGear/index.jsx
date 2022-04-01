import classNames from 'classnames';
import { Hidden, Typography } from '@mui/material'
import Image from 'next/image'
import bestGearImage from '../../../public/images/shared/mobile/image-best-gear.jpg'
import bestGearTabletImage from '../../../public/images/shared/tablet/image-best-gear.jpg'
import bestGearDesktopImage from '../../../public/images/shared/desktop/image-best-gear.jpg'
import Paragraph from '../Paragraph'

const BestGear = () => {
    const ImageContainer = ({ smUp, smDown, mdUp, mdDown, src }) => (
        <Hidden smUp={smUp} smDown={smDown} mdUp={mdUp} mdDown={mdDown} >
            <Image 
                alt='best gear'
                src={src}
            />
        </Hidden>
    );

    return (
        <section className={classNames(`px-[5%]`)}>
            <ImageContainer smUp={true} src={bestGearImage} />
            <div className='text-center'>
                <Paragraph>
                    Located at the heart of New York City, Audiophile is the premier 
                    store for high end headphones, earphones, speakers, and audio accessories. 
                    We have a large showroom and luxury demonstration rooms available for you 
                    to browse and experience a wide range of our products. Stop by our store to 
                    meet some of the fantastic people who make Audiophile the best place to buy your 
                    portable audio equipment.
                </Paragraph>
            </div>
        </section>
    );
};

export default BestGear;