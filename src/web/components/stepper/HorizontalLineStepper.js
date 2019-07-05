import React, {useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function HorizontalLineStepper() {

    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState(new Set());
    const [steps] = useState(getSteps());

    function getSteps() {
        //TODO: should be passed in from service
        return ['Retrieve Steps', 'Pass into Object', 'And Render', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    }

    function getStepContent(step) {
        //TODO: should be passed in from service {steps:[{title:"blah", content:"blah blah blah blah blah", optional: false}, {..}, ...]}
        switch (step) {
            case 0:
                return "....";
            case 1:
                return 'Passed into stepper object';
            case 2:
                return 'and rendered...';
            case 3:
                return 'bleh';
            case 4:
                return 'meh';
            default:
                return 'Unknown step';
        }
    }

    function isSkipped(step) {
        return skippedSteps.has(step);
    }

    function handleNext() {
        let newSkipped = skippedSteps;
        if (isSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep(activeStep + 1);
        setSkippedSteps(newSkipped);
    }

    function handleBack() {
        setActiveStep(activeStep - 1);
    }

    function handleSkip() {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.add(activeStep));
    }

    const optionalSteps = [1];
    function isStepOptional(step) {
        return optionalSteps.includes(step);
    }

    return(
        <div style={{width: '100%'}}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                    }
                    if (isSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </div>
                ) : (
                    <div>
                        <Typography>{getStepContent(activeStep)}</Typography>
                        <div>
                            <Button disabled={activeStep === 0} onClick={handleBack}>
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSkip}>
                                    Skip
                                </Button>
                            )}

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            <div style={{backgroundColour: '#000000', height: '10%'}}>

            </div>
        </div>
    );
}