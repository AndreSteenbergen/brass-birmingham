import React from "react";
import { connect } from "react-redux";

class CurrentGame extends React.Component {
    render() {
    return <span>CURRENT GAME: {this.props.currentGameId}</span>
    }
}


const mapStateToProps = state => {
    return {    
        currentGameId : state.profile.currentGame
     }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( CurrentGame );