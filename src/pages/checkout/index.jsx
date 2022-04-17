import { Grid, Paper, Typography } from '@mui/material'

const Container = () => {
    return(
        <Grid container>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
                <Paper 
                    className="px-[5%]"
                    elevation={0}>
                    <Typography
                        className="font-bold uppercase text-2xl"
                        component="h2">
                        Summary
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Container;