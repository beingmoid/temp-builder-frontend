import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PhotoIcon from '@material-ui/icons/Photo';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CreateIcon from '@material-ui/icons/Create';

const options = [
    'Text Answer',
    'Number',
    'Checkbox',
    'Date & Time',
    'Photo',
    'Annotation',
    'Signature',

];
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
//const classes = useStyles();
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            anchorEl: null
        }
        this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    }
    handleClickListItem(event, index) {
        this.setState({
            anchorEl: event.currentTarget
        });
        this.forceUpdate();
    }
    handleClose() {
        this.setState({
            anchorEl: null
        });
        this.forceUpdate();
    }
    handleMenuItemClick(event, index) {
        this.setState({
            selectedIndex: index,
            anchorEl: null
        });
        if(index===0)
        {
            this.props.triggerChange('Textbox',this.props.keyval);
        }
        else if(index===1)
        {
            this.props.triggerChange('Number',this.props.keyval);
        }
        else if(index===2)
        {
            this.props.triggerChange('Checkbox',this.props.keyval);
        }
        else if(index===3)
        {
            this.props.triggerChange('DateTime',this.props.keyval);
        }
        else if(index===4)
        {
            this.props.triggerChange('Photo',this.props.keyval);
        }
        else if(index===5)
        {
            this.props.triggerChange('Annotation',this.props.keyval);
        }
        else if(index===6)
        {
            this.props.triggerChange('Signature',this.props.keyval);
        }

    }

    render() {
        const useStyles = makeStyles(theme => ({
            root: {
                width: '100%',
                maxWidth: 360,
                backgroundColor: theme.palette.background.paper,
            },
        }));
        return (
            <div className={useStyles.root} >
                <List component="nav" aria-label="Device settings">
                    <ListItem
                        button
                        aria-haspopup="true"
                        aria-controls="lock-menu"
                        aria-label="Select Response"
                        onClick={this.handleClickListItem.bind(this)}
                    >
                        <ListItemText primary="Selected Response" secondary={options[this.state.selectedIndex]} />
                    </ListItem>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={Boolean(this.state.anchorEl)}
                    onClose={this.handleClose.bind(this)}
                >
                    {options.map((option, index) => {
                        if (index === 0) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <TextFieldsIcon></TextFieldsIcon>
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        if (index === 1) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <FormatListNumberedIcon></FormatListNumberedIcon>
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        if (index === 2) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <CheckBoxIcon></CheckBoxIcon>
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        if (index === 3) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.state.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <EventNoteIcon />
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        if (index === 4) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.state.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <PhotoIcon />
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        if (index === 5) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.state.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <BorderColorIcon />
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        if (index === 6) {
                            return (
                                <MenuItem
                                    key={option}
                                    selected={index === this.state.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <CreateIcon />
                                    </ListItemIcon>

                                    {option}
                                </MenuItem>)
                        }
                        else {
                            return (
                                <MenuItem
                                    key={option}
                                    disabled={index === 0}
                                    selected={index === this.state.selectedIndex}
                                    onClick={event => this.handleMenuItemClick(event, index)}
                                >


                                    <ListItemIcon>
                                        <FormatListNumberedIcon></FormatListNumberedIcon>
                                    </ListItemIcon>


                                    {option}
                                </MenuItem>)
                        }

                    })}

                    <MenuItem>

                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default Dropdown;