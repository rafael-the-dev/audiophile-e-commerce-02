import Link from 'next/link'
import { Button } from '@mui/material'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const LinkButton = ({ buttonClassName, className, clickHandler, disabled, href, label }) => {
    const { asPath } = useRouter();

    return (
        <Link href={disabled ? asPath : href}>
            <a 
                className={classNames('no-underline text-slate-50', className)} 
                onClick={disabled ? () => {} : clickHandler}>
                <Button className={classNames(`bg-brown-500 text-slate-50 rounded-none px-6 py-2 
                    hover:bg-brown-400`, buttonClassName)}
                    disabled={disabled}>
                    { label }
                </Button>
            </a>
        </Link>
    );
};

export default LinkButton;