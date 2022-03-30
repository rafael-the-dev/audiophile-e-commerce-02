import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Hidden, IconButton } from '@mui/material'
import classNames from 'classnames'
import logo from '../../../public/images/shared/desktop/logo.svg'
import Image from 'next/image'
import { useCallback, useMemo, useState } from 'react'
import Link from 'next/link'
import { useStyles } from './css/styles'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    const classes = useStyles();
    const [ openDrawer, setOpenDrawer ] = useState(false);

    const menu = useMemo(() => (
        <IconButton 
            className={classNames('sm:mr-8')}
            onClick={() => setOpenDrawer(o => !o)}>
            { openDrawer ? <CloseIcon className="text-slate-50" /> : <MenuIcon className="text-slate-50" /> }
        </IconButton>
    ), [ openDrawer ]);

    const listItem = useCallback(([ label, href, index ]) => (
        <li className={classNames('mb-4 last:mb-0')} key={index}>
            <Link href={href}>
                <a className={classNames('no-underline text-slate-50 uppercase')}>{ label }</a>
            </Link>
        </li>
    ), []);

    const navigation = useMemo(() => (
        <nav className={classNames(`border-solid border-slate-100 border-t`)}>
            <ul className={classNames('text-slate-50 flex flex-col items-center py-6')}>
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
            <Drawer
                anchor="top"
                classes={{ paper: classNames('bg-black top-[64px]'), root: classNames(classes.drawerRoot, 'top-[64px]')}}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                { navigation }
          </Drawer>
        </header>
    )
};

export default Header;