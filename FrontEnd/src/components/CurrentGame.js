import React from "react";
import { connect } from "react-redux";

import { Cities } from "../constants";

class CurrentGame extends React.Component {
    render() {
        console.log( this.props );
        return <span>CURRENT GAME: {this.props.gameId} ({this.props.numberOfPlayers} players)</span>
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