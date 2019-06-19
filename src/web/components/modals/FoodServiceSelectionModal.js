import React from 'react';
import Modal from "@material-ui/core/Modal";
import {FaTimes} from "react-icons/fa";
import Grid from "@material-ui/core/Grid";
import HorizontalLineStepper from "../stepper/HorizontalLineStepper";

class FoodServiceSelectionModal extends React.Component {

    render() {
        return (
            <div>
                <Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={true}
                       onClose={this.props.closingAction}>
                    <div style={{
                        position: 'absolute',
                        height: '60%',
                        width: '80%',
                        backgroundColor: '#f5f5f5',
                        boxShadow: '1px 2px',
                        margin: '10%',
                        outline: 'none',
                        justifyContent: 'space-around', display: 'flex'
                    }}>
                        <div style={{backgroundColor: '#aaff34', width: '100%', height: '50px'}}>
                            <Grid container style={{padding: '10px'}} spacing={3}>
                                <Grid item xs={6}>
                                    {this.props.selectionRef}
                                    {this.props.selectionTitle}
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{paddingLeft: '93%'}}>
                                        <FaTimes onClick={this.props.closingAction} style={{color: '#ffffff'}}
                                                 size={'30'}/>
                                    </div>
                                </Grid>
                            </Grid>

                            <div style={{height: '100px'}}>
                                <HorizontalLineStepper/>
                            </div>

                            <div>
                                {/*First need to do a call to service to get back the information to display.*/}

                                {/*Put details here...*/}
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default FoodServiceSelectionModal;


