import { Typography } from "@mui/material";
import ScheduleCard from "./ScheduleCard";

function ScheduleTable (props) {
    return (
        <div>
            <div style={{
            display: "flex",
            justifyContent: "center"
            }}>
                <Typography variant="h4" sx={{marginTop: "5%"}}>{props.weekday}</Typography>
            </div>
            <div className="flex-table-wrapper">
                <ScheduleCard pathN="К-10"/>
                <ScheduleCard pathN="К-11"/>
                <ScheduleCard pathN="К-12"/>
                <ScheduleCard pathN="К-13"/>
                <ScheduleCard pathN="К-14"/>
                <ScheduleCard pathN="TTП-11"/>
                <ScheduleCard pathN="TTП-12"/>
                <ScheduleCard pathN="ТТП-13"/>
                <ScheduleCard pathN="ТТП-14"/>
                <ScheduleCard pathN="ТТП-15"/>
                <ScheduleCard pathN="MI-11"/>
                <ScheduleCard pathN="MI-12"/>
            </div>
        </div>
    );
}

export default ScheduleTable;