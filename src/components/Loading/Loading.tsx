import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { DelayedRender } from 'components';
import { theme as customTheme } from 'styles';

type LoadingProps = {
  isFullPageCenter: boolean;
  hasCustomMessages: boolean;
  message: string;
  delay: number;
};

const Loading: React.FC<LoadingProps> = ({
  isFullPageCenter = false,
  message = '',
  delay,
  ...restProps
}) => {
  const theme = useTheme();
  console.log('theme inside lib:', theme);
  console.log('customTheme:', customTheme);

  return (
    <DelayedRender delay={delay}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          height: '100%',
          textAlign: 'center',
          marginTop: isFullPageCenter ? theme.spacing(-8) : 'auto'
        }}
        spacing={2}
      >
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    </DelayedRender>
  );
};

export default Loading;
