import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles(theme => ({
    header: {
        '&::after': {
            content: '""'
        }
    },
    drawerRoot: {
        width: "calc(100% - 17px)",
        '& .MuiBackdrop-root': {
            top: 64,
            width: "calc(100% - 17px)",
        },
        '& .MuiPaper-root': {
            width: "calc(100% - 17px)",
        }
    }
}))