import {Autocomplete, TextField} from "@mui/material";

function EditTable () {
    const options = ['Предмет 1', 'Предмет 2', 'Предмет 3'];

    return (
        <div className="forms-wrapper">
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3}}
            renderInput={(params) => <TextField {...params} label="1-пара" />}
            />
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3 }}
            renderInput={(params) => <TextField {...params} label="2-пара" />}
            />
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3 }}
            renderInput={(params) => <TextField {...params} label="3-пара" />}
            />
            <Autocomplete
            selectOnFocus
            id="combo-box"
            options={options}
            sx={{flexGrow: 3 }}
            renderInput={(params) => <TextField {...params} label="4-пара" />}
            />
        </div>
    );
}

export default EditTable;