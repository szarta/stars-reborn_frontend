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

        const boundWidth = this.props.space.bound.xMax * this.props.zoomMultiplier + 25;
        const boundHeight = this.props.space.bound.xMax * this.props.zoomMultiplier + 25;
        return (
            <div>
            <svg width={boundWidth} height={boundHeight}>
            <rect x="0" y="0" width={boundWidth} height={boundHeight} fill="black" />
            {this.renderPlanets()}
            </svg>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    let zoomMultiplier = 1.0;
    switch(state.zoomLevel) {
        case 25:
            zoomMultiplier = 0.25;
            break;

        case 38:
            zoomMultiplier = 0.38;
            break;

        case 50:
            zoomMultiplier = 0.50;
            break;

        case 100:
            zoomMultiplier = 1.0;
            break;

        default:
            zoomMultiplier = 1.0;
    }

    return { 
        zoomMultiplier: zoomMultiplier,
        zoomLevel: state.zoomLevel,
        space: state.space
    };
};

export default connect(mapStateToProps, { retrieveSpace } )(Universe);
