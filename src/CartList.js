import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class componentName extends Component {
    render() {
        return (
            <div>
                {this.props.cart.map(cartItem=>(
                    <tr key={cartItem.product.id}>
                    <td>{cartItem.product.id}</td>
                    <td>{cartItem.product.productName}</td>
                    <Button color = "danger" onClick={() =>this.props.removeFromCart(cartItem.product)}>revome cart</Button>
                    </tr>
                ))}
            </div>
        )
    }
}
