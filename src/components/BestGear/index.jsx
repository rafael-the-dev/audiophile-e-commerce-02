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
        <section className={classNames(`px-[5%] py-16 md:flex md:flex-row-reverse items-center
            justify-between`)}>
            <ImageContainer smUp={true} src={bestGearImage} />
            <ImageContainer smDown={true} mdUp={true} src={bestGearTabletImage} />
            <ImageContainer mdDown={true} src={bestGearDesktopImage} />
            <div className='text-center mt-4 sm:mt-8 md:w-[47%] md:text-left'>
                <Typography 
                    className='font-bold mb-6 text-3xl md:text-[2.8rem] md:leading-[3rem]'
                    component="h2">
                    Bringing you the<Hidden mdDown><br/></Hidden> <em className='text-brown-500'>best</em> audio gear
                </Typography>
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