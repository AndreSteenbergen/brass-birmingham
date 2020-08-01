import React from "react";
import { connect } from "react-redux";

class GameList extends React.Component {
    render() {
        return <span>GAME LIST</span>;
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {    
       
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( GameList );