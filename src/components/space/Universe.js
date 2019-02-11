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

import { retrieveSpace } from '../../actions';
import Planet from './Planet';
import Fleet from './Fleet';
import Scan from './Scan';
import Wormhole from './Wormhole';
import { zoomLevelToMultiplier } from '../../gameUtils';


class Universe extends React.Component {
    componentDidMount() {
        this.props.retrieveSpace();
    }

    renderFleets() {
        return this.props.space.fleets.map((fleet) => {
            return (
                <Fleet key={fleet.id} details={fleet} />
            );
        });

    }

    renderScans() {
        return this.props.space.scans.map((scan, index) => {
            return (
                <Scan key={index} details={scan} />
            );
        });
    }

    renderPlanets() {
        return this.props.space.planets.map( (planet) => {
            return (
                <Planet key={planet.id} details={planet} />
            );
        });
    }

    renderWormholes() {
        return this.props.space.wormholes.map( (wormhole) => {
            return (
                <Wormhole key={wormhole.id} details={wormhole} />
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

        const spaceWidth = this.props.space.bound.xMax * this.props.zoomMultiplier + 50;
        const spaceHeight = this.props.space.bound.yMax * this.props.zoomMultiplier + 50;

        return (
            <div style={{overflow: 'auto', height: '600px'}}>
                <svg width={spaceWidth} height={spaceHeight}>
                    <rect x="0" y="0" width={spaceWidth} height={spaceHeight} fill="black" />
                    {this.renderScans()}
                    {this.renderPlanets()}
                    {this.renderFleets()}
                    {this.renderWormholes()}
                </svg>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let zoomMultiplier = zoomLevelToMultiplier(state.zoomLevel);

    return { 
        zoomMultiplier: zoomMultiplier,
        space: state.space
    };
};

export default connect(mapStateToProps, { retrieveSpace } )(Universe);
