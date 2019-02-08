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
import { getPlanetById } from '../gameUtils';


class SpaceStatus extends React.Component {
    render() {
        return (
            <div className="ui menu">
                <div className="item">
                    ID: {this.props.id}
                </div>
                <div className="item">
                    X: {this.props.x}
                </div>
                <div className="item">
                    Y: {this.props.y}
                </div>
                <div className="item">
                    Name: {this.props.name}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let id = 0;
    let x = 0;
    let y = 0;
    let name = 0;

    if (state.selectedObject && 'planet' in state.selectedObject) {
        id = state.selectedObject.planet;
        let planet = getPlanetById(state, id);

        if (planet) {
            name = planet.name;
            x = planet.loc.x;
            y = planet.loc.y;
        }
    }

    return {
        id: id,
        x: x,
        y: y,
        name: name
    };
};

export default connect(mapStateToProps)(SpaceStatus);
