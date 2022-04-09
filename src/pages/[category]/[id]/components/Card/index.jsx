import Image from 'next/image'
import { Hidden, Typography } from '@mui/material'
import Link from 'src/components/Link'
import classNames from 'classnames'
import styles from './css/styles.module.css'
import ImageContainer from 'src/components/ImageContainer'

const Container = ({ image, name, slug }) => {

    const getImageURL = (name) => `/images/${name}`;

    return (
        <article className="flex flex-col items-center mb-12 sm:w-[31.33333%]">
            <div className={classNames(styles.imageContainer, "frounded-lg w-full")}>
                <ImageContainer name={name} src={getImageURL(image.mobile)} smUp={true} />
                <ImageContainer name={name} src={getImageURL(image.tablet)} smDown={true} mdUp={true} />
                <ImageContainer name={name} src={getImageURL(image.desktop)} mdDown={true} />
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