import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { userInfo } from '../actions';
import getIn from '../utility/getIn';
import wrapper from '../../public/assets/images/stable.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  typography: {
    position: 'absolute',
    top: '100px',
    marginLeft: '32px',
    textAlign: 'center',
    color: 'darkGray',
    fontSize: '42px'
  }
}));

const Help = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Hello</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  const auth = getIn(state, ['auth']);
  const { user } = auth;
  return {
    user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => {
      return dispatch(userInfo());
    }
  };
};

Help.propTypes = {
  logged: PropTypes.bool
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Help)
);
