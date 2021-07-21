import axios from 'axios'
import React, { Component } from 'react'

export default class Vremea extends Component {
    constructor() {
        super();
        this.state = {
            weather:""
        };
    }
    componentDidMount = () => {
        axios.get("/TemperaturaBucuresti").then(response => {
            this.setState({
                weather: response.data.temperature
            });
        });
    };
    render() {
        return (
            <div>
                <h5>{this.state.weather +'°C'}</h5>
            </div>
        )
    }
}
