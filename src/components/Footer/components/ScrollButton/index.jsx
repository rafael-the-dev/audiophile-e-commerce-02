import { IconButton } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Container = () => {
    const clickHandler = () => {
        window.scroll({ behavior: "smooth", top: 0 })
    };

    return (
        <IconButton 
            className="bg-slate-300 absolute bottom-[1rem] right-[1rem] z-10 hover:bg-slate-200"
            onClick={clickHandler}>
            <KeyboardArrowDownIcon className="text-black rotate-180" style={{ transform: "rotate(180deg)" }} />
        </IconButton>
    );
};

export default Container;