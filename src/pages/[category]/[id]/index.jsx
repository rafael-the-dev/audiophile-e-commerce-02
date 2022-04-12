import Link from 'next/link'
import { Button, Typography } from '@mui/material'
import CategoriesPreview from 'src/components/CategoriesPreview';
import ImageContainer from 'src/components/ImageContainer'
import ProductCard from 'src/components/ProductCard'
import Paragraph from 'src/components/Paragraph'
import data from "public/data.json"
import React, { useCallback, useMemo, createElement } from 'react'
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

    const { features, gallery, includes } = product;

    const othersProducts = useMemo(() => (
        product.others.map((other, index) => <Card key={index} { ...other }/>)
    ));

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
            <section className="px-[5%] md:flex">
                <div className='md:max-w-[50%]'>
                    <Typography
                        className="font-bold mb-8 uppercase text-2xl"
                        component="h2">
                        Features
                    </Typography>
                    <Paragraph className="" dangerouslySetInnerHTML={ features } />
                </div>
                <div className="mt-12 justify-between sm:flex md:mt-0 md:flex-col md:ml-16 md:max-w-[40%]">
                    <Typography
                        className="font-bold uppercase md:text-center text-2xl"
                        component="h2">
                        In the box
                    </Typography>
                    <ul className="mt-8 sm:grow sm:mt-0 sm:ml-[25%] md:ml-20 md:mt-6">
                        {
                            includes.map((listItem, index) => (
                                <Typography 
                                    component="li" 
                                    key={index} 
                                    className="flex items-center mb-2 text-lg">
                                    <span className="font-semibold text-brown-500">{ listItem.quantity }x</span>
                                    <span className="ml-4 opacity-90">{ listItem.item }</span>
                                </Typography>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <ul className={classNames(styles.gallery, "mt-20 px-[5%] sm:grid justify-between")}>
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