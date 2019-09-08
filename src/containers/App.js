import React, {Component }from 'react'
import CardList from './CardList';
import SearchBox from '../components/SearchBox'
import axios from 'axios'
import Scroll from '../components/Scroll'

import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ' '
        }
    }

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = response.data
        this.setState({
            robots: data
        })
        console.log(this.state.robots)
    }

    onSearchChange = (event) => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render () {
    
    if (this.state.robots.length === 0) {
        return <h1>Loading</h1>
    } else {
        const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())})
    return (
        <div className="tc">
            <h1 className="f1">Robot Friends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots} />
            </Scroll>

        </div>
        
    )}}
}

export default App