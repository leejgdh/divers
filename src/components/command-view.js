import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
function CommandView({ selectedStratagems }) {

    const mapCommandToIcon = (command) => {
        switch (command) {
            case 'w':
                return <ArrowUpwardIcon />;
            case 's':
                return <ArrowDownwardIcon />;
            case 'a':
                return <ArrowBackIcon />;
            case 'd':
                return <ArrowForwardIcon />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h2>Selected Stratagem</h2>

            <List>
                {selectedStratagems.map((item, index) => (
                    <ListItem key={item.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete">
                                {item.commands.split(',').map((command, idx) => (
                                    <span key={idx}>{mapCommandToIcon(command)}</span>
                                ))}
                            </IconButton>
                        }
                    >
                        {/* <ListItemAvatar>
                            <Avatar>
                            </Avatar>
                        </ListItemAvatar> */}
                        <ListItemText
                            primary={item.name}
                        />
                    </ListItem>
                ))}

            </List>
        </div>
    )

}

export default CommandView