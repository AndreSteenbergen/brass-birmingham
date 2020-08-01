import React from "react";
import { connect } from "react-redux";

class CurrentGame extends React.Component {
    render() {
        return <span>CURRENT GAME</span>
    }
}


const mapStateToProps = state => {
    return {    
       
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( CurrentGame );