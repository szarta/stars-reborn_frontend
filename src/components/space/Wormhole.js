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
import { zoomLevelToMultiplier } from '../../gameUtils';
import { selectSpaceObject } from '../../actions';

class Wormhole extends React.Component {
    wormholeClicked = () => {
        let selection = { 'wormhole': this.props.details.id };
        this.props.selectSpaceObject(selection);
    }

    render() {
        let xPos = (this.props.details.loc.x - 975) * this.props.zoomMultiplier;
        let yPos = (this.props.details.loc.y - 975) * this.props.zoomMultiplier;

        return (
            <g
                onClick={this.wormholeClicked}
                transform={`translate(${xPos}, ${yPos})`}>
                <image
                    width='9' height='9' x='0' y='0' xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQBAMAAAAVaP+LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEVgYACAAID/AP+AAAAAAAD///8rXdN8AAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfjAgsJNR6mKtO3AAAAjUlEQVRo3u3XsQ2AIBRFUVZwBVdwBfefyQYsfvKiEezO7eCbIxXR1npbaMz3XnsKBAKBJqGnFySwzkEgEGgW2kvpogOBQKC/oDQ4emdvrOsJQCAQaBVUN0ZnqD7XaiAQCPQRqhtj/fZiuy9GEAgEWgy9/fGrH2ggEAj0F5TmMRAIBJqEUgmsgUAg0CLoAtQqyh9qhajfAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTExVDA5OjUzOjMwLTA1OjAw+5VISQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0xMVQwOTo1MzozMC0wNTowMIrI8PUAAAAASUVORK5CYII="
                />
            </g>
        );
    }
}

const mapStateToProps = (state) => {
    let zoomMultiplier = zoomLevelToMultiplier(state.zoomLevel);

    return {
        zoomMultiplier: zoomMultiplier
    };
};

export default connect(mapStateToProps, { selectSpaceObject } )(Wormhole);
