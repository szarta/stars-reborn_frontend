import React from 'react';
import { connect } from 'react-redux';
import { zoomLevelToMultiplier } from '../../gameUtils';

class Scans extends React.Component {
    renderScans() {
        return null;
    }

    render() {
        return this.renderScans();
    }
}

const mapStateToProps = (state) => {
    let zoomMultiplier = zoomLevelToMultiplier(state.zoomLevel);

    return {
        zoomLevel: parseInt(state.zoomLevel),
        zoomMultiplier: zoomMultiplier,
        space: state.space
    };
};

export default connect(mapStateToProps)(Scans);
