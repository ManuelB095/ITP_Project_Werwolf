import React, { Component } from 'react'
import name from './name.js'
import PropTypes from 'prop-types';

class namelist extends Component {
    render() {
        return this.props.namelist.map((names) => (<name names={names} />));
    }
}

export default namelist;

name.PropTypes = {
    names: PropTypes.array.isRequired
}