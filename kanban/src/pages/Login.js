import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import RegisterModal from '../component/RegisterModal'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { loginUser } from '../store/action';
import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Enriko Aviyanto Putra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.'
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()
  const statusUser = useSelector(state => state.user.error)
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })
  const LoginUser = async (e) => {
    try {
      e.preventDefault()
      console.log(loginData)
      const data = await dispatch(loginUser(loginData))
      console.log(data, 'CCCCCCCCCCCCCCCCCC')
      if (data.message) {
        throw data.message
      } else {
        history.push({ pathname: '/' })
      }

    } catch (error) {
      console.log(error)

    }
  }

  const handleChange = (e) => {
    const status = e.target.id
    const value = e.target.value
    switch (status) {
      case 'email':
        setLoginData({ ...loginData, email: value })
        break
      case 'password':
        setLoginData({ ...loginData, password: value })
        break
      default:
        setLoginData({
          email: '',
          password: ''
        })
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={loginData.email}
            onChange={(e) => handleChange(e)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={loginData.password}
            onChange={(e) => handleChange(e)}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={LoginUser}
          >
            Login
          </Button>
          <Grid container>
            <Grid item>
              {/* <Link href="" variant="body2" onClick={Register}>
                {"Don't have an account? Register"}
              </Link> */}
              <Typography variant="body2">Don't have an account? <RegisterModal/> </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
