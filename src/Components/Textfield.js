import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const Textfield=({name, ...otherProps})=>{
    
    const [field, mata] = useField(name);

    const configTextfield ={
        ...field,
        ...otherProps,
        fullWidth : true,
        variant: 'outlined',
        size:'small'
    }

    if(mata&& mata.touched && mata.error){
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }
    return(
        <TextField {...configTextfield}/>
    )
}
export default Textfield;