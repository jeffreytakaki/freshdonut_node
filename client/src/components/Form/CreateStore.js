import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class addStoreForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name:'',
            description: '',
            owner: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(this.props.storeitem) {
            this.setState({
                _id: this.props.storeitem.id,
                name: this.props.storeitem.name,
                description: this.props.storeitem.description,
                owner: this.props.storeitem.owner
            })
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addUserStore(this.state)
    }

    render() {

        return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
                    </label>
                    <label>
                        Description:
                        <input type="text" value={this.state.description} name="description" onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        );
    }


}

export default connect(null, actions)(addStoreForm)