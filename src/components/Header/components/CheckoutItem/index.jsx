import Image from 'next/image'
import { Typography } from '@mui/material'
import Paragraph from 'src/components/Paragraph'
import styles from './styles.module.css'
import classNames from 'classnames'
import Controllers from './components/Controllers'

const Container = ({ item, quantity, total }) => {
    const { image, name, price } = item;
    let itemName = "".replace(name, );
    name.split(" ").forEach(word => {
        if(!["speaker", "headphones", "earphones", "wireless"].includes(word.toLowerCase())) {
            itemName += `${word} `;
        }
    });

    return (
        <article className="flex items-center justify-between mb-4">
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
                        className={classNames(`font-semibold text-lg`)}
                        component="h2">
                        { itemName }
                    </Typography>
                    <Paragraph className="mt-0">
                        $ { price }
                    </Paragraph>
                </div>
            </div>
            <Controllers quantity={quantity} product={item} />
        </article>
    );
};

export default Container;