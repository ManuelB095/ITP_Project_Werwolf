import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class name extends Component {

    getStyle = () => {
        return {
            background: '',
            padding: '1em',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.names.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.names.title}</p>
                
            </div>
        )
    }
}

// Prop Types 
// eslint-disable-next-line react/no-typos
name.PropTypes = {
    name: PropTypes.array.isRequired
}