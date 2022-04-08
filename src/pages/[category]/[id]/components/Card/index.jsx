import Image from 'next/image'
import { Hidden, Typography } from '@mui/material'
import Link from '../../../../../components/Link'
import classNames from 'classnames'
import styles from './css/styles.module.css'

const Container = ({ image, name, slug }) => {
    const ImageContainer = ({ mdDown, mdUp, src, smDown, smUp }) => (
        <Hidden mdDown={mdDown} mdUp={mdUp} smDown={smDown} smUp={smUp} >
            <Image 
                alt={name}
                className="rounded-lg"
                layout="fill"
                src={src}
            />
        </Hidden>
    );

    const getImageURL = (name) => `/images/${name}`;

    return (
        <article className="flex flex-col items-center mb-12">
            <div className={classNames(styles.imageContainer, "frounded-lg w-full")}>
                <ImageContainer src={getImageURL(image.mobile)} smUp={true} />
                <ImageContainer src={getImageURL(image.tablet)} smDown={true} mdUp={true} />
                <ImageContainer src={getImageURL(image.desktop)} mdDown={true} />
            </div>
            <Typography
                className="font-bold mt-4 uppercase text-2xl"
                component="h3">
                { name }
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