import React, { Component } from 'react';
import data from '../data.json'


export default class ProductCategoryRow extends Component {

    render() {
        console.log(this.props.data)
        return (
            
            <div>{this.props.category}</div>

        )
    }


}
