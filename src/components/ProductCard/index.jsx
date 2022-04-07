import Image from 'next/image'
import { Typography } from '@mui/material'
import classNames from 'classnames'
import Paragraph from '../Paragraph'
import LinkButton from '../Link'
import styles from './styles.module.css'

export const Container = ({ description, isCategory, image, name }) => {
    //const classes = useStyles();

    return (
        <article className="mb-14">
            <div className={styles.imageContainer} >
                <Image 
                    alt={name}
                    className="rounded-lg"
                    layout="fill"
                    src={`/images/${image.mobile}`}
                />
            </div>
            <div className={classNames("flex flex-col pt-8", { 'items-center text-center': isCategory })}>
                <Typography
                    className={classNames(`font-semibold text-2xl`)}
                    component="h2">
                    { name }
                </Typography>
                <Paragraph>
                    { description }
                </Paragraph>
                { isCategory && <LinkButton className="mt-6" label="See product" href="/" /> }
            </div>
        </article>
    );
};

export default Container;