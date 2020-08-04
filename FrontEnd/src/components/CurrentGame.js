import React from "react";
import { connect } from "react-redux";

import { Cities } from "../constants";

class CurrentGame extends React.Component {
    render() {
        console.log( this.props );
        return <div>
            <span>CURRENT GAME: {this.props.gameId} ({this.props.numberOfPlayers} players)</span>
            <svg viewBox="0 0 4000 4000" style={{ background : 'url(/images/board.jpg)', backgroundSize : 'cover'}}>
                {Object.keys(Cities).map(c => (
                    <g key={c} transform={`translate(${Cities[c].coordinates.x} ${Cities[c].coordinates.y})`}>
                        <text x="0" y="0" fontSize="22" style={{textAnchor: 'middle', dominantBaseline: 'middle'}}>{Cities[c].name}</text>
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