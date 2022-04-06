import Image from 'next/image'
import { Typography } from '@mui/material'
import classNames from 'classnames'
import Paragraph from '../Paragraph'
import LinkButton from '../Link'
import { useStyles } from './styles'

export const Container = ({ description, isCategory, image, name }) => {
    const classes = useStyles();
    return (
        <article>
            <div className={classes.imageContainer} >
                <Image 
                    alt={name}
                    layout="fill"
                    src={`/images/${image.mobile}`}
                />
            </div>
            <div className={classNames("flex flex-col", { 'items-center text-center': isCategory })}>
                <Typography
                    className={classNames(`text-xl`)}
                    component="h2">
                    { name }
                </Typography>
                <Paragraph>
                    { description }
                </Paragraph>
                { isCategory && <LinkButton label="See product" href="/" /> }
            </div>
        </article>
    );
};

export default Container;