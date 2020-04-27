import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.email + " added db");
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email"> Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="enter mail"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password"> password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description"> description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="enter description"
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">city</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandler}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Yozgat</option>
            </Input>
          </FormGroup>
          <Button type="submit" value="save">Kaydet</Button>
        </Form>
      </div>
    );
  }
}
