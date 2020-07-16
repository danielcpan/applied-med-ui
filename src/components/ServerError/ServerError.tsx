import React from 'react';
import { Grid, Typography } from '@material-ui/core';

interface IServerError {
  errors?: any;
}

const ServerError: React.FC<IServerError> = ({ errors }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{
      height: '100%',
      padding: 8,
      textAlign: 'center'
    }}
  >
    <Grid item xs={11} sm={9} md={6} lg={7}>
      <Typography style={{ color: 'red' }}>
        Opps! Something went wrong. Please try again later.
      </Typography>
    </Grid>
  </Grid>
);

export default ServerError;
