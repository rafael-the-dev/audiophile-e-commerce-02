import Link from 'next/link'
import { Button, Typography } from '@mui/material'
import CategoriesPreview from 'src/components/CategoriesPreview';
import ImageContainer from 'src/components/ImageContainer'
import ProductCard from 'src/components/ProductCard'
import data from "public/data.json"
import { useMemo } from 'react'
import Card from './components/Card'
import classNames from 'classnames';
import styles from './css/styles.module.css'

export const getStaticPaths = async () => {
    const paths = data.reduce((prevValue, currentValue) => {
        const getParam = (id) => ({ params: { category: currentValue.category, id } });

        return [ ...prevValue, getParam(String(currentValue.id)), getParam(currentValue.slug) ]
    }, []);

    return {
        paths,
        fallback: true
    };
};

export const getStaticProps = async (context) => {
    const { id } = context.params;
    
    let product = data.find(item => parseInt(id) === item.id);

    if(!Boolean(product)) {
        product = data.find(item => id === item.slug);
    }

    return {
        props: {
            product
        }
    }
};

const Container = ({ product }) => {
    if(!Boolean(product)) return <Typography className="text-3xl" component="h1">Loading...</Typography>;

    const { gallery } = product;

    const othersProducts = useMemo(() => (
        product.others.map((other, index) => <Card key={index} { ...other }/>)
    ))

    return (
        <>
            <div className="px-[5%] py-6">
                <Link href="/">
                    <a className='no-underline'>
                        <Button className="capitalize">Go back</Button>
                    </a>
                </Link>
            </div>
            <section className={classNames(`px-[5%]`)}>
                <ProductCard { ...product } isNew={product.new} />
            </section>
            <ul className={classNames(styles.gallery, "px-[5%] sm:grid justify-between")}>
                <li className={classNames(styles.gallery__first, "h-[180px] sm:h-auto relative rounded-lg mb-4 sm:mb-0")}>
                    <ImageContainer isRelative name="" src={gallery.first.mobile} smUp={true} />
                    <ImageContainer isRelative name="" src={gallery.first.tablet} smDown={true} mdUp={true} />
                    <ImageContainer isRelative name="" src={gallery.first.desktop} mdDown={true} />
                </li>
                <li className={classNames(styles.gallery__second, "h-[180px] sm:h-auto relative rounded-lg mb-4 sm:mb-0")}>
                    <ImageContainer isRelative name="" src={gallery.second.mobile} smUp={true} />
                    <ImageContainer isRelative name="" src={gallery.second.tablet} smDown={true} mdUp={true} />
                    <ImageContainer isRelative name="" src={gallery.second.desktop} mdDown={true} />
                </li>
                <li className={classNames(styles.gallery__third, "h-[300px] sm:h-auto relative rounded-lg")}>
                    <ImageContainer isRelative name="" src={gallery.third.mobile} smUp={true} />
                    <ImageContainer isRelative name="" src={gallery.third.tablet} smDown={true} mdUp={true} />
                    <ImageContainer isRelative name="" src={gallery.third.desktop} mdDown={true} />
                </li>
            </ul>
            <section className="px-[5%] mt-20 pb-12 sm:pb-8">
                <Typography
                    className="font-bold mb-8 uppercase text-center text-2xl"
                    component="h2">
                    You may also like
                </Typography>
                <div className="sm:flex items-stretch justify-between">
                    {
                        othersProducts
                    }
                </div>
            </section>
            <CategoriesPreview />
        </>
    );
};

export default Container;