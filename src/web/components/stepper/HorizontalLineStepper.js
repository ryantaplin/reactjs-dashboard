import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class HorizontalLineStepper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
            skipped: new Set(),
            steps: this.getSteps()
        };
    }

    getSteps = () => {
        //TODO: should be passed in from service
        return ['Retrieve Steps', 'Pass into Object', 'And Render', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    };

    getStepContent = (step) => {
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
    };

    isStepSkipped = (step) => {
        return this.state.skipped.has(step);
    };

    handleNext = () => {
        console.log(this.state);
        let newSkipped = this.state.skipped;
        if (this.isStepSkipped(this.state.activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(this.state.activeStep);
        }
        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped: newSkipped});
    };

    handleBack = () => {
        this.setState({activeStep: this.state.activeStep - 1});
    };

    handleSkip = () => {
        if (!this.isStepOptional(this.state.activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped: this.state.skipped.add(this.state.activeStep)
        });
    };

    isStepOptional = (step) => {
        switch (step) {
            case 1:
                return true;
            default:
                return false;
        }
    };

    render() {
        return (
            <div style={{width: '100%'}}>
                <Stepper activeStep={this.state.activeStep}>
                    {this.state.steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (this.isStepOptional(index)) {
                            labelProps.optional = <Typography variant="caption">Optional</Typography>;
                        }
                        if (this.isStepSkipped(index)) {
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
                    {this.state.activeStep === this.state.steps.length ? (
                        <div>
                            <Typography>
                                All steps completed - you&apos;re finished
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            <Typography>{this.getStepContent(this.state.activeStep)}</Typography>
                            <div>
                                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack}>
                                    Back
                                </Button>
                                {this.isStepOptional(this.state.activeStep) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSkip}>
                                        Skip
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}>
                                    {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
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
}

export default HorizontalLineStepper;