import { Typography } from '@mui/material'
import data from '../../../public/data.json'
import ProductCard from '../../components/ProductCard'
import CategoriesPreview from '../../components/CategoriesPreview'

export const getStaticPaths = async (context) => {
    return {
        paths: [
            { params: { category: 'headphones' }},
            { params: { category: 'earphones' }},
            { params: { category: 'speakers' }}
        ],
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const { category } = context.params;
    const list = data.filter(item => item.category === category);

    return {
        props: {
            products: list,
            category
        }
    }
};

const Container = ({ category, products }) => {
    
    return (
        <>
            <section className="bg-black py-6">
                <Typography
                    className="font-bold text-2xl uppercase text-slate-100 text-center"
                    component="h1">
                    { category }
                </Typography>
            </section>
            <section className='px-[5%] pt-12 pb-8'>
                {
                    products.map((product, index) => (
                        <ProductCard key={index} isCategory={true} { ...product } />
                    ))
                }
            </section>
            <CategoriesPreview />
        </>
    );
};

export default Container;