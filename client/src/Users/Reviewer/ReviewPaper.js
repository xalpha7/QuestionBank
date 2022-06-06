import React from 'react'
import { Typography,Stack,Box,Button,InputLabel,MenuItem,FormControl,Select } from '@mui/material';
import { Route,Link } from 'react-router-dom';
import App from '.';
function ReviewPaper() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
    <div style={{
      height:'100vh',
      backgroundColor:'#F2EBE9',
      display:'flex',
      alignItem:'center',
      justifyContent:'center',
      padding:'5vh'
    }} > 
    
    <Stack  direction='column' style={{
      marginTop:'2.5vh'
    }}>
    <div style={{
      marginBottom:'5vh',
      alignItems:'start',
    }}>    <Typography variant='h4'>Question Preview</Typography>
</div>
    <Typography variant='h6'>1.what is the Capital City of India</Typography>
    <Typography variant='h6'>2.what is the Capital City of India</Typography>
    <Typography variant='h6'>3.what is the Capital City of India</Typography>
    <Typography variant='h6'>4.what is the Capital City of India</Typography>
    <Stack direction='row' style={{
      marginTop:'2vh',
    }} >
      <Box sx={{ minWidth: 220 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={10}>Success</MenuItem>
          <MenuItem value={20}>Need Modification</MenuItem>
          <MenuItem value={30}>Rejected</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Button variant='contained' color='success' style={{
      marginLeft:'20px',
}} ><Link  style={{
  textDecoration:'none',
  color:'#fff'
}} >Submit</Link></Button>
    </Stack>
    </Stack>
    </div>
    </>
  )
}

export default ReviewPaper