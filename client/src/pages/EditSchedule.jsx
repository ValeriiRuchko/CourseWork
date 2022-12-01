import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Fab, Paper, Typography } from "@mui/material";
import {useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import EditTable from "../components/EditTable";
import TimeFields from "../components/TimeFields";

function EditSchedule () {
    const id = useParams().id;
    const navigate = useNavigate();

    return (
        <div>
            <NavigationBar/>
                <div className="default-layout">
                    <div className="editpage-label-wrapper">
                    <Fab 
                    color="secondary"
                    variant="contained" 
                    sx={{marginTop: "auto", marginBottom: "auto"}}
                    onClick={() => navigate(-1)}><ArrowBackIcon /></Fab>
                    <Button variant="contained" sx={{borderRadius: "15px", flexGrow: 1 }} color="secondary">
                        <Typography variant="h5" sx={{textTransform: "none" }}>Зберегти зміни</Typography>
                    </Button>
                    <Paper sx={{borderRadius: "15px", flexGrow: 6}}>
                        <Typography variant="h5" className="year-label-text">Редагування розкладу, група {id} / 1-курс, бакалавр</Typography>
                    </Paper>
                    </div>
                </div>
                <TimeFields />
                <EditTable lable_name={["Назва", "Назва", "Назва", "Назва"]} />
                <EditTable lable_name={["Час", "Час", "Час", "Час"]}/>
                <EditTable lable_name={["Ступінь", "Ступінь", "Ступінь", "Ступінь"]}/>
                <EditTable lable_name={["ПІБ", "ПІБ", "ПІБ", "ПІБ"]}/>
            <Footer />
        </div>
    );
}

export default EditSchedule;