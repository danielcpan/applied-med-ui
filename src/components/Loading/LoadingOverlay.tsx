import React from 'react';
import { Backdrop as MuiBackdrop, CircularProgress } from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { DelayedRender } from 'components';
import { flexRender } from 'utils/general.utils';

const StyledMuiBackdrop = withStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))(MuiBackdrop);

type TLoadingOverlay = {
  /** Delay in milliseconds */
  delay?: number;
}

/**
 * Whole screen overlay loading indicator. Preconfigured center already
 * adjusted for AppDrawer width
 */
const LoadingOverlay: React.FC<TLoadingOverlay> = ({ delay = 200, children, ...restProps }) => {
  const theme = useTheme();

  return (
    <>
      <DelayedRender delay={delay}>
        <StyledMuiBackdrop open>
          <CircularProgress style={{ marginLeft: theme.spacing(9) }} {...restProps} />
        </StyledMuiBackdrop>
      </DelayedRender>
      {flexRender(children, restProps)}
    </>
  );
};

export default LoadingOverlay;
