import { Typography } from '@mui/material'

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
    console.log(context)
    return {
        props: {

        }
    }
};

const Container = () => {
    return (
        <>
            <section className="bg-black py-6">
                <Typography
                    className="font-bold text-2xl text-slate-100 text-center"
                    component="h1">
                    Hello World
                </Typography>
            </section>
        </>
    );
};

export default Container;