import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import stratagemData from '../stratagems.json';

function StratagemList({selectedData, setSelectedData, category}){
    
    const [checked, setChecked] = React.useState(selectedData);

    const handleToggle = (value) => () => {
        const currentIndex = checked.findIndex(item => item.id === value.id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setSelectedData(newChecked);
    };

    return (
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {stratagemData.filter((e) => e.category == category).map((value) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return (
                <ListItem
                    key={value.id}
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                        {/* <ListItemAvatar>
<Avatar
alt={`Avatar n°${value + 1}`}
src={`/static/images/avatar/${value + 1}.jpg`}
/>
</ListItemAvatar> */}
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.findIndex(item => item.id === value.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value.name}`} />
                    </ListItemButton>
                </ListItem>
            );
        })}
    </List>
    )
}

export default StratagemList