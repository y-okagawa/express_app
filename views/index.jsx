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
              <div className="control is-horizontal is-pulled-right">
              <div className="control is-grouped">
                <span className="control">
                <button className="button is-info is-medium">保存</button>
                </span>
                <span className="control">
                <button className="button is-light is-medium">取消</button>
                </span>
                </div>
              </div>
              <div className="is-clearfix"></div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}
