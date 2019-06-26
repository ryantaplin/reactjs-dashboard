import React from 'react';
import {Button, Jumbotron} from 'reactstrap';
import {FaExclamationTriangle} from 'react-icons/fa'

export default function ErrorContainer() {

    function errorDescription() {
        return "*Error Description Functionality* has not been implemented yet. Come back to this."
    }

    return (
        <div className="page-container">
            <div style={{padding: '20px'}}>
                <Jumbotron>
                    <h1 className="display-3">
                        <div style={{topMargin:'auto'}}>
                            <FaExclamationTriangle size={50}/> Error
                        </div>
                    </h1>
                    <hr className="my-2"/>
                    <p>
                        <text>
                            Ops, you shouldn't have ended up here. Forget you've seen me!
                            <br/><br/>
                            <b>Error Description:</b> {errorDescription()}
                        </text>
                    </p>
                    <p className="lead">
                        <br/>
                        <Button color="secondary">Go Back</Button>
                    </p>
                </Jumbotron>
            </div>
        </div>
    );
}


