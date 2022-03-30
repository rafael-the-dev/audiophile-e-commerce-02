import Link from 'next/link'
import { Button } from '@mui/material'
import classNames from 'classnames'

const LinkButton = ({ className, href, label }) => {
    return (
        <Link href={href}>
            <a className={classNames('no-underline text-slate-50', className)}>
                <Button className={classNames(`bg-brown-500 text-slate-50 rounded-none px-6 py-2`)}>
                    { label }
                </Button>
            </a>
        </Link>
    );
};

export default LinkButton;