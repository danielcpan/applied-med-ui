import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { DelayedRender } from 'components';

type LoadingProps = {
  isFullPageCenter: boolean;
  hasCustomMessages: boolean;
  message: string;
  delay: number;
};

const Loading: React.FC<LoadingProps> = ({ isFullPageCenter = false, delay }) => {
  return (
    <DelayedRender delay={delay}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          height: '100%',
          textAlign: 'center',
          marginTop: isFullPageCenter ? -64 : 'auto'
        }}
      >
        <CircularProgress />
      </Grid>
    </DelayedRender>
  );
};

export default Loading;
