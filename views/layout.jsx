import React from 'react';

let DefaultLayout = React.createClass({
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link type="text/css" rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;