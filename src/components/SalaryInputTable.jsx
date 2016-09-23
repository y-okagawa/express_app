import React, {Component} from 'react'

export default class SalaryInputTable extends Component {

constructor(props) {
    super(props);
    this.state = {
      salary_infos: [
        { name: '山田 太郎', domestic: true, values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], bonus: 12, total: 24 },
        { name: '田中 二郎', domestic: false, values: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], bonus: 24, total: 48 }
      ],
      salary_total: {
        values: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], bonus: 36, total: 72
      }
    };
  }

  // 給与設定
  setSalary(row_index, value_index, change_value) {
    var salary_infos = this.state.salary_infos;
    var salary_total = this.state.salary_total;
    var diff = change_value - salary_infos[row_index].values[value_index];
    salary_infos[row_index].values[value_index] += diff;
    salary_infos[row_index].total += diff;
    salary_total.values[value_index] += diff;
    salary_total.total += diff;
    this.setState({
      salary_infos: salary_infos,
      salary_total: salary_total
    });
  }

  // 賞与設定
  setBonus(row_index, change_value) {
    var salary_infos = this.state.salary_infos;
    var salary_total = this.state.salary_total;
    var diff = change_value - salary_infos[row_index].bonus;
    salary_infos[row_index].bonus += diff;
    salary_infos[row_index].total += diff;
    salary_total.bonus += diff;
    salary_total.total += diff;
    this.setState({
      salary_infos: salary_infos,
      salary_total: salary_total
    });
  }

  // 給与合計計算
  calcTotalSalary(row) {
    var total = 0;
    row.values.map((value) => {
        total += Number(value)
    })
    return total + Number(row.bonus);
  }

  render() {
    return (
      <table className="table is-bordered is-striped is-narrow">
        <thead>
          <tr>
            <th className="has-text-centered">No</th>
            <th className="has-text-centered">名前</th>
            <th className="has-text-centered">国内雇用者</th>
            {[...Array(12)].map((x, i) => {
              return <th key={i} className="has-text-centered">{i + 1}月</th>;
            })}
            <th className="has-text-centered">賞与</th>
            <th className="has-text-centered">合計</th>
          </tr>
        </thead>
        <tfoot>
          <TotalRow salary_total={this.state.salary_total} />
        </tfoot>
        <tbody>
          {this.state.salary_infos.map((row, index) => {
            return <SalaryInputRow key={index} row_index={index} row={row} setSalary={this.setSalary.bind(this)} setBonus={this.setBonus.bind(this)} />;
          })}
        </tbody>
      </table>
    );
  }
}

class SalaryInputRow extends React.Component {
  // 給与変更
  onChangeSalary(value_index, e) {
    this.props.setSalary(this.props.row_index, value_index, e.target.value)
  }

  // 賞与変更
  onChangeBonus(e) {
    this.props.setBonus(this.props.row_index, e.target.value)
  }

  render() {
    return (
      <tr>
        <td>{this.props.row_index + 1}</td>
        <td>{this.props.row.name}</td>
        <td>{(this.props.row.domestic)? '該当' : '非該当'}</td>
        {this.props.row.values.map((value, index) => {
          return (
            <td key={index}>
              <input key={index} className="input is-small has-text-right" type="text" defaultValue={value} onChange={this.onChangeSalary.bind(this, index)}/>
            </td>
          )
        })}
        <td><input className="input is-small has-text-right" type="text" defaultValue={this.props.row.bonus} onChange={this.onChangeBonus.bind(this)} /></td>
        <td className="has-text-right">{this.props.row.total}</td>
      </tr>
    );
  }
}

class TotalRow extends React.Component {
  render() {
    return (
      <tr>
        <td colSpan="3"></td>
        {this.props.salary_total.values.map((value, index) => {
          return (
            <td key={index} className="has-text-right">{value}</td>
          )
        })}
        <td className="has-text-right">{this.props.salary_total.bonus}</td>
        <td className="has-text-right">{this.props.salary_total.total}</td>
      </tr>
    )
  }
}
