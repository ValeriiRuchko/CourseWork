import {Paper, Container, Typography, Box} from "@mui/material"

function Footer () {
    return (
        <Paper sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "7%",
        backgroundColor: "#54BAB9",
        }} 
        component="footer"
        square
        variant="outlined"
        >
            <Container sx={{
                    maxWidth: "lg"
                }}
                >
                <Box sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: "flex",
                my:1,
                py: 1
                }}
                >
                    <Typography variant="caption">
                        Valerii Ruchko. Copyright ©2022.
                    </Typography>
                </Box>
                    
            </Container>
        </Paper>
    );
}

export default Footer;