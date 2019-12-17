import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        InspectionOnline
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignInSide extends React.Component {
  constructor(props)
  {
      super(props)
      this.OnSubmit=this.OnSubmit.bind(this);
  }
 OnSubmit(e)
 {
    e.preventDefault();
    console.log(e.target.TemplateName.value);
    console.log(e.target.CompanyName.value);
  //   const instance = axios.create({
  //     baseURL: 'http://localhost:51149/template',
  //     timeout: 1000,
  //     headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json',
  //           },
  //   });
  // let body = JSON.stringify({
  //         TemplateName: e.target.TemplateName.value,
  //         CompanyName: e.target.CompanyName.value,
  //       });
  //   instance.post('http://localhost:51149/template',body).then((res)=>{
  //     console.log(res);
  //   }).catch((err)=> console.log(err));
    fetch('http://localhost:51149/template', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          TemplateName: e.target.TemplateName.value,
          CompanyName: e.target.CompanyName.value,
        })
      },function(response){
        console.log(response);
      });
      
 }
render()
{
    const {classes}= this.props;
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create new Form Template
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.OnSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="TemplateName"
              label="Template's Name"
              name="TemplateName"
              autoComplete=""
              autoFocus
              ref={x=>this.TemplateName=x}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="CompanyName"
              label="Company name"
              type="text"
              id="CompanyName"
              autoComplete="current-password"
              ref={x=>this.CompanyName=x}
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create new Template
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Do you want a template for your company?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
}

SignInSide.propTypes={
    classes:PropTypes.object.isRequired,
}
export default withStyles(useStyles)(SignInSide);