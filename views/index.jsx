import React from 'react';
import DefaultLayout from './layout';

export default class SalaryInputTable extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <section className="section">
          <div className="container is-fluid">
            <div className="content">
              <h2 class="title is-2">基準雇用者給与等支給額の入力</h2>
              <div id="salary_input_table" >{this.props.SalaryInputTable}</div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}
