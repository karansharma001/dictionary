import React, { Component } from 'react'
import "./main.css"

export class Def extends Component {
    render() {
        return (
            <div className="container text-center defs">
            
                <li className="my-3">{this.props.defs}</li>
            </div>
        )
    }
}

export default Def
