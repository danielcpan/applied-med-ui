import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { ArrowRight as ArrowRightIcon, ArrowLeft as ArrowLeftIcon } from '@material-ui/icons';
import MuiStepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Scrollbars } from 'react-custom-scrollbars';

interface IDefaultDesktopWizard {
  steps: [React.ReactNode];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

const DesktopStepper = ({
  steps,
  activeStep,
  isNew = false,
  hasStepIndicator = true,
  handleBack,
  handleNext,
  form
}) => {
  const maxSteps = steps.length;

  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-start"
      style={{ padding: 8, height: '15%' }}
    >
      <Button
        color="primary"
        size="small"
        variant="text"
        onClick={handleBack}
        style={{ visibility: activeStep === 0 && isNew ? 'hidden' : 'visible' }}
      >
        <ArrowLeftIcon />
        Back
      </Button>

      {hasStepIndicator &&
        (maxSteps < 7 ? (
          <MuiStepper activeStep={activeStep} alternativeLabel style={{ padding: 0 }}>
            {steps.map((el, idx) => (
              <Step key={idx}>
                <StepLabel />
              </Step>
            ))}
          </MuiStepper>
        ) : (
          <div>{`${activeStep + 1} of ${maxSteps}`}</div>
        ))}

      <Button
        color="primary"
        size="small"
        variant="text"
        onClick={form.handleSubmit(handleNext)}
        style={{ visibility: activeStep === maxSteps - 1 && !isNew ? 'hidden' : 'visible' }}
      >
        Next
        <ArrowRightIcon />
      </Button>
    </Grid>
  );
};

const DefaultDesktopWizard: React.FC<IDefaultDesktopWizard> = ({
  steps,
  activeStep,
  isNew = false,
  hasStepIndicator = true,
  handleBack,
  handleNext,
  form,
  components: { StepContainer }
}) => {
  const StepContent = steps[activeStep];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ backgroundColor: 'white', height: '100%' }}
    >
      <Grid
        item
        sm={11}
        md={9}
        lg={8}
        style={{
          background: '#FFFEFE',
          boxShadow: '0px 0px 20px rgba(0, 75, 80, 0.07)',
          borderRadius: 8,
          padding: 16,
          height: '80%'
        }}
      >
        <DesktopStepper
          steps={steps}
          activeStep={activeStep}
          isNew={isNew}
          hasStepIndicator={hasStepIndicator}
          handleBack={handleBack}
          handleNext={handleNext}
          form={form}
        />
        <Grid
          container
          spacing={2}
          style={{
            height: '85%'
          }}
        >
          <Scrollbars autoHide universal>
            <Grid item xs={12}>
              {StepContainer ? (
                <StepContainer>
                  <StepContent form={form} />
                </StepContainer>
              ) : (
                <StepContent form={form} />
              )}
            </Grid>
          </Scrollbars>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DefaultDesktopWizard;
