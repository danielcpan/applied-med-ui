import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { APIErrorIcon } from 'components/icons';
import { makeStyles } from '@material-ui/styles';
import { Button } from 'components/common';

export const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    width: '100%'
  }
}));

interface IServerError {
  errors?: [object];
  errorMsg?: string;
  isFullPageCenter: boolean;
}

const ServerError: React.FC<IServerError> = ({ errors, isFullPageCenter = false }) => {
  const history = useHistory();
  const classes = useStyles();

  const error = errors?.[0]?.response;
  const errorMsg = `Error ${error?.status}: ${error?.statusText}`;

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        height: '100%',
        marginTop: isFullPageCenter ? -64 : 'auto'
      }}
    >
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Grid container justify="center" spacing={3}>
          <Grid item xs={8} sm={7} md={6} lg={5}>
            <APIErrorIcon classes={{ root: classes.root }} />
          </Grid>

          <Grid item xs={11} sm={9} md={6} lg={7}>
            <Typography gutterBottom variant="h3" style={{ fontWeight: 'bold' }}>
              {errorMsg}
            </Typography>
            <Typography paragraph variant="h6" style={{ color: 'red' }}>
              Opps! Something went wrong. Please try again later.
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  history.push('/');
                }}
              >
                Go Back Home
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServerError;
