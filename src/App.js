import * as React from 'react';
import Header from './Components/Header';
import { makeStyles } from '@material-ui/core';
import { Container, Grid, Typography } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Textfield from './Components/Textfield';
import Select from './Components/Select';
import countries from './data/countries.json';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@material-ui/core';
import SelectHobbi from './Components/SelectHobbi';
import hobbies from './data/hobbies.json';
import Submit from './Components/Submit';


const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  }
}))

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  gender:'',
  hobby:[],
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
});

function App() {

  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>

            <Formik initialValues={{ ...INITIAL_FORM_STATE }}
              validationSchema={FORM_VALIDATION}
              onSubmit={values => {
                console.log(values);
              }}>

              <Form>
                <Grid container spacing={2}>

                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h4" align="center" style={{ textDecoration: "underline", marginBottom: "36px" }}>
                        <strong>Your Details</strong>
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6">
                      <strong>Full Name</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield
                      name='firstName'
                      label='First Name'
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield
                      name='lastName'
                      label='Last Name'
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6">
                      <strong> Address</strong>
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Textfield
                      name='addressLine1'
                      label='Address Line 1'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name='addressLine2'
                      label='Address Line 2'
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield
                      name='city'
                      label='City'
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Textfield
                      name='state'
                      label='State'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Select name='country'
                      label='Country'
                      options={countries} />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6" >
                      <strong> Gender</strong>
                    </Typography>
                  </Grid>
                  <Grid>
                    <FormControl >
                      <RadioGroup name ='gender'
                        aria-labelledby="demo-radio-buttons-group-label" >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Typography variant="h6">
                      <strong> Hobbies And Interests</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <SelectHobbi name='hobby'
                      label='Hobbies'
                      options={hobbies}

                    />
                  </Grid>

                  <Grid item xs={12} align="center" style={{ marginTop: '20px' }}>
                    <Submit>
                      Submit Form
                    </Submit>
                  </Grid>

                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  )
}

export default App;
