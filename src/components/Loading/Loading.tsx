import React, { useState } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { DelayedRender } from 'components';
import { useInterval } from 'hooks';
import { useTheme } from '@material-ui/core/styles';

interface ILoading {
  /** Custom loading message available */
  message?: string;
  /** Delay in milliseconds */
  delay?: number;
}

/**
 * Loading indicator. Preconfigured with messages for long loads.
 */
const Loading: React.FC<ILoading> = ({ message = '', delay = 200, children, ...restProps }) => {
  const theme = useTheme();
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
    timer < 31 ? 1000 : null
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
          padding: theme.spacing(1)
        }}
      >
        <Grid item>
          <CircularProgress {...restProps} />
          <Typography>{displayMessage}</Typography>
        </Grid>
      </Grid>
    </DelayedRender>
  );
};

export default Loading;
