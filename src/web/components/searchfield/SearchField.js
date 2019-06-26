import React, { useState, useEffect, useContext } from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";

import TextField from "@material-ui/core/TextField";

import PersonContext from "../../contexts/PersonContext";

export default function SearchField({ defaultText, displayText }) {

    const [value, setValue] = useState(defaultText || "");

    function handleChange(event) {
        setValue(event.target.value);
    }

    const context = useContext(PersonContext);

    useEffect((prevState, nextState) => console.log(context.name) ,[value]);

    return(
        <div>
            <TextField
                id="outlined-adornment-amount"
                variant="outlined"
                label={displayText}
                value={value}
                onChange={handleChange}
                InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
        </div>
    );


}