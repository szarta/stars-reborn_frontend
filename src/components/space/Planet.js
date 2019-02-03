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
        let xPos = this.props.details.loc.x;
        let yPos = this.props.details.loc.y;

        console.log(this.props.planetView);

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
    return { 
        zoomLevel: state.zoomLevel,
        planetView: state.planetView
    };
};

export default connect(mapStateToProps)(Planet);
