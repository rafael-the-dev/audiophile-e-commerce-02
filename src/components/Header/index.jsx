import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden, IconButton } from '@mui/material'
import classNames from 'classnames'
import logo from '../../../public/images/shared/desktop/logo.svg'
import Image from 'next/image'
import { useCallback, useMemo } from 'react'
import Link from 'next/link'

const Header = () => {

    const menu = useMemo(() => (
        <IconButton className={classNames('sm:mr-8')}>
            <MenuIcon className="text-slate-50" />
        </IconButton>
    ), []);

    const listItem = useCallback(([ href, label, index ]) => (
        <li key={index}>
            <Link href={href}>
                <a>{ label }</a>
            </Link>
        </li>
    ), []);

    const navigation = useMemo(() => (
        <nav>
            <ul>
                {
                    [[ 'Home', '/'], [ 'Headphones', '/headphones'], 
                        [ 'Speakers', '/speakers'], 
                        [ 'Earphones', '/earphones' ]].map((tuple, index) => listItem([ ...tuple, index ]))
                }
            </ul>
        </nav>
    ), []);

    console.log(navigation)

    return (
        <header className={classNames(`flex items-center justify-between text-slate-50 px-[5%] bg-black
            py-3`)}>
            <Hidden smUp>
                { menu }
            </Hidden>
            <div className={classNames('flex items-center')}>
                <Hidden smDown mdUp>
                    { menu }
                </Hidden>
                <Image 
                    alt="logo"
                    src={logo}
                />
            </div>
            <IconButton>
                <ShoppingCartOutlinedIcon  className="text-slate-50" />
            </IconButton>
        </header>
    )
};

export default Header;