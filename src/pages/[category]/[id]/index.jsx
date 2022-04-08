import Link from 'next/link'
import { Button } from '@mui/material'
import CategoriesPreview from '../../../components/CategoriesPreview';

const Container = () => {
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