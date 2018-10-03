import React, { Component } from 'react';
import data from '../data.json'




export default class SearchBar extends Component {
    render() {
        return (
            <div class="control">
                <input class="input" type="text" placeholder="Search.." />
                <label class="checkbox">
                    <input type="checkbox" />
                    Only show products in stock
                </label>
            </div>

        )
    }


}

