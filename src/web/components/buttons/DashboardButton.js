import React from 'react';
import {Button} from 'reactstrap';

export default function DashboardButton({colour, icon, text, href}) {

    function drawIcon() {
        const Icon = icon;
        return Icon ? <Icon size={"100"}/> : "";
    }

    function getColour() {
        return colour || "primary"
    }

    function getUrl() {
        return href || "/error"
    }

    function drawText() {
        return text || "undefined";
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


