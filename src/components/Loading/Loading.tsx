import React, { useState } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { DelayedRender } from 'components';
import { useInterval } from 'hooks';

type LoadingProps = {
  isFullPageCenter: boolean;
  hasCustomMessages: boolean;
  message: string;
  delay: number;
};

const Loading: React.FC<LoadingProps> = ({ isFullPageCenter = false, message = '', delay }) => {
  const [timer, setTimer] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(message);

  useInterval(
    () => {
      setTimer(prevState => prevState + 1);
      if (timer === 15) {
        setDisplayMessage("Hmmm, something isn't right...");
      } else if (timer === 30) {
        setDisplayMessage('Sorry for taking so long. Try refreshing the page!');
      }
    },
    timer < 30 ? 1000 : null
  );

  return (
    <DelayedRender delay={delay}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          height: '100%',
          textAlign: 'center',
          minHeight: displayMessage ? 90 : 70,
          marginTop: isFullPageCenter ? -64 : 'auto'
        }}
      >
        <div>
          <CircularProgress />
          <Typography variant="h6">{displayMessage}</Typography>
        </div>
      </Grid>
    </DelayedRender>
  );
};

export default Loading;
