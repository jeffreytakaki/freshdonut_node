import React from 'react';
import { connect } from 'react-redux';

class Stores extends React.Component {

    render() {
        return (
                <div className="stores-container">
                    <div className="">
                        Stores Section
                    </div>
                </div>
        );
    }
}

function mapStateToProps(state) {
    // get state from store and pass into Header as props
    return { auth: state.stores }
}


export default connect(mapStateToProps)(Stores); //connect Header to store
