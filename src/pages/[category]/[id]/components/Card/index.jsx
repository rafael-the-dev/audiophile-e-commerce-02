import Image from 'next/image'
import { Hidden, Typography } from '@mui/material'
import Link from '../../../../../components/Link'
import classNames from 'classnames'

const Container = ({ image, name, slug }) => {
    const ImageContainer = ({ mdDown, mdUp, src, smDown, smUp }) => {
        <Hidden mdDown={mdDown} mdUp={mdUp} smDown={smDown} smUp={smUp} >
            <Image 
                alt={name}
                layout="fill"
                src={src}
            />
        </Hidden>
    };

    const getImageURL = (name) => `/images/${name}`;

    return (
        <article className="flex flex-col items-center">
            <div className={classNames("w-full")}>
                <ImageContainer src={getImageURL(image.mobile)} smUp={true} />
                <ImageContainer src={getImageURL(image.tablet)} smDown={true} mdUp={true} />
                <ImageContainer src={getImageURL(image.desktop)} mdDown={true} />
            </div>
            <Typography
                className=""
                component="h3">

            </Typography>
            <Link 
                className="mt-6"
                href="/"
                label="See product"
            />
        </article>
    );
};

export default Container;