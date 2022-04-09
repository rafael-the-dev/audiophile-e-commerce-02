import { Hidden } from '@mui/material'
import Image from 'next/image'

const Container = ({ mdDown, mdUp, name, src, smDown, smUp }) => (
    <Hidden mdDown={mdDown} mdUp={mdUp} smDown={smDown} smUp={smUp} >
        <Image 
            alt={name}
            className="rounded-lg"
            layout="fill"
            src={src}
        />
    </Hidden>
);

export default Container;