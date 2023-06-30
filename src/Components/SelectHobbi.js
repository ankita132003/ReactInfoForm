import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
const SelectHobbi=({
    name,
    options,
    ...otherProps
})=>{
 
const [value , setValue] = useState([]);
    
    const handleChange = (event)=>{
      setValue(event.target.value);
    }
    const configSelect ={
        ...otherProps,
        select: true,
        variant: 'outlined',
        fullWidth: true,
        value: value,
        onChange: handleChange,
        size:'small'
    }

    return(
            <TextField {...configSelect} SelectProps={{multiple: true}} >
                {Object.keys(options).map(( item, hobby)=>{
                    return(
                        <MenuItem key={hobby} value= {item}>
                            {options[item]}
                        </MenuItem>
                    )
                })}
            </TextField>
    )
}
export default SelectHobbi;