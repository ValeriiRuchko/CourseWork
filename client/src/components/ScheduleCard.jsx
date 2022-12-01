import {Card, CardContent, Typography, CardActionArea} from "@mui/material";
import {Link} from "react-router-dom";

function ScheduleCard (props) {
    return (
        <Card sx={{borderRadius: "0", backgroundColor: "#F7ECDE"}}
        >
                <CardActionArea component={Link} to={props.pathN}>
                    <CardContent>
                        <Typography variant="h6" className="cell-wrapper" >{props.pathN}</Typography>
                    </CardContent>
                        <hr />
                    <CardContent>
                        <Typography sx={{  fontSize: "14px"}} className="cell-wrapper">Дискретна математика,(лек. 22 год) проф. Маринич</Typography>
                    </CardContent>
                        <hr />
                    <CardContent>
                        <Typography sx={{  fontSize: "14px"}} className="cell-wrapper">Дискретна математика,(лек. 22 год) проф. Маринич</Typography>
                    </CardContent>
                        <hr />
                    <CardContent>
                        <Typography sx={{  fontSize: "14px"}} className="cell-wrapper">Дискретна математика,(лек. 22 год) проф. Маринич</Typography>
                    </CardContent>
                        <hr />
                    <CardContent>
                        <Typography sx={{  fontSize: "14px"}} className="cell-wrapper">Дискретна математика,(лек. 22 год) проф. Маринич</Typography>
                    </CardContent>
                </CardActionArea>
        </Card>
    );
}

export default ScheduleCard;