import Image from 'next/image'
import { Button, Hidden, IconButton, Typography } from '@mui/material'
import classNames from 'classnames'
import Paragraph from '../Paragraph'
import LinkButton from '../Link'
import styles from './styles.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Container = ({ category, description, isCategory, image, isNew, name, price, slug }) => {
    //const classes = useStyles();
    console.log(isNew)

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
                    className={classNames(`font-semibold text-2xl`, { "bofore:mx-auto": isNew && isCategory },
                    { "new-product before:text-brown-500": isNew })}
                    component="h2">
                    { name }
                </Typography>
                <Paragraph>
                    { description }
                </Paragraph>
                { isCategory && <LinkButton className="mt-6" label="See product" href={`/${category}/${slug}`} /> }
                { !isCategory && (
                    <>
                        <Typography
                            className={classNames(`font-semibold mt-4 text-left text-xl w-full`)}
                            component="h3">
                            ${ price }
                        </Typography>
                        <div className="flex items-stretch mt-6">
                            <div className="bg-gray-300 flex items-center px-3 py-2">
                                <IconButton>
                                    <AddIcon className="text-base" />
                                </IconButton>
                                <Typography
                                    className={classNames(`font-semibold text-xl mx-6`)}
                                    component="p">
                                    1
                                </Typography>
                                <IconButton>
                                    <RemoveIcon className="text-base" />
                                </IconButton>
                            </div>
                            <Button className="bg-brown-500 ml-4 text-slate-100 px-4 hover:bg-brown-400">
                                Add to cart
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </article>
    );
};

export default Container;