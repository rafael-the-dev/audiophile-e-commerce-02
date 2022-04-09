import Image from 'next/image'
import { Hidden, Typography } from '@mui/material'
import classNames from 'classnames'
import Paragraph from '../Paragraph'
import LinkButton from '../Link'
import styles from './styles.module.css'

export const Container = ({ category, description, isCategory, image, name, slug }) => {
    //const classes = useStyles();

    const ImageContainer = ({ imageName }) => (
        <Image 
            alt={name}
            className="rounded-lg"
            layout="fill"
            src={`/images/${imageName}`}
        />
    );

    return (
        <article className="mb-14 flex flex-col items-center md:flex-row md:justify-between md:even:flex-row-reverse">
            <div className={styles.imageContainer} >
                <Hidden smUp>
                    <ImageContainer imageName={image.mobile} />
                </Hidden>
                <Hidden smDown mdUp>
                    <ImageContainer imageName={image.tablet} />
                </Hidden>
                <Hidden mdDown>
                    <ImageContainer imageName={image.desktop} />
                </Hidden>
            </div>
            <div className={classNames("flex flex-col pt-8 md:items-start md:text-left md:max-w-[50%]", 
                { 'items-center text-center sm:max-w-[70%]': isCategory })}>
                <Typography
                    className={classNames(`font-semibold text-2xl`)}
                    component="h2">
                    { name }
                </Typography>
                <Paragraph>
                    { description }
                </Paragraph>
                { isCategory && <LinkButton className="mt-6" label="See product" href={`/${category}/${slug}`} /> }
            </div>
        </article>
    );
};

export default Container;