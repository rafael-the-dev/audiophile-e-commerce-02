import { Typography } from '@mui/material'

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