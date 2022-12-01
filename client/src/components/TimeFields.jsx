import {Paper, Typography} from "@mui/material";

function TimeFields () {
        return (
            <div className="forms-wrapper">
                <Paper sx={{
                    borderRadius: "15px", 
                    flexGrow: 3, 
                    backgroundColor: "white", 
                    borderColor: "#9ED2C6",
                    borderWidth: "medium"}} 
                    variant="outlined"
                >
                        <Typography variant="h6" className="year-label-text">08:40 - 10:15</Typography>
                </Paper>
                <Paper sx={{
                    borderRadius: "15px", 
                    flexGrow: 3, 
                    backgroundColor: "white", 
                    borderColor: "#9ED2C6",
                    borderWidth: "medium"}} 
                    variant="outlined"
                >
                        <Typography variant="h6" className="year-label-text">10:35 - 12:20</Typography>
                </Paper>
                <Paper sx={{
                    borderRadius: "15px", 
                    flexGrow: 3, 
                    backgroundColor: "white", 
                    borderColor: "#9ED2C6",
                    borderWidth: "medium"}} 
                    variant="outlined"
                >
                        <Typography variant="h6" className="year-label-text">12:20 - 13:55</Typography>
                </Paper>
                <Paper sx={{
                    borderRadius: "15px", 
                    flexGrow: 3, 
                    backgroundColor: "white", 
                    borderColor: "#9ED2C6",
                    borderWidth: "medium"}} 
                    variant="outlined"
                >
                        <Typography variant="h6" className="year-label-text">14:05 - 15:40</Typography>
                </Paper>
            </div>
    );
}

export default TimeFields;