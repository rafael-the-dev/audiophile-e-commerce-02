import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden, IconButton } from '@mui/material'
import classNames from 'classnames'
import logo from '../../../public/images/shared/desktop/logo.svg'
import Image from 'next/image'

const Header = () => {

    return (
        <header className={classNames(`flex items-center justify-between text-slate-50 px-[5%] bg-black
            py-3`)}>
            <IconButton>
                <MenuIcon className="text-slate-50" />
            </IconButton>
            <div>
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