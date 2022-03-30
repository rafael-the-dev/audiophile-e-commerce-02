import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    drawerRoot: {
        '& .MuiBackdrop-root': {
            top: 64
        }
    }
}))