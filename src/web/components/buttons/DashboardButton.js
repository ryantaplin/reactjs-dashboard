import React from 'react';
import {Button} from 'reactstrap';

export default function DashboardButton(props) {

    function drawIcon() {
        const Icon = props.icon;
        return Icon ? <Icon size={"100"}/> : "";
    }

    function getColour() {
        return props.colour || "primary"
    }

    function getUrl() {
        return props.href || "/error"
    }

    function drawText() {
        return props.text || "undefined";
    }

    return (
        <a href={getUrl()}>
            <Button style={{minHeight: '250px', minWidth: '100%'}} color={getColour()}>
                <div style={{width: '100%'}}>
                    {drawIcon()}
                </div>
                <div style={{width: '100%', fontSize: '40px'}}>
                    <b>{drawText().toUpperCase()}</b>
                </div>
            </Button>
        </a>

    );
}


