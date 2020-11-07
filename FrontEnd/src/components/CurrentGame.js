import React from "react";
import { connect } from "react-redux";

import { Cities, Industries, PlayerColors } from "../constants";
import { takeSeat } from "../redux/actions/boardActions";

import './game.scss'


class CurrentGame extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            selectedPlayers: {}
            
        };
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
    
    togglePlayer(color){
       
        let selectedPlayers = {...this.state.selectedPlayers};
        selectedPlayers[color] = !selectedPlayers[color];
        this.setState({selectedPlayers: selectedPlayers});

    }
    
    startGame() {
        this.props.takeSeat && this.props.takeSeat(this.props.boardId, Object.keys(this.state.selectedPlayers));
    }

    renderPlayerOptions() {
        let numberOfPlayers = this.props.numberOfPlayers;
        
        let playerOptions = Object.keys(PlayerColors);
        let selectedPlayers = this.state.selectedPlayers;

        let chosenPlayers = 0;
        for (let i = 0; i < playerOptions.length; i++) {
            if (selectedPlayers[playerOptions[i]]) chosenPlayers += 1;            
        }
        
        return <div><h2>Choose {numberOfPlayers} players</h2><ul className="playerselection">
            {playerOptions.map(p => <li key={p}>
                <input type="checkbox" checked={!!this.state.selectedPlayers[p]} onChange={() => this.togglePlayer(p)}/>
                <img alt={`${PlayerColors[p].playerPrefix}player`} src={`/images/${PlayerColors[p].playerPrefix}player.jpg`} />
                </li>)}            
        </ul>
                <p>Already {chosenPlayers} chosen players;</p>
                {chosenPlayers === numberOfPlayers ? <button onClick={() => this.startGame()}>Start game</button> : null }
        </div>;
    }

    renderSelectedPlayers() {
        return this.props.selectedPlayers.map((p, i) => <image
            key={p}
            preserveAspectRatio="xMidYMid meet"
            xlinkHref={`/images/${PlayerColors[p].playerPrefix}player.jpg`}
            clipPath="url(#avatar-clip)"
            transform={`translate(275,${2560+i*323})`}
            x="0"
            y="0"
            width="260"
            height="260" />
        )
    }

    renderMarkets() {
        let result = [];
        
        let i = this.props.coalMarket;
        while (i) {
            let j = 14 - i;
            result.push(<circle key={`coal-${j}`} cx={3380 + 85 * (1 - (j % 2))} cy={2075 - (j - (j % 2)) * 60.4} r={25} stroke="white" strokeWidth="3" fill="black" />);
            i--;
        }

        i = this.props.ironMarket;
        while (i) {
            let j = 10 - i;
            result.push(<circle key={`iron-${j}`} cx={3600 + 85 * (1 - (j % 2))} cy={2075 - (j - (j % 2)) * 60.4} r={25} stroke="black" strokeWidth="3" fill="orange" />);
            i--;
        }


        return result;
    }

    renderDeck() {
        let startLength = this.props.cardCount;
        let currentLength = this.props.cardDeck.length;
        let diff = startLength - currentLength;

        let w = 499 * 0.9;
        let h = 702 * 0.9;

        return this.props.cardDeck.map((p, i) => <image
            key={ i + diff }
            preserveAspectRatio="xMidYMid meet"
            xlinkHref={`/images/cardback.jpg`}
            transform={` translate(${865-i*0.5} ,${395-i}) rotate(90)  `}
            x="0"
            y="0"
            width={w}
            height={h} />
        )
    }

    render() {
        console.log( this.props );
        return <div className="currentgame">
            
            {(this.props.gameId && (
                <>
                <span>CURRENT GAME: {this.props.gameId} ({this.props.numberOfPlayers} players)</span>

                {(!this.props.past.length && this.renderPlayerOptions()) ||
                    <svg viewBox="0 0 4000 4000">
                        <defs>
                            <clipPath id="avatar-clip">
                            <circle cx="130" cy="130" r="130" />
                            </clipPath>

                        </defs>

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

                        {this.renderDeck()}
                        {this.renderMarkets()}
                        {this.renderSelectedPlayers()}
                    </svg>
                }
            </>
            )) || <span>Kies een spel of start een nieuw spel</span>}
        </div>
    }
}


const mapStateToProps = state => {
    return { ...state[state.profile.currentGame], gameId : state.profile.currentGame }
}

const mapDispatchToProps = dispatch => {
    return {
        takeSeat : (boardId, selectedPlayers) => dispatch( takeSeat(boardId, selectedPlayers ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( CurrentGame );