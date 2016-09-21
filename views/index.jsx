import React from 'react';
import DefaultLayout from './layout';

let indexPage = React.createClass({
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
      </DefaultLayout>
    );
  }
});

module.exports = indexPage;