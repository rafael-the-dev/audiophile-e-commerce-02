import { Button, IconButton, Typography} from '@mui/material'
import classNames from 'classnames'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = () => {
    return (
        <div className="flex items-stretch mt-6">
            <div className="bg-gray-300 flex items-center px-3 py-2">
                <IconButton>
                    <AddIcon className="text-base" />
                </IconButton>
                <Typography
                    className={classNames(`font-semibold text-xl mx-6`)}
                    component="p">
                    1
                </Typography>
                <IconButton>
                    <RemoveIcon className="text-base" />
                </IconButton>
            </div>
            <Button className="bg-brown-500 ml-4 text-slate-100 px-4 hover:bg-brown-400">
                Add to cart
            </Button>
        </div>
    );
};

export default Container;