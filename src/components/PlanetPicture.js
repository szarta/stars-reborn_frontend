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
import { getPlanetImagePath } from './PlanetImages.js';
import { getPlanetById } from '../gameUtils';


class PlanetPicture extends React.Component {
    render() {
        let imagePath;
        if (this.props.name && this.props.isPlanet) {
            imagePath = getPlanetImagePath(this.props.id);
        }
        else {
            return null;
        }

        return (
            <div className="ui card">
                <div className="ui center aligned header">
                    {this.props.name}
                </div>
                <div className="content">
                    <div className="ui centered image" style={{maxWidth:'100px'}}>
                        <img
                            src={imagePath}
                            alt="The planet"/>
                    </div>
                    <div className="ui vertical buttons">
                        <div className="ui basic button">Previous</div>
                        <div className="ui basic button">Next</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    let name = '';
    let id = 0;
    let nextId = 0;
    let prevId = 0;
    let isPlanet = false;

    if (state.focusedObject && 'planet' in state.focusedObject) {
        isPlanet = true;
        id = state.focusedObject.planet;
        let planet = getPlanetById(state, id);
        if (planet) {
            name = planet.name;

            let index = state.space.ownedPlanets.forEach((planet, index) => {
                if (planet.id === id) {
                    return index;
                }
            });

            nextId = (index + 1) % state.space.ownedPlanets.length;
            prevId = (index - 1) % state.space.ownedPlanets.length;
        }
    }

    return {
        isPlanet: isPlanet,
        name: name,
        id: id,
        nextId: nextId,
        prevId: prevId
    };
};

export default connect(mapStateToProps)(PlanetPicture);
