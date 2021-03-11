import { Component } from 'react'

export default class Weather extends Component {
    state = {
        zipCode: '',
        temp: '',
        city: ''
    }
    fetchWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98`)
        const json = await response.json()
        this.setState({
            zipCode: this.state.zipCode,
            temp: (Math.floor(json.main.temp)),
            city: json.name
        })
    }
    
    handleChange = (e) => {
        this.setState({
            zipCode: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchWeather()
    }
    render() {
        return (
            <div>
                <h1>Weather App</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="zip-code"
                        onChange={this.handleChange}
                        value={this.state.zipCode}
                    />
                    <input 
                        type="submit"
                    />
                </form>
                <h3>{this.state.city}</h3>
                <h3>{this.state.temp}</h3>
            </div>
        )
    }
}