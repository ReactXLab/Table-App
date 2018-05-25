import React, { Component } from 'react';
import data from './data.json'; 
var DataTable = require('react-data-components').DataTable;


class Table extends Component {


  render() {
    var columns = [
      { title: '型號', prop: 'model' },
      { title: '品名', prop: 'item' },
      { title: '建議售價', prop: 'rrp' },
      { title: '庫存', prop: 'stock' }
    ];

    // var data = [
    //   dataJson
    // ];
    return (
      <DataTable
        keys="name"
        columns={columns}
        initialData={data}
        initialPageLength={20}
        initialSortBy={{ prop: 'city', order: 'descending' }}
      />
    );
  }
}

export default Table
