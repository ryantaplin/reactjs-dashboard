import React from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";

import React, { useState } from 'react';

export default function SearchField({ defaultText, displayText }) {

    const [value, setValue] = useState(defaultText || "");

    function handleChange(event) {
        setValue(event.target.value);
    }

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

// class SearchField extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {value: this.props.defaultText};
//     }
//
//     handleChange = event => {
//         this.setState({value: event.target.value});
//     };
//
//     render() {
//         return (
//             <div>
//                 <TextField
//                     id="outlined-adornment-amount"
//                     variant="outlined"
//                     label={this.props.displayText}
//                     value={this.state.value}
//                     onChange={this.handleChange}
//                     InputProps={{startAdornment: <InputAdornment position="start">$</InputAdornment>}}/>
//             </div>
//         );
//     }
// }
//
// export default SearchField;
//
//
