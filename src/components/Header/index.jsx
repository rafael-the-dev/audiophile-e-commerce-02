import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Drawer, Hidden, IconButton } from '@mui/material'
import classNames from 'classnames'
import logo from 'public/images/shared/desktop/logo.svg'
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'
import { useStyles } from './css/styles'
import styles from './css/styles.module.css'
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux'
import { getCartLenght } from 'src/redux/selectors';

const Header = () => {
    const classes = useStyles();
    const [ openDrawer, setOpenDrawer ] = useState(false);
    const cartLength = useSelector(getCartLenght);

    const menu = useMemo(() => (
        <IconButton 
            className={classNames('pl-0 sm:mr-8')}
            onClick={() => setOpenDrawer(o => !o)}>
            { openDrawer ? <CloseIcon className="text-slate-50" /> : <MenuIcon className="text-slate-50" /> }
        </IconButton>
    ), [ openDrawer ]);

    const listItem = useCallback(([ label, href, index ]) => (
        <li className={classNames('mb-4 last:mb-0 md:mb-0 md:mr-3 md:last:mr-0')} key={index}>
            <Link href={href}>
                <a 
                    className={classNames('no-underline text-slate-50 uppercase hover:text-brown-500')}
                    onClick={() => setOpenDrawer(false)}>
                    { label }
                </a>
            </Link>
        </li>
    ), []);

    const navigation = useMemo(() => (
        <nav>
            <ul className={classNames('text-slate-50 flex flex-col items-center py-8 md:py-0 md:flex-row')}>
                {
                    [[ 'Home', '/'], [ 'Headphones', '/headphones'], 
                        [ 'Speakers', '/speakers'], 
                        [ 'Earphones', '/earphones' ]].map((tuple, index) => listItem([ ...tuple, index ]))
                }
            </ul>
        </nav>
    ), []);

    return (
        <header className={classNames(`flex items-center justify-between text-slate-50 px-[5%] bg-black
            py-3 md:py-6 after:block after:border after:border-solid after:border-gray-100 after:h-[1px] 
            after:w-[90%] after:absolute relative after:bottom-0 after:opacity-50`, styles.header)}>
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
            <Hidden mdDown>
                { navigation }
            </Hidden>
            <IconButton className="pr-0">
                <Badge badgeContent={cartLength} classes={{ badge: "bg-brown-500 text-slate-100" }} showZero >
                    <ShoppingCartOutlinedIcon  className="text-slate-50" />
                </Badge>
            </IconButton>
            <Hidden mdUp>
                <Drawer
                    anchor="top"
                    classes={{ paper: classNames('bg-black top-[64px]'), root: classNames(classes.drawerRoot, 'top-[64px]')}}
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                >
                    { navigation }
                </Drawer>
            </Hidden>
        </header>
    )
};

export default Header;