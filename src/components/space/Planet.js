import React from 'react';
import { connect } from 'react-redux';
import { PlanetViewEnum, zoomLevelToMultiplier } from '../../gameUtils';
import { selectSpaceObject, focusSpaceObject } from '../../actions';

class Planet extends React.Component {
    planetClicked = (e) => {
        console.log(this.props.selectedId);
        let selection = { "planet": this.props.details.id };

        if (this.props.selectedId === this.props.details.id) {
            console.log("focusing the id " + this.props.details.id );
            this.props.focusSpaceObject(selection);
        } else {
            console.log("selecting the id " + this.props.details.id );
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

    renderPlanet() {
        if (this.props.details.seenBefore === false) {
            return (
                <rect width="5" height="5" fill="grey" />
            );
        }

        switch (this.props.planetView) {
            case PlanetViewEnum.NORMAL:
                return this.renderNormalViewPlanet();

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
};

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
