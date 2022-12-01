import { Box } from "@mui/system";
import CardComponent from "../components/Card";
import NavigationBar from "../components/Navbar";
import Footer from "../components/Footer";

function MainPage() {
    return (
        <div>
            <NavigationBar/>
            <Box className="my-wrapper">
                <CardComponent 
                    title="1 курс"
                    pathN="1-year"
                />
                <CardComponent 
                    title="2 курс"
                    pathN="2-year"
                />
                <CardComponent 
                    title="3 курс"
                    pathN="3-year"
                />
                <CardComponent 
                    title="4 курс"
                    pathN="4-year"
                />
            </Box>
            <Footer/>
        </div>
)};

export default MainPage;