/*
 *  Copyright 2019 Brandon Arrendondo
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a
 *  copy of this software and associated documentation files (the "Software"),
 *  to deal in the Software without restriction, including without limitation
 *  the rights to use, copy, modify, merge, publish, distribute, sublicense,
 *  and/or sell copies of the Software, and to permit persons to whom the
 *  Software is furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 *  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 *  DEALINGS IN THE SOFTWARE.
 */
import React from 'react';
import { connect } from 'react-redux';
import { modifyPlanetView, modifyZoomLevel, modifyShowPlanetNames } from '../actions';
import { PlanetViewEnum } from '../gameUtils';


class SpaceMenu extends React.Component {
    zoomLevelChanged = (e) => { this.props.modifyZoomLevel(e.target.value); }
    planetViewChanged = (e) => { this.props.modifyPlanetView(e.target.value); }
    showPlanetNamesChanged = (e) => {
        this.props.modifyShowPlanetNames(e.target.checked);
    }

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
                <div className="ui checkbox">
                    <input type="checkbox" name="Planet Name Overlay" checked={this.props.showPlanetNames} onChange={this.showPlanetNamesChanged} />
                    <label>Show Planet Names</label>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        zoomLevel: state.zoomLevel,
        planetView: state.planetView,
        showPlanetNames: state.showPlanetNames,
    };
};

export default connect(mapStateToProps, { modifyPlanetView, modifyZoomLevel, modifyShowPlanetNames } )(SpaceMenu);
