import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import {Paper, Typography} from "@mui/material";
import ScheduleTable from "../components/ScheduleTable";

function CoursePage (props) {
    return (
        <div>
            <NavigationBar />
                <div className="default-layout">
                    <Paper sx={{borderRadius: "15px"}}>
                        <Typography variant="h5" className="year-label-text">Перегляд розкладу / {props.navTitle}, бакалавр</Typography>
                    </Paper>
                </div>
                <ScheduleTable weekday="Понеділок"/>
                <ScheduleTable weekday="Вівторок"/>
                <ScheduleTable weekday="Середа"/>
                <ScheduleTable weekday="Четвер"/>
                <ScheduleTable weekday="Пʼятниця"/>
                <br />
                <br />
                <br />
            <Footer />
        </div>
    );
}

export default CoursePage;