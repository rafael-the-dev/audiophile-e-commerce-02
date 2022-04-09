import { Hidden } from '@mui/material'
import Image from 'next/image'

const Container = ({ isRelative, mdDown, mdUp, name, src, smDown, smUp }) => {
    const getImageURL = (name) => `/images/${name}`;

    const url = isRelative ? getImageURL(src) : src;

    return (
        <Hidden mdDown={mdDown} mdUp={mdUp} smDown={smDown} smUp={smUp} >
            <Image 
                alt={name}
                className="rounded-lg"
                layout="fill"
                src={url}
            />
        </Hidden>
    );
};

export default Container;