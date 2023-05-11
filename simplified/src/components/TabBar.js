import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarChartOutcome from './BarChatOutcome';
import BarChartOutcome2 from './BarChatOutcome2';
import LineChartOutcome from './LineChartOutcome';
import LineChartOutcome2 from './LineChartOutcome2';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={30}
          label="Duration"
          onChange={handleChange}
        >
          <MenuItem value={10}>Daily</MenuItem>
          <MenuItem value={20}>Quarterly</MenuItem>
          <MenuItem value={30}>Yearly</MenuItem>
        </Select>
      </FormControl>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Outcome" {...a11yProps(0)} />
          <Tab label="Process" {...a11yProps(1)} />
          <Tab label="Staffing" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      
      <Grid container spacing={2}>
        <Grid xs={6} style={{height: "40vh", padding: "24px", borderRight: '3px solid', borderBottom: '3px solid'}}>
          <div style={{ fontSize: '32px', bottom: '25px', position: "relative"}}>Historical</div>
          <BarChartOutcome />
        </Grid>
        <Grid xs={6} style={{height: "40vh", padding: "24px", borderBottom: '3px solid'}}>
        <div style={{ fontSize: '32px', bottom: '25px', position: "relative"}}>Prediction</div>
          <BarChartOutcome2 />
        </Grid> 
        <Grid xs={6} style={{height: "40vh", padding: "24px", borderRight: '3px solid', }}>
          <LineChartOutcome />
        </Grid>
        <Grid xs={6} style={{height: "40vh", padding: "24px", }}>
          <LineChartOutcome2 />
        </Grid>
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
