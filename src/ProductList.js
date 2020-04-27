import React, { Component } from "react";
import { Table , Button} from "reactstrap";

export default class componentName extends Component {
    
  render() {
    return (
      <div>
        <h4>
          {this.props.title} - {this.props.currentCategory}
        </h4>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>productName</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th>add to cart</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="info" onClick={() => this.props.addToCart(product)}>add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
