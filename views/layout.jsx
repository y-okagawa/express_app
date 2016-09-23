import React from 'react';

export default class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
            <title>{this.props.title}</title>
            <link type="text/css" rel="stylesheet" href="/stylesheets/style.css" />
            <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.1.2/css/bulma.min.css" />
        </head>
        <body>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">所得拡大促進税制計算</h1>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container">
              <nav className="tabs is-boxed">
                <ul>
                  <li><a href="#">Top</a></li>
                  <li><a href="#">基本情報</a></li>
                  <li><a href="#">従業員情報</a></li>
                  <li className="is-active"><a href="#">給与入力</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
          {this.props.children}
        </body>
        <script src="/javascripts/build/bundle.js"></script>
      </html>
    );
  }
}