import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SalaryInputTable from './components/SalaryInputTable';
import DefaultLayout from './layout';

let salaryInputTablePage = React.createClass({
  render() {
    return (
      <DefaultLayout title={this.props.title}>
          <SalaryInputTable />
      </DefaultLayout>
    );
  }
});
module.exports = salaryInputTablePage;