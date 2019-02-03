import React from 'react';
import { connect } from 'react-redux';

class Planet extends React.Component {
    getFontSize() {
        if (this.props.zoomLevel < 100) {
            return 11;
        } else if (this.props.zoomLevel === 400) {
            return 14;
        }
        return 12;
    }

    showName() {
        if (this.props.zoomLevel > 50) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        let xPos = this.props.details.loc.x * this.props.zoomMultiplier;
        let yPos = this.props.details.loc.y * this.props.zoomMultiplier;

        if (this.showName()) {
            return (
                <g className="node" transform={ `translate(${xPos}, ${yPos})` }>
                <rect width="5" height="5" fill="grey" />
                <text style={{fill:'#ffffff', stroke: 'none', textAnchor: 'middle', fontSize: `${this.getFontSize()}px`, fontFamily: 'Arial', fontWeight: 'bold'}} transform='translate(0,20)'>
                    {this.props.details.name}
                </text>
                </g>
            );
        } else {
            return (
                <g className="node" transform={ `translate(${xPos}, ${yPos})` }>
                <rect width="5" height="5" fill="grey" />
                </g>
            );
        }
    }
};

const mapStateToProps = (state) => {
    let zoomMultiplier = 1.0;
    switch(state.zoomLevel) {
        case "25":
            zoomMultiplier = 0.25;
            break;

        case "38":
            zoomMultiplier = 0.38;
            break;

        case "50":
            zoomMultiplier = 0.50;
            break;

        case "100":
            zoomMultiplier = 1.0;
            break;

        case "125":
            zoomMultiplier = 1.25;
            break;

        case "150":
            zoomMultiplier = 1.5;
            break;

        case "200":
            zoomMultiplier = 2.0;
            break;

        case "400":
            zoomMultiplier = 4.0;
            break;

        default:
            zoomMultiplier = 1.0;
    }


    return { 
        zoomLevel: parseInt(state.zoomLevel),
        zoomMultiplier: zoomMultiplier,
        planetView: state.planetView
    };
};

export default connect(mapStateToProps)(Planet);
