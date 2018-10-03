import React, { Component } from 'react';
import data from '../data.json';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';

export default class ProductTable extends Component {
    render() {
    let categories = []
    data.data.forEach(element => {
        if (!categories.includes(element.category)) {
            categories.push(element.category)
        }            
    });
    console.log(categories)
        
        return (
            <table>
                <thead>
                    {categories.map((e) => {
                        return <ProductCategoryRow category={e}/> /*{ {category.e } }*/
                    })}
                    <ProductCategoryRow />
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((e, i) => {
                        return (
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table >

        )




    }


}