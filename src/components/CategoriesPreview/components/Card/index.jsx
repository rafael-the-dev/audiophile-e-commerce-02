import Link from 'next/link';
import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useStyles } from './styles';
import classNames from 'classnames'

const Card = ({ image, name, url }) => {
    const classes = useStyles();
    
    return (
        <article className="bg-gray-300 mb-16 pt-24 pb-6 flex flex-col items-center relative 
            rounded-xl sm:w-[31.3333%]">
            <div
                className={classNames("absolute left-[28%] top-[-23%] translate-x-[50%]", classes.imageContainer)}>
                <Image 
                    alt={name}
                    height={150}
                    src={image}
                    width={150}
                />
            </div>
            <Typography
                className="font-bold text-center uppercase text-xl"
                component="h2">
                { name }
            </Typography>
            <Link href={url}>
                <a className='no-underline'>
                    <Button 
                        className="text-zinc-800"
                        endIcon={<ArrowForwardIosIcon className="text-brown-500" />}>
                        shop
                    </Button>
                </a>
            </Link>
        </article>
    );
};

export default Card;