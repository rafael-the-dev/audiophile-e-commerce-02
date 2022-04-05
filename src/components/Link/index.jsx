import Link from 'next/link'
import { Button } from '@mui/material'
import classNames from 'classnames'

const LinkButton = ({ buttonClassName, className, href, label }) => {
    return (
        <Link href={href}>
            <a className={classNames('no-underline text-slate-50', className)}>
                <Button className={classNames(`bg-brown-500 text-slate-50 rounded-none px-6 py-2 
                    hover:bg-brown-400`, buttonClassName)}>
                    { label }
                </Button>
            </a>
        </Link>
    );
};

export default LinkButton;