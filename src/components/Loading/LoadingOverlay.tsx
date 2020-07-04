import React from 'react';
import { Backdrop as MuiBackdrop, CircularProgress } from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/core/styles';
import { DelayedRender } from '../../components';

const StyledMuiBackdrop = withStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))(MuiBackdrop);

interface ILoadingOverlay {
  delay?: number;
}

const LoadingOverlay: React.FC<ILoadingOverlay> = ({ delay = 200, children, ...restProps }) => {
  const theme = useTheme();

  return (
    <>
      <DelayedRender delay={delay}>
        <StyledMuiBackdrop open>
          <CircularProgress style={{ marginLeft: theme.spacing(9) }} />
        </StyledMuiBackdrop>
      </DelayedRender>
      {children(restProps)}
    </>
  );
};

export default LoadingOverlay;
