import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';

const Submit =({
    children,
    ...otherProps
})=>{
    const {submitForm } =useFormikContext();

    const handleSubmit = ()=>{
        alert('submitted')
        submitForm();
    }

    const configButton ={
        ...otherProps,
        variant: 'contained',
        fullWidth: true,
        color: 'primary',
        onClick: handleSubmit
    }

    return(
        <Button {...configButton} >
            {children}
        </Button>
    )
}
export default Submit;

