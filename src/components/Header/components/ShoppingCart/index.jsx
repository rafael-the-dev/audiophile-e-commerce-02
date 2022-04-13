import { Badge, IconButton } from '@mui/material';
import { useSelector } from 'react-redux'
import { getCartLenght } from 'src/redux/selectors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = () => {
    const cartLength = useSelector(getCartLenght);

    return (
        <IconButton className="pr-0">
            <Badge badgeContent={cartLength} classes={{ badge: "bg-brown-500 text-slate-100" }} showZero >
                <ShoppingCartOutlinedIcon  className="text-slate-50" />
            </Badge>
        </IconButton>
    );
};

export default Container;