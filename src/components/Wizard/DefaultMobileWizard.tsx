import React from 'react';
import { Paper, MobileStepper, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { ArrowRight as ArrowRightIcon, ArrowLeft as ArrowLeftIcon } from '@material-ui/icons';

interface IDefaultMobileWizard {
  steps: [React.ReactNode];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

const DefaultMobileWizard: React.FC<IDefaultMobileWizard> = ({
  steps,
  activeStep,
  isNew = false,
  hasStepIndicator = true,
  handleBack,
  handleNext,
  form,
  components: { StepContainer }
}) => {
  const theme = useTheme();

  const StepContent = steps[activeStep];
  const maxSteps = isNew ? steps.length + 1 : steps.length;

  return (
    <Paper elevation={0} style={{ height: '100%', overflow: 'auto' }}>
      <div
        style={{
          padding: theme.spacing(3, 2.5),
          marginBottom: theme.spacing(5)
        }}
      >
        {StepContainer ? (
          <StepContainer>
            <StepContent form={form} />
          </StepContainer>
        ) : (
          <StepContent form={form} />
        )}
      </div>

      <MobileStepper
        steps={hasStepIndicator ? maxSteps : 0}
        position="bottom"
        variant="dots"
        activeStep={activeStep}
        backButton={
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
        }
        nextButton={
          <Button
            color="primary"
            size="small"
            variant="text"
            onClick={form.handleSubmit(handleNext)}
            style={{ visibility: activeStep === maxSteps - 1 ? 'hidden' : 'visible' }}
          >
            Next
            <ArrowRightIcon />
          </Button>
        }
        style={{
          backgroundColor: theme.palette.common.white,
          padding: theme.spacing(1),
          margin: theme.spacing(1, 2)
        }}
      />
    </Paper>
  );
};

export default DefaultMobileWizard;
