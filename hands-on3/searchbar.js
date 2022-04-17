import React from "react";
// import "../index.css"
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import { ClassNames } from "@emotion/react";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';

// import { useState } from "react";

export default function Searching({text,handleInput,}) {
    
    return (
        <div>
           {/* <TextField id="filled-basic" label="Type to search" variant="filled" /> */}
             <input type="text" placeholder="Type here to Search"/>
            
             {/* <Button variant="contained" color="secondary">Search</Button> */}
            <button type="submit">Search</button>
        
        </div>
           
        
    );
}

