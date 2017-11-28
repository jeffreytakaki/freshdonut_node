import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class SearchAddress extends React.Component {
    constructor(props) {
        super(props)
        this.state = { address: 'San Francisco, CA' }
        this.onChange = (address) => this.setState({ address })
    }

    componentWillMount() {

    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        geocodeByAddress(this.state.address)
                .then((results) => {
                    console.log('results =>', results);
                    console.log('getLatLng =>', getLatLng(results[0]));
                    getLatLng(results[0])
        })
                .then(latLng => console.log('Success', latLng))
                .catch(error => console.error('Error', error))
    }

    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
        }
        console.log(this.state)
        return (
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete inputProps={inputProps} />
                    <button type="submit">Submit</button>
                </form>
        )
    }
}

export default SearchAddress