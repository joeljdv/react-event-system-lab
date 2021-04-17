// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {
    handleKeyup = () => {
        console.log('Entering password...')
    }
    
    render() {
        return (
            <div>
                <form>
                    <input type="password" onKeyUp={this.handleKeyup}/>
                </form>
            </div>
        )
    }
}

