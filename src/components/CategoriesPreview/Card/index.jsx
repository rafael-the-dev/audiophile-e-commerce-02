import Link from 'next/link';
import Image from 'next/image'
import { Typography } from '@mui/material'

const Card = ({ image, name, url }) => {
    return (
        <article>
            <Image 
                alt={name}
                src={image}
            />
            <Typography
                className=""
                component="h2">
                { name }
            </Typography>
            <Link href={url}>
                <a></a>
            </Link>
        </article>
    );
};

export default Card;