import React from 'react';
import { makeStyles, Typography, Button, TextField, FormLabel } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import GroupIcon from '@material-ui/icons/Group';
import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { DialogBox } from '../components/DialogBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';

export const useStylesBlock = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    position: 'relative',
    overflow: 'hidden',
    '& h6': {
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideIcons: {
    fontSize: 30,
  },
  blueSideBigIcon: {
    fontSize: 30,
    position: 'absolute',
    width: '350%',
    height: '350%',
    left: '50%',
    top: '50%',
    transform: 'translate(-48%, -47%)',
  },
  loginSide: { display: 'flex', flex: '0 0 50%', alignItems: 'center', justifyContent: 'center' },
  twitterIcon: { fontSize: 50 },
  loginSideWrapper: { width: 380 },
  loginSideTitle: { fontWeight: 700, fontSize: 32, marginBottom: 45, marginTop: 20 },
  registerButton: { marginBottom: 20 },
  blueList: { listStyle: 'none', position: 'relative' },
  formLabel: { display: 'flex', alignItems: 'center' },
}));

export const SignIn = () => {
  const classes = useStylesBlock();
  const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

  const handleOpenSignIn = () => {
    setVisibleModal('signIn');
  };

  const handleOpenSignUp = () => {
    setVisibleModal('signUp');
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueList}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideIcons} />
              Read about interesing news #1
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <GroupIcon className={classes.blueSideIcons} />
              Read about interesing news #2
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatIcon className={classes.blueSideIcons} />
              Read about interesing news #3
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.twitterIcon} />
          <Typography className={classes.loginSideTitle}>Read about interesing news #3</Typography>
          <Typography>
            <b>Read about interesing news #3</b>
          </Typography>
          <br />
          <Button
            onClick={handleOpenSignUp}
            className={classes.registerButton}
            variant="contained"
            color="primary"
            fullWidth>
            Register
          </Button>
          <DialogBox
            visible={visibleModal === 'signUp'}
            onClose={handleCloseModal}
            classes={classes}
            title="Register">
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth />
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />

                <div>
                  <div>
                    <FormLabel className={classes.formLabel} color="secondary" />
                  </div>
                </div>
                <Button variant="contained" color="primary" fullWidth>
                  Register
                </Button>
              </FormGroup>
            </FormControl>
          </DialogBox>
          <Button onClick={handleOpenSignIn} variant="outlined" color="primary" fullWidth>
            Login
          </Button>
          <DialogBox
            visible={visibleModal === 'signIn'}
            onClose={handleCloseModal}
            classes={classes}
            title="Login">
            <FormControl component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email Address"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
                <div>
                  <div>
                    <FormLabel className={classes.formLabel} color="secondary" />
                  </div>
                </div>
                <Button variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </DialogBox>
        </div>
      </section>
    </div>
  );
};
