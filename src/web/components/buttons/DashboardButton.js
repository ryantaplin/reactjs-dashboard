import React from 'react';
import {Button} from 'reactstrap';

class DashboardButton extends React.Component {

    render() {
        if (this.drawText()) {
            return (
                <a href={this.getUrl()}>
                    <Button style={{minHeight: '250px', minWidth: '100%'}} color={this.getColour()}>
                        <div style={{width: '100%'}}>
                            {this.drawIcon()}
                        </div>
                        <div style={{width: '100%', fontSize:'40px'}}>
                            <b>{this.drawText().toUpperCase()}</b>
                        </div>
                    </Button>
                </a>
            );
        } else return ("");
    }

    drawIcon() {
        const Icon = this.props.icon;
        return Icon ? <Icon size={"100"}/> : "";
    }

    getColour() {
        return this.props.colour ? this.props.colour : "primary"
    }

    getUrl() {
        return this.props.href ? this.props.href : "/error"
    }

    drawText() {
        return this.props.text ? this.props.text : undefined;
    }
}

export default DashboardButton;


