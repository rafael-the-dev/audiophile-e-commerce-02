import Link from 'next/link';
import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Card = ({ image, name, url }) => {
    return (
        <article className="bg-gray-300 mb-8 py-6 flex flex-col items-center rounded-xl">
            <Image 
                alt={name}
                className="h-[180px]"
                src={image}
            />
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