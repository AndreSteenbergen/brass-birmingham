import React from "react";
import { connect } from "react-redux";

import { setupGame } from "../redux/actions/boardActions";
import { selectGame } from "../redux/actions/userActions";

class GameList extends React.Component {
    //show a list of all active games, and also 3 buttons; create a new game with 2, 3 or 4 players
    
    render() {
        return (
        <div className="actionMenu">
            <ul className="activeGames">
                {this.props.profile.activeGames.map(g => <li onClick={() => this.props.selectGame(g.boardId)} key={g.boardId}>{g.boardId}</li>)}
            </ul>
            
            <div className="startGame">
                <h3>Start new game</h3>
                <button onClick={() => this.props.createGame(2) }>2 player game</button>
                <button onClick={() => this.props.createGame(3) }>3 player game</button>
                <button onClick={() => this.props.createGame(4) }>4 player game</button>
            </div>
        </div>);
    }
}


const mapStateToProps = state => {
    console.log(state);

    return {    
       profile : state.profile
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createGame : (nr) => {
            dispatch( setupGame(nr) )
        },
        selectGame : (id) => {
            dispatch( selectGame(id) )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( GameList );