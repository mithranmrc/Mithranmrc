import React, { Component } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles/LoginPage.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
class Login extends Component {
  state = {  } 
  render() { 
    return (
      <div style={{marginLeft:"560px",width:"auto"}}>
        <h2>--------DETAILS--------</h2>
        <br></br>
        <table>
          <tr>
            <th>FIRSTNAME*</th>
            <th>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Firstname" variant="outlined" />
    </Box>
      </th>
    </tr>
          <tr>
            <th>LASTNAME*</th>
            <th>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Lastname" variant="outlined" />
    </Box>
      </th>
    </tr>
    <tr>
      <th>
        ADDRESS:
      </th>
      <th>
      &nbsp;&nbsp;<TextField
          id="filled-multiline-static"
          label="Address"
          multiline
          rows={3}
          variant="filled"
        />
      </th>
    </tr>
      <tr><th>GENDER</th>
      <th>&nbsp;&nbsp;<FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl></th></tr>
      <tr>
        <th>MOBILE NO</th>
        <th>
    <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Phone" variant="outlined" />
</Box>
  </th>
</tr>
      <tr>
        <th>EMAIL</th>
        <th>
    <Box
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
  <TextField id="outlined-basic" label="Email" variant="outlined" />
</Box>
  </th>
</tr>
<tr>
  <th>PASSWORD</th>
  <th>&nbsp;&nbsp;<TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /></th>
</tr>
<tr>
  <th></th>
  <th></th>
</tr>
    <tr>
      <th></th>
      <th>&nbsp;&nbsp;&nbsp;
      <Stack spacing={2} direction="row">
      <Button variant="contained">SUBMIT</Button>
    </Stack>
      </th>
    </tr>
    </table>
      </div>
    );
  }
}
 

export default Login;