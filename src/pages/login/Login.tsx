import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  FormControl,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC, useState } from 'react';
import { LoginPostRequest } from '../../api/generated';
import { AuthStatus } from '../../redux/modules/auth';

type LoginProps = {
  authStatus: AuthStatus;
  onLogin: (credentials: LoginPostRequest) => void
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
    paddingTop: "10%"
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  loginSubHeader: {
    marginTop: 10,
    color: '#a3a3a3'
  },
  loginButton: {
      marginTop: 20
  },
}));

export const Login: FC<LoginProps> = ({ authStatus, onLogin }) => {
  const classes = useStyles();
  const { loading } = authStatus;

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')


  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const onLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  const onSubmit = () => {
    onLogin({loginData: {login, password}})
  }

  return (
    <FormControl className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">Login</Typography>
          <Typography className={classes.loginSubHeader}>After login you can borrow a phone or create a new item</Typography>
          <TextField value={login} onChange={onLoginChange} label="Login" fullWidth variant="standard" id="login-input" />
          <TextField value={password} onChange={onPasswordChange} label="Password" fullWidth type="password" variant="standard" />
          <Button
            fullWidth
            role="button"
            type="submit"
            variant="outlined"
            color="primary"
            onClick={onSubmit}
            className={classes.loginButton}
          >
            {loading ? <CircularProgress role="loading" /> : <div>Login</div>}
          </Button>
        </CardContent>
      </Card>
    </FormControl>
  );
};
