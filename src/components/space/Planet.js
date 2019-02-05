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
import { PlanetViewEnum, zoomLevelToMultiplier } from '../../gameUtils';
import { selectSpaceObject, focusSpaceObject } from '../../actions';


class Planet extends React.Component {
    planetClicked = () => {
        let selection = { 'planet': this.props.details.id };

        if (this.props.selectedId === this.props.details.id) {
            //console.log("focusing the id " + this.props.details.id );
            this.props.focusSpaceObject(selection);
        } else {
            //console.log("selecting the id " + this.props.details.id );
            this.props.selectSpaceObject(selection);
        }
    }

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

    hasRelatedEnemyFleets() {
        if('relatedEnemyFleets' in this.props.details) {
            if(this.props.details.relatedEnemyFleets.length > 0) {
                return true;
            }
        }

        return false;
    }

    hasRelatedFriendlyFleets() {
        if('relatedFriendlyFleets' in this.props.details) {
            if(this.props.details.relatedFriendlyFleets.length > 0) {
                return true;
            }
        }

        return false;
    }


    hasOutline() {
        return (this.hasRelatedEnemyFleets() || this.hasRelatedFriendlyFleets());
    }

    hasStarbase() {
        if('relatedStarbase' in this.props.details) {
            return this.props.details.relatedStarbase;
        }

        return false;
    }

    outlineColor() {
        if (this.hasRelatedEnemyFleets() && this.hasRelatedFriendlyFleets()) {
            return 'purple';
        } else if(this.hasRelatedFriendlyFleets()) {
            return 'white';
        } else if(this.hasRelatedEnemyFleets()) {
            return 'red';
        }

        return 'black';
    }

    renderNormalViewPlanet() {
        return (
            <g className="planet">
                <circle r="5" stroke="#366b01" strokeWidth="2" fill="#05ff00" />
                {this.hasOutline() ? <circle r='10' stroke={this.outlineColor()} strokeWidth='1' fill='none'/> : null},
                {this.hasStarbase() ? <circle cx='6' cy='-4' r='3' fill='white' /> : null}
            </g>
        );
    }

    renderPlanetValueViewPlanet() {
        if (!('currentValue' in this.props.details)) {
            return (
                <rect width="5" height="5" fill="grey" />
            );
        }

        if (!('potentialValue' in this.props.details)) {
            return (
                <rect width="5" height="5" fill="grey" />
            );
        }

        if (this.props.details.potentialValue < 0) {
            let radius = ((-1 * this.props.details.currentValue) / 10) + 2;
            return (
                <circle r={radius} fill="red" />
            );
        }

        let radius = this.props.details.currentValue / 10;
        return (
            <circle r={radius} fill='yellow' stroke='green' strokeWidth='2' />
        );
    }

    renderPlanet() {
        if (this.props.details.seenBefore === false) {
            return (
                <rect width="5" height="5" fill="grey" />
            );
        }

        switch (this.props.planetView) {
            case PlanetViewEnum.NORMAL:
                return this.renderNormalViewPlanet();

            case PlanetViewEnum.PLANET_VALUE:
                return this.renderPlanetValueViewPlanet();

            case PlanetViewEnum.NO_INFO:
                return (
                    <rect width="5" height="5" fill="grey" />
                );

            default:
                return null;
        }
    }

    renderName() {
        if (this.showName()) {
            return (
                <text
                    style={{
                        fill:'#ffffff',
                        stroke: 'none',
                        textAnchor: 'middle',
                        fontSize: `${this.getFontSize()}px`,
                        fontFamily: 'Arial',
                        fontWeight: 'bold'}}
                    transform='translate(0,20)'
                >
                    {this.props.details.name}
                </text>
            );
        }

        return null;
    }

    render() {
        let xPos = (this.props.details.loc.x - 975) * this.props.zoomMultiplier;
        let yPos = (this.props.details.loc.y - 975) * this.props.zoomMultiplier;

        return (
            <g className="node" onClick={this.planetClicked} transform={ `translate(${xPos}, ${yPos})` }>
                {this.renderPlanet()}
                {this.renderName()}
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    let zoomMultiplier = zoomLevelToMultiplier(state.zoomLevel);

    let selectedId = (state.selectedObject && 'planet' in state.selectedObject ) ? state.selectedObject.planet : -1;
    let focusedId = (state.focusedObject && 'planet' in state.focusedObject ) ? state.focusedObject.planet : -1;

    return {
        selectedId: selectedId,
        focusedId: focusedId,
        zoomLevel: parseInt(state.zoomLevel),
        zoomMultiplier: zoomMultiplier,
        planetView: parseInt(state.planetView)
    };
};

export default connect(mapStateToProps, { selectSpaceObject, focusSpaceObject })(Planet);
