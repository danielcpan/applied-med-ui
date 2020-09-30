import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

type TServerError = {
  errors?: any;
}

const ServerError: React.FC<TServerError> = ({ errors }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{
        height: '100%',
        padding: theme.spacing(1),
        textAlign: 'center'
      }}
    >
      <Grid item xs={12} sm={11} md={10} lg={9}>
        <Typography style={{ color: 'red' }}>
          Opps! Something went wrong. Please try again later.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServerError;
