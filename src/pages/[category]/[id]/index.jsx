import Link from 'next/link'
import { Button, Typography } from '@mui/material'
import CategoriesPreview from 'src/components/CategoriesPreview';
import data from "public/data.json"
import { useMemo } from 'react'
import Card from './components/Card'

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
            <section className="px-[5%] pb-12">
                <Typography
                    className="font-bold mb-8 uppercase text-center text-2xl"
                    component="h2">
                    You may also like
                </Typography>
                <div>
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