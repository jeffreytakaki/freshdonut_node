import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class addDonutForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            name:'',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDonutSubmit = this.handleDonutSubmit.bind(this);
    }

    componentDidMount() {
        console.log(this.props.storeitem)
        if(this.props.storeitem) {
            this.setState({
                _id: this.props.storeitem._id,
            })
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleDonutSubmit(event) {
        event.preventDefault();
        this.props.addDonut(this.state)

    }

    render() {

        return (
                <form onSubmit={this.handleDonutSubmit}>
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

export default connect(null, actions)(addDonutForm)