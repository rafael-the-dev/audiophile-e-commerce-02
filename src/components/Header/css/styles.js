import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    header: {
        '&::after': {
            content: '""'
        }
    },
    drawerRoot: {
        '& .MuiBackdrop-root': {
            top: 64
        }
    }
}))