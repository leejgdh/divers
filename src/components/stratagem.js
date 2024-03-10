import * as React from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StratagemList from './stratagem-list';

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Stratagem({ setSelectedStratagems }) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [selectedData, setSelectedData] = React.useState([]);


    const handleClear = () => {
        setSelectedData([]);
        setSelectedStratagems([])
    };

    React.useEffect(() => {
        setSelectedStratagems(selectedData);
    }, [selectedData, setSelectedStratagems]);

    return (
        <div>
            <div style={{display:'flex', justifyContent:'end'}}>
            <Button variant="outlined" startIcon={<ClearIcon />} onClick={handleClear}>
                Clear
            </Button>
            </div>

            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Orbital" {...a11yProps(0)} />
                        <Tab label="Eagle" {...a11yProps(1)} />
                        <Tab label="Supply" {...a11yProps(2)} />
                        <Tab label="Defensive" {...a11yProps(3)} />
                        <Tab label="Mission" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <StratagemList category='orbital' selectedData={selectedData} setSelectedData={setSelectedData} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <StratagemList category='eagle' selectedData={selectedData} setSelectedData={setSelectedData} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <StratagemList category='supply' selectedData={selectedData} setSelectedData={setSelectedData} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <StratagemList category='defensive' selectedData={selectedData} setSelectedData={setSelectedData} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={4}>
                    <StratagemList category='mission' selectedData={selectedData} setSelectedData={setSelectedData} />
                </CustomTabPanel>
            </Box>


        </div>

    );
}

export default Stratagem