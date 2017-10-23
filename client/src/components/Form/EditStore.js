import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class editStoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addStore(this.state)
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.props.name} name="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={this.props.description} name="description" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        );
    }


}



export default connect(null, actions)(editStoreForm)