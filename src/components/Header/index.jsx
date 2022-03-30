import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Hidden, IconButton } from '@mui/material'
import classNames from 'classnames'
import { ReactComponent as Logo } from '../../../public/images/shared/desktop/logo.svg'

const Header = () => {
    return (
        <header className={classNames(`flex items-center justify-between text-slate-50 bg-black`)}>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <div>
                
            </div>
            <IconButton>
                <ShoppingCartOutlinedIcon />
            </IconButton>
        </header>
    )
};

export default Header;