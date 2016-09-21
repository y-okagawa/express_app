import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SalaryInputTable from './components/SalaryInputTable';
import DefaultLayout from './layout';

let salaryInputTablePage = React.createClass({
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div id="salary_input_table">
          ReactDOMServer.renderToString(<SalaryInputTable />)
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = salaryInputTablePage;