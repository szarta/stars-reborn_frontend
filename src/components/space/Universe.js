import React from 'react';
import { connect } from 'react-redux';
import { retrieveSpace } from '../../actions';
import Planet from './Planet';

class Universe extends React.Component {
    componentDidMount() {
        this.props.retrieveSpace();
    }

    renderPlanets() {
        return this.props.space.planets.map( (planet) => {
            return (
                <Planet key={planet.id} details={planet} />
            );
        });
    }

    render() {
        if (!this.props.space) {
            return (
                <div>
                Loading...
                </div>
            );
        }

        const spaceWidth = this.props.space.bound.xMax * this.props.zoomMultiplier + 25;
        const spaceHeight = this.props.space.bound.yMax * this.props.zoomMultiplier + 25;

          //  <rect x="0" y="0" width={boundaryWidth} height={boundaryHeight} fill="gray" />

        return (
            <div style={{overflow: 'auto', height: '500px', width: '500px'}}>
            <svg width={spaceWidth} height={spaceHeight}>
            <rect x="0" y="0" width={spaceWidth} height={spaceHeight} fill="black" />
            {this.renderPlanets()}
            </svg>
            </div>
        );
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
        zoomMultiplier: zoomMultiplier,
        space: state.space
    };
};

export default connect(mapStateToProps, { retrieveSpace } )(Universe);
