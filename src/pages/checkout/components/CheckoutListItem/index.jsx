import classNames from 'classnames'
import { Typography } from '@mui/material'
import Image from 'next/image'

import styles from './styles.module.css'

import Paragraph from 'src/components/Paragraph'

const Container = ({ image, name, quantity, price }) => {
    let itemName = "".replace(name, );
    name.split(" ").forEach(word => {
        if(!["speaker", "headphones", "earphones", "wireless"].includes(word.toLowerCase())) {
            itemName += `${word} `;
        }
    });

    return (
        <article className="flex justify-between">
            <div className="flex items-center">
                <div className={classNames(`rounded-lg`, styles.imageContainer)}>
                    <Image
                        alt={name}
                        className="rounded-lg"
                        src={`/images/${image.mobile}`}
                        layout='fill'
                    />
                </div>
                <div className="flex flex-col ml-4">
                    <Typography
                        className={classNames(`font-semibold text-base`)}
                        component="h2">
                        { itemName }
                    </Typography>
                    <Paragraph className="mt-0">
                        $ { price }
                    </Paragraph>
                </div>
            </div>
            <Paragraph className="mt-0">x{ quantity }</Paragraph>
        </article>
    );
};

export default Container;