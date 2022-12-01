import {Card, CardContent, Typography, CardActionArea, Button} from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {Link} from "react-router-dom";

function CardComponent (props) {
    return (
        <Card sx={{borderRadius: "15px"}}>
                <CardActionArea component={Link} to={props.pathN}>
                    <LocalLibraryIcon sx={{margin: "3% 46%"}}/>
                    <CardContent sx={{display: "grid", textAlign: "center"}}>
                        <Typography gutterBottom variant="h4" component="div">{props.title}</Typography>
                    </CardContent>
                </CardActionArea>
            <Button sx={{
            borderBottomLeftRadius: "10px", 
            borderBottomRightRadius: "10px",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
            width: "288px"
            }} variant="contained">Завантажити <DownloadIcon/></Button>
        </Card>
    );
}

export default CardComponent;