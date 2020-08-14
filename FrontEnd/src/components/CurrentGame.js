import React from "react";
import { connect } from "react-redux";

import { Cities, Industries } from "../constants";

import './game.scss'

class CurrentGame extends React.Component {
    constructor (props) {
        super(props);

        this.state = {};
    }

    highlight(industry) {
        this.setState({ selectedIndustry : industry});
    }

    renderIndustries(cityKey) {
        let selectedItem = this.state.selectedIndustry || "NO-MATCH";
        let city = Cities[cityKey];
        
        let base = city.base || 2;
        let current = city.industries.length - 1;
        let written = 0;
        
        let square = 180;
        let rx = 15;
        let margin = 6;
        let currentY = (- city.initialDeltaY || 0) - margin;
        let currentX = city.initialDeltaX || 0;

        let squares = [];
        
        while (current >= 0) {
            if (written % base === 0) {
                currentY -= square + margin;
                currentX = city.initialDeltaX || 0;

                if ((current + 1) < base) {
                    currentX -= ((current + 1)  / 2) * square;
                }
            }

            squares.push({
                x : currentX,
                y : currentY,
                industries : city.industries[current],
                selected : city.industries[current].indexOf(selectedItem) > -1
            });

            currentX -= square + margin;

            current--;
            written++;
        }

        
        return <g>{squares.map((s,i) =><rect
                className={`industry ${s.selected ? 'selected' : ''}`}
                key={`ind-${i}`}
                x={s.x - (s.selected ? square * .1 : 0)}
                y={s.y - (s.selected ? square * .1 : 0)}
                width={square * (s.selected ? 1.2 : 1)}
                height={square * (s.selected ? 1.2 : 1)}
                rx={rx}
                />)}</g>;
    }

    render() {
        console.log( this.props );
        return <div className="currentgame">
            <span>CURRENT GAME: {this.props.gameId} ({this.props.numberOfPlayers} players)</span>
            <svg viewBox="0 0 4000 4000">
                <g className="selectors">
                    <image onMouseEnter={() => this.highlight(Industries.POTTERY)} onMouseLeave={() => this.highlight(null)} preserveAspectRatio="xMidYMid meet" xlinkHref="./images/pottery.png" x="100" y="100" width="140" height="140"></image>
                    <image onMouseEnter={() => this.highlight(Industries.MAN_GOODS)} onMouseLeave={() => this.highlight(null)} preserveAspectRatio="xMidYMid meet" xlinkHref="./images/manufactured-goods.png" x="100" y="300" width="140" height="140"></image>
                    <image onMouseEnter={() => this.highlight(Industries.COTTON)} onMouseLeave={() => this.highlight(null)} preserveAspectRatio="xMidYMid meet" xlinkHref="./images/cotton-mill.png" x="100" y="500" width="140" height="140"></image>
                    <image onMouseEnter={() => this.highlight(Industries.IRON)} onMouseLeave={() => this.highlight(null)} preserveAspectRatio="xMidYMid meet" xlinkHref="./images/iron-works.png" x="100" y="700" width="140" height="140"></image>
                    <image onMouseEnter={() => this.highlight(Industries.COAL)} onMouseLeave={() => this.highlight(null)} preserveAspectRatio="xMidYMid meet" xlinkHref="./images/coal-mine.png" x="100" y="900" width="140" height="140"></image>
                    <image onMouseEnter={() => this.highlight(Industries.BEER)} onMouseLeave={() => this.highlight(null)} preserveAspectRatio="xMidYMid meet" xlinkHref="./images/brewery.png" x="100" y="1100" width="140" height="140"></image>
                </g>

                {Object.keys(Cities).map(c => (
                    <g key={c} transform={`translate(${Cities[c].coordinates.x} ${Cities[c].coordinates.y})`}>
                        <text x="0" y="0">{Cities[c].name}</text>
                        {this.renderIndustries(c)}
                    </g>
                ))}
            </svg>
        </div>
    }
}


const mapStateToProps = state => {
    return { ...state[state.profile.currentGame], gameId : state.profile.currentGame }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( CurrentGame );