import Link from 'next/link'
import { Button } from '@mui/material'

const Container = () => {
    return (
        <>
            <div className="px-[5%]">
                <Link href="/">
                    <a>
                        <Button>Go back</Button>
                    </a>
                </Link>
            </div>
        </>
    );
};

export default Container;