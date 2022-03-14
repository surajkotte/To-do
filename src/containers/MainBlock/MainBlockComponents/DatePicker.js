import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import * as React from 'react'
const DatePicker=({ children })=>{
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleChange = (newValue) => {
        setValue(newValue);
      };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
     <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
        onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
     </Stack>
    </LocalizationProvider>
  );
}

export default DatePicker;
