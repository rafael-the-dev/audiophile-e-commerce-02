import { Badge, IconButton } from '@mui/material';
import { useSelector } from 'react-redux'
import { getCartLenght } from 'src/redux/selectors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartModal from '../CartModal'
import { useCallback, useMemo, useState } from 'react';

const Container = () => {
    const cartLength = useSelector(getCartLenght);
    const [ openModal, setOpenModal ] = useState(false);

    const toggleModal = useCallback(() => setOpenModal(o => !o), []);
    const handleCloseDialog = useCallback(() => setOpenModal(false), []);

    const buttonMemo = useMemo(() => (
        <IconButton 
            className="pr-0"
            onClick={toggleModal}>
            <Badge badgeContent={cartLength} classes={{ badge: "bg-brown-500 text-slate-100" }} showZero >
                <ShoppingCartOutlinedIcon  className="text-slate-50" />
            </Badge>
        </IconButton>
    ), [ cartLength ]);

    const modalMemo = useMemo(() => (
        <CartModal 
            handleCloseDialog={handleCloseDialog} 
            openDialog={openModal} 
        />
    ), [ handleCloseDialog, openModal ]);

    return (
        <>
            { buttonMemo }
            { modalMemo }
        </>
    );
};

export default Container;