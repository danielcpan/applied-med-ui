import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  Hidden,
  Button,
  Dialog,
  DialogTitle as MuiDialogTitle,
  DialogContent as MuiDialogContent,
  IconButton,
  Typography
} from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { createStyles, Theme, withStyles, WithStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import DefaultMobileWizard from './DefaultMobileWizard';
import DefaultDesktopWizard from './DefaultDesktopWizard';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))(MuiDialogContent);

function CustomizedDialogs({ open, handleClose }) {
  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle onClose={handleClose} />
      <DialogContent>
        <div>
          <Typography variant="h4" paragraph style={{ textAlign: 'center' }}>
            Request 20-001 Submitted!
          </Typography>
        </div>
        <Button autoFocus onClick={handleClose} color="primary">
          View Request
        </Button>
      </DialogContent>
    </Dialog>
  );
}

interface IWizard {
  steps: [React.ReactNode];
}

const Wizard: React.FC<IWizard> = ({
  isNew,
  hasStepIndicator,
  steps,
  handleSubmit,
  defaultValues,
  components = {}
}) => {
  // const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({ ...defaultValues });
  const form = useForm({ defaultValues });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  console.log('state:', state);

  React.useEffect(() => {
    form.reset(state);
  }, [activeStep, form, isDesktop, state]);

  const handleBack = () => {
    // if (activeStep === 0 && !isNew) history.push('/requests/create');
    setActiveStep(prevStep => (prevStep === 0 ? 0 : prevStep - 1));
  };

  const handleNext = data => {
    setState(prevState => ({ ...prevState, ...data }));
    setActiveStep(prevStep => (prevStep === steps.length - 1 ? prevStep : prevStep + 1));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <form
      onSubmit={form.handleSubmit(data => console.log('data:', data))}
      style={{ display: 'contents' }}
    >
      <Hidden smUp>
        <DefaultMobileWizard
          steps={steps}
          activeStep={activeStep}
          isNew={isNew}
          hasStepIndicator={hasStepIndicator}
          handleBack={handleBack}
          handleNext={isNew ? handleSubmit : handleNext}
          form={form}
          state={state}
          handleSubmit={handleSubmit}
          components={components}
        />
      </Hidden>

      <Hidden xsDown>
        <DefaultDesktopWizard
          steps={steps}
          activeStep={activeStep}
          isNew={isNew}
          hasStepIndicator={hasStepIndicator}
          handleBack={handleBack}
          handleNext={
            isNew
              ? () => {
                  form.handleSubmit(handleSubmit)();
                  setState(prevState => ({ ...prevState, ...form.getValues() }));
                }
              : handleNext
          }
          form={form}
          state={state}
          handleSubmit={handleSubmit}
          components={components}
        />
      </Hidden>

      <CustomizedDialogs open={open} handleClose={handleClose} />
    </form>
  );
};

export default Wizard;
