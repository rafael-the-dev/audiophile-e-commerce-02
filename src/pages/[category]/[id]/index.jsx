import Link from 'next/link'
import { Button } from '@mui/material'
import CategoriesPreview from '../../../components/CategoriesPreview';
import data from "../../../../public/data.json"

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
    return (
        <>
            <div className="px-[5%] py-6">
                <Link href="/">
                    <a className='no-underline'>
                        <Button className="capitalize">Go back</Button>
                    </a>
                </Link>
            </div>
            <CategoriesPreview />
        </>
    );
};

export default Container;