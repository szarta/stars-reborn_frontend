import React from 'react';
import { connect } from 'react-redux';
import { modifyPlanetView, modifyZoomLevel } from '../actions';
import { PlanetViewEnum } from '../gameUtils';

class SpaceMenu extends React.Component {
    zoomLevelChanged = (e) => { this.props.modifyZoomLevel(e.target.value); }
    planetViewChanged = (e) => { this.props.modifyPlanetView(e.target.value); }

    render() {
        return (
            <div className="ui menu">
                <select className="ui dropdown" value={this.props.planetView} onChange={this.planetViewChanged}>
                    <option value={PlanetViewEnum.NORMAL}>Normal View</option>
                    <option value={PlanetViewEnum.SURFACE_MINERALS}>Surface Minerals View</option>
                    <option value={PlanetViewEnum.MINERAL_CONCENTRATION}>Mineral Concentration View</option>
                    <option value={PlanetViewEnum.PLANET_VALUE}>Planet Value View</option>
                    <option value={PlanetViewEnum.POPULATION}>Population View</option>
                    <option value={PlanetViewEnum.NO_INFO}>No Player Info View</option>
                </select>
                <select className="ui dropdown" value={this.props.zoomLevel} onChange={this.zoomLevelChanged}>
                    <option value="25">25%</option>
                    <option value="38">38%</option>
                    <option value="50">50%</option>
                    <option value="100">100%</option>
                    <option value="125">125%</option>
                    <option value="150">150%</option>
                    <option value="200">200%</option>
                    <option value="400">400%</option>
                </select>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        zoomLevel: state.zoomLevel,
        planetView: state.planetView
    };
};

export default connect(mapStateToProps, { modifyPlanetView, modifyZoomLevel } )(SpaceMenu);
