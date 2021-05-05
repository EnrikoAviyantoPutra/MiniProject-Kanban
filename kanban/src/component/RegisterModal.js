import React, { useState} from 'react'
import { useHistory } from 'react-router-dom'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Link,
  Snackbar
} from '@material-ui/core'
import { useDispatch} from 'react-redux'
import { registerUser } from '../store/action'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function FormDialog() {
  const dispatch = useDispatch()

  const [formRegister, setFormRegister] = useState({})
  const [error, setError] = useState('')
  const [open, setOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  function handleChange(e) {
    let { name, value } = e.target;
    setFormRegister((prev) => ({ ...prev, [name]: value }));
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      console.log(formRegister)
      const response = await dispatch(registerUser(formRegister))
      console.log(response)
      if (response.message === 'Account created successfully') {
        console.log(true)
        // await setOpenSnackbar(true)
        setOpen(false)

      }else{
        setError(response)
        throw response
      }
    } catch (error) {
      console.log(error)
      setOpenSnackbar(true)
    }

  }

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Link component="button" variant="body2" onClick={handleClickOpen} >
        Register
      </Link>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-login">Register</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>
              Please fill in the form below
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formRegister.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formRegister.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formRegister.password}
              onChange={(e) => handleChange(e)}
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="password_confirmation"
              name="password_confirmation"
              label="Password Confirmation"
              type="password"
              fullWidth
              value={formRegister.password_confirmation}
              onChange={(e) => handleChange(e)}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Register
            </Button>
          </DialogActions>
          {
            error ? (
              <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error">
                  {error}
                </Alert>
              </Snackbar>
            ) : <p></p>
          }
        </form>
      </Dialog>
    </div>
  );
}
