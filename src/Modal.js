// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItem from '@material-ui/core/ListItem';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import CloseIcon from '@material-ui/icons/Close';
// import PhotoIcon from '@material-ui/icons/Photo';
// import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import Slide from '@material-ui/core/Slide';
// import TextFieldsIcon from '@material-ui/icons/TextFields';

// const useStyles = makeStyles(theme => ({
//   appBar: {
//     position: 'relative',
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1,
//   },
// }));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function FullScreenDialog(props) {
    
//   const classes = useStyles();
//   var [open, setOpen,selected] = React.useState(false);
//   var [value , setValue]=React.useState();
    
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleSelection =(e)=>{
//     setValue(()=>{
//         props.value=this.input;
//         console.log(this.input);
//     })
//   };
  
//   const handleClose = () => {
//     setOpen(false);
//   };
  
//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Select Response Type
//       </Button>
//       <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
//         <AppBar className={classes.appBar}>
//           <Toolbar>
//             <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
//               <CloseIcon />
//             </IconButton>
//             <Typography variant="h6" className={classes.title}>
//               Sound
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleClose}>
//               save
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <List>
//           <MenuItem>
//               <ListItemIcon>
//                   <TextFieldsIcon></TextFieldsIcon>
//               </ListItemIcon>
//             <ListItemText primary="Textbox" secondary="Response will be taken as textbox in form" />
//           </MenuItem>
//           <Divider />
//           <MenuItem>
//               <ListItemIcon>
//               <CheckBoxIcon></CheckBoxIcon>
//               </ListItemIcon>
//               <ListItemText primary="Checkbox" secondary="Response will be taken as Checkbox" />
//           </MenuItem>

//           <Divider></Divider>
//           <MenuItem>
//               <ListItemIcon>
//               <FormatListNumberedIcon></FormatListNumberedIcon>
//               </ListItemIcon>
//               <ListItemText primary="Number" secondary="Response will be taken as Number" />
//           </MenuItem>
        
//           <Divider></Divider>
//           <MenuItem button onClick={handleSelection} ref={x=>this.input="Photo"}  >
//               <ListItemIcon>
//               <PhotoIcon />
//               </ListItemIcon>
//               <ListItemText primary="Photo" secondary="Response will be taken as Photo"  />
//           </MenuItem>
//           <Divider></Divider>
//         </List>
//       </Dialog>
//     </div>
//   );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PhotoIcon from '@material-ui/icons/Photo';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import EventNoteIcon from '@material-ui/icons/EventNote';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = [
  'Text Answer',
  'Number',
  'Checkbox',
  'Date & Time',
  'Photo',
  'Annotation',
  'Signature',

];

 const SimpleListMenu =(props) =>{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    name=index;
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  var { TriggerParent,name } = props;

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
         
          <ListItemText primary="Type of Respones" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) =>  {
            if (index===0) {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                       onClick={event => props.onClick(event)}
                       //onClick={event=>props.TriggerParent('hello')}
                    
                    >
                        
                        
                        <ListItemIcon>
                  <TextFieldsIcon></TextFieldsIcon>
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
             if (index===1)
            {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
                        <FormatListNumberedIcon></FormatListNumberedIcon>
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
            if(index===2)
            {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
              <CheckBoxIcon></CheckBoxIcon>
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
            if(index===3)
            {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
              <EventNoteIcon />
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
            if(index===4)
            {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
              <PhotoIcon />
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
            if(index===5)
            {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
              <BorderColorIcon />
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
            if(index===6)
            {
                return(
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
              <CreateIcon />
              </ListItemIcon>
                     
                      {option}
                    </MenuItem>)
            }
            else 
            {
                return(
                    <MenuItem
                      key={option}
                      disabled={index === 0}
                      selected={index === selectedIndex}
                      onClick={event => handleMenuItemClick(event, index)}
                    >
                        
                        
                        <ListItemIcon>
                  <FormatListNumberedIcon></FormatListNumberedIcon>
              </ListItemIcon>
                     
                     
                      {option}
                    </MenuItem>)
            }
           
})}
      </Menu>
    </div>
  );
}
export default SimpleListMenu;