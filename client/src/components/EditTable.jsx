import {Autocomplete, TextField} from "@mui/material";

function EditTable (props) {
    const options = ['Опція 1', 'Опція 2', 'Опція 3'];

    return (
        <div className="forms-wrapper">
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3}}
            renderInput={(params) => <TextField {...params} label={props.lable_name[0]} />}
            />
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3 }}
            renderInput={(params) => <TextField {...params} label={props.lable_name[1]} />}
            />
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3 }}
            renderInput={(params) => <TextField {...params} label={props.lable_name[2]} />}
            />
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3 }}
            renderInput={(params) => <TextField {...params} label={props.lable_name[3]} />}
            />
        </div>
    );
}

export default EditTable;